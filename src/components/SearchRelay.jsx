import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import RelayCard from "./RelayCard";


export default function SearchRelay({ q, searchBy }) {

    const { toast } = useToast()

    const [results, setResults] = useState([]);

    useEffect(() => {
        searchRelay(q, searchBy);
    }, [q, searchBy]);

    async function searchRelay(q, searchBy) {
        if (q === '') {
            setResults([]);
            return;
        }
        try {
            const res = await axios.get(`/api/relay/search?q=${q}&searchBy=${searchBy}`).then((response) => {
                setResults(response.data)
                console.log(response.data)
            }).catch((error) => {
                toast({
                    title: "Suchkriterium nicht gefunden",
                    description: error.message,
                    variant: "warning",
                })
            })
        } catch (error) {
            toast({
                title: "Etwas ist schief gelaufen...",
                variant: "destructive",
            })
        }
    }

    return (
        <div className="flex flex-col bg-orange-300 w-4/6 space-y-5">
            {results.map(result => (
                <RelayCard
                    name={result.name}
                    id={result.id}
                    typ={result.relais.typ}
                    key={result.id}
                />
            ))}
        </div>
    );
}