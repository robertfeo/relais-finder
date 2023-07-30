import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import RelayHeaderDetails from "./RelayHeaderDetails";
import RelayTables from "./RelayTables";
import { toast } from "./ui/use-toast";

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
            toast({
                title: "Relais nicht gefunden",
                description: "Bitte versuche es erneut.",
                variant: "warning",
            })
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

                        <RelayTables relay={relais} />

                    </div>
                ))}
            </div>
        </Suspense>
    )
}