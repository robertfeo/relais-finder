import TablesContacts from './TablesContacts'
import TablesSpools from './TablesSpools'

export default function RelayTables({ relay }) {

    return (
        <div className="flex flex-col mr-auto ml-auto mb-4 py-10 space-y-10 w-9/12">
            <TablesSpools spools={relay.spule || '-'} />
            <TablesContacts className="" contacts={relay.kontakt || '-'} />
        </div>
    )
}
