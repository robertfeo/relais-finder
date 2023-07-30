import { Suspense } from "react";
import TablesContacts from './TablesContacts';
import TablesSpools from './TablesSpools';

export default function RelayTables({ relayData }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {[relayData].map(relais => (
                <div key={relais.id} className="flex basis-8/12 flex-col space-y-10 bg-orange-300">
                    <div className="border p-5">
                        <h1 className="text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl dark:text-white font-primary mb-5">Spulen</h1>
                        <TablesSpools spools={relais.spule || '-'} />
                    </div>

                    <div className="border p-5">
                        <h1 className="text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl dark:text-white font-primary mb-5">Kontakte</h1>
                        <TablesContacts contacts={relais.kontakt || '-'} />
                    </div>
                </div>
            ))}
        </Suspense>
    )
}
