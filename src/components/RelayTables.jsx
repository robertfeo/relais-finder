import { Suspense } from "react";
import TablesContacts from './TablesContacts';
import TablesSpools from './TablesSpools';

export default function RelayTables({ relayData }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {[relayData].map(relais => (
                <div key={relais.id} className="flex basis-8/12 flex-col space-y-10 bg-orange-300">
                    <div>
                        <TablesSpools spools={relais.spule || '-'} />
                    </div>

                    <div>
                        <TablesContacts contacts={relais.kontakt || '-'} />
                    </div>
                </div>
            ))}
        </Suspense>
    )
}
