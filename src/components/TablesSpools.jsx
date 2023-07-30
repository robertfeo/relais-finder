import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"

export default function TablesContacts({ spools }) {
    return (
        <div>
            <Table className="font-primary">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[70px] font-bold">Spule</TableHead>
                        <TableHead className="font-primary font-bold">Zweck</TableHead>
                        <TableHead className="font-primary font-bold">Widerstand</TableHead>
                        <TableHead className="font-primary font-bold">Windungen</TableHead>
                        <TableHead className="font-primary font-bold">Ort</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {spools.map(spool => (
                        <TableRow key={spool.id}>
                            <TableCell className="font-medium">{spool.spule_id}</TableCell>
                            <TableCell className="font-thin">{spool.zweck}</TableCell>
                            <TableCell className="font-thin">{spool.widerstand || '-'}</TableCell>
                            <TableCell className="font-thin">{spool.windungen || '-'}</TableCell>
                            <TableCell className="font-thin">{spool.ortASB || '-'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    )
}
