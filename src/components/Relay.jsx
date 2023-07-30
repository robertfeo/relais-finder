import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import RelayHeaderDetails from "./RelayHeaderDetails";
import RelayTables from "./RelayTables";
import { toast } from "./ui/use-toast";

export default function Relay({ id }) {

    const [result, setResult] = useState([]);

    useEffect(() => {
        searchRelay(id);
    }, [id]);

    async function searchRelay(id) {
        await axios.get(`/api/relay?id=${id}`).then((response) => {
            setResult(response.data);
            console.log(result);
        }).catch(() => {
            toast({
                title: "Relais nicht gefunden",
                description: "Bitte versuche es erneut.",
                variant: "warning",
            })
        });
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {result.map(relais => (
                <div className="flex flex-row pt-10 pb-10 bg-slate-200" key={relais.id} >
                    <RelayHeaderDetails relayData={relais} />
                    <RelayTables relayData={relais} />
                </div>
            ))}
        </Suspense>
    )
}