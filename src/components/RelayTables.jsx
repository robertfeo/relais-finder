import { Suspense, useEffect } from "react";
import TablesContacts from './TablesContacts';
import TablesSpools from './TablesSpools';

export default function RelayTables({ relay }) {

    useEffect(() => {
        console.log(relay);
    }, [relay]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {Array.isArray(relay) && relay.map(relais => (
                <div className="flex flex-col bg-orange-300">
                    <TablesSpools spools={relais.spule || '-'} />
                    <TablesContacts contacts={relais.kontakt || '-'} />
                </div>
            ))}
        </Suspense>
    )
}
