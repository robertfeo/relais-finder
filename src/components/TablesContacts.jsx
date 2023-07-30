import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"

export default function TablesContacts({ contacts }) {
    return (
        <div className="flex-1">
            <Table className="w-11/12 font-primary">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px] font-bold">Kontakt</TableHead>
                        <TableHead className="font-bold">Ort</TableHead>
                        <TableHead className="font-bold">Zweck</TableHead>
                        <TableHead className="font-bold">Kontakt schließt nicht</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {contacts.map(contact => (
                        <TableRow key={contact.kontakt_id}>
                            <TableCell className="font-medium">{contact.kontakt_id}</TableCell>
                            <TableCell className="">{contact.ortASB || '-'}</TableCell>
                            <TableCell className="">{contact.zweck}</TableCell>
                            <TableCell className="">{contact.kontaktSchliestNicht || '-'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    )
}
