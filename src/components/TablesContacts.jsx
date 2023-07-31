import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"

export default function TablesContacts({ contacts }) {

    if (contacts === '-' || contacts.length === 0 || contacts === undefined) {
        return (
            <div class="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    Daten nicht verfügbar.
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Table className="font-primary">
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px] font-bold">Kontakt</TableHead>
                            <TableHead className="font-bold">Ort</TableHead>
                            <TableHead className="font-bold">Zweck</TableHead>
                            <TableHead className="">Kontakt schließt nicht</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {contacts
                            .filter(contact => contact.kontakt_id.startsWith('A'))
                            .map(contact => (
                                <TableRow className="text-zinc-600" key={contact.kontakt_id}>
                                    <TableCell className="font-medium">{contact.kontakt_id}</TableCell>
                                    <TableCell className="">{contact.ortASB || '-'}</TableCell>
                                    <TableCell className="">{contact.zweck}</TableCell>
                                    <TableCell className="">{contact.kontaktSchliestNicht || '-'}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>

                    <TableBody>
                        {contacts
                            .filter(contact => contact.kontakt_id.startsWith('R'))
                            .map(contact => (
                                <TableRow className="text-zinc-600" key={contact.kontakt_id}>
                                    <TableCell className="font-medium">{contact.kontakt_id}</TableCell>
                                    <TableCell className="">{contact.ortASB || '-'}</TableCell>
                                    <TableCell className="">{contact.zweck}</TableCell>
                                    <TableCell className="">{contact.kontaktSchliestNicht || '-'}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        )
    }
}
