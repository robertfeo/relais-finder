import { Suspense } from "react";
import TablesContacts from './TablesContacts';
import TablesSpools from './TablesSpools';

export default function RelayTables({ relayData }) {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="basis-9/12">
                    {[relayData].map(relais => (
                        <div key={relais.id} className="flex flex-col space-y-5">
                            <div className="flex flex-col dark:bg-gray-800 dark:border-gray-700 p-2">
                                <h1 className="text-2xl font-extrabold text-zinc-600 leading-none tracking-tight md:text-2xl lg:text-2xl dark:text-white font-primary mb-5">Spulen</h1>
                                <TablesSpools spools={relais.spule || '-'} />
                            </div>

                            <div className="flex flex-col dark:bg-gray-800 dark:border-gray-700 p-2">
                                <h1 className="text-2xl font-extrabold text-zinc-600 leading-none tracking-tight md:text-2xl lg:text-2xl dark:text-white font-primary mb-5">Kontakte</h1>
                                <TablesContacts contacts={relais.kontakt || '-'} />
                            </div>
                        </div>
                    ))}
                </div>
            </Suspense>
        </>
    )
}
