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
            {result.map(relais => (
                <div className="flex flex-col pt-10 pb-10 bg-slate-200" key={relais.id} >
                    <h1 class="text-4xl font-extrabold leading-none tracking-tight text-zinc-600 md:text-5xl lg:text-6xl dark:text-white">{relais.id}</h1>
                    <p class="my-4 text-lg text-zinc-600">{relais.name || '-'}</p>
                    <p>Typ: {relais.relais.typ || '-'}</p>
                    <RelayHeaderDetails relayGroups={relais.relaisGruppe || '-'} />
                    <RelayTables relay={relais} />
                </div>
            ))}
        </Suspense>
    )
}