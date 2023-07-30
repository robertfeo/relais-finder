import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import RelayHeaderDetails from "./RelayHeaderDetails";
import TablesContacts from "./TablesContacts";
import TablesSpools from "./TablesSpools";

export default function RelayDetails({ id }) {

    const [result, setResult] = useState([]);

    useEffect(() => {
        searchRelay(id);
    }, [id]);

    async function searchRelay(id) {
        await axios.get(`/api/relay?id=${id}`).then((response) => {
            setResult(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="p-8">

                {result.map(relais => (
                    <div key={relais.id}>
                        <h1 className="text-xl font-medium mb-2 py-10">{relais.name || '-'}</h1>
                        <div className="grid grid-cols-2 gap-8 mb-4">


                            <div className="container">
                                <h3 className="font-semibold">Details</h3>
                                <p>Typ: {relais.relais.typ || '-'}</p>
                                <RelayHeaderDetails relayGroups={relais.relaisGruppe} />
                            </div>

                        </div>

                        <div className="flex flex-col mr-auto ml-auto mb-4 py-10 space-y-10 w-9/12">
                            <TablesSpools spools={relais.spule || '-'} />
                            <TablesContacts className="" contacts={relais.kontakt || '-'} />

                        </div>

                    </div>
                ))}
            </div>
        </Suspense>
    )
}