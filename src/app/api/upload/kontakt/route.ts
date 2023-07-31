import { db } from '@/lib/db';
import { Options, parse } from 'csv-parse';
import { createReadStream } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { pipeline } from 'stream';
import { promisify } from 'util';

export const config = {
    api: {
        bodyParser: false
    }
};

interface ExtendedNextApiRequest extends NextApiRequest {
    formData: () => Promise<{
        files: {
            file?: {
                path: string;
            }
        }
    }>
}

interface Row {
    kontakt_id: string;
    zweck: string;
    kontaktSchliestNicht: string;
    kurzRelBezeichnungId: string;
    ortASB_Id: string;
}

const results: Row[] = [];
const parser = parse('', { columns: true } as Options);

const streamPipeline = promisify(pipeline);

export default async (
    req: ExtendedNextApiRequest,
    res: NextApiResponse
) => {

    if (req.method === 'POST') {

        const { files } = await req.formData();

        if (!files || !files.file) {
            return res.status(400).json({ error: 'File required' });
        }

        const parser = parse({ columns: true });

        parser.on('readable', () => {
            let record;
            while ((record = parser.read()) !== null) {
                results.push(record);
            }
        });

        try {
            await streamPipeline(
                createReadStream(files.file.path),
                parser
            );

            await db.$transaction(results.map(row => {
                return db.kontakt.create({
                    data: {
                        kontakt_id: row.kontakt_id,
                        zweck: row.zweck,
                        kontaktSchliestNicht: row.kontaktSchliestNicht,
                        kurzRelBezeichnungId: row.kurzRelBezeichnungId
                    }
                });
            }));

            res.status(200).json({ message: 'Uploaded successfully' });

        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error uploading data' });
        }

    } else {
        res.status(405).json({ error: `Method ${req.method} not allowed` });
    }

};