import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import RelayCard from "./RelayCard";


export default function SearchRelay({ q, searchBy }) {

    const { toast } = useToast()

    const [results, setResults] = useState([]);

    useEffect(() => {
        if (q) {
            const fetchData = async () => {
                const res = await fetch(`/api/relay/search?q=${q}&searchBy=${searchBy}`)
                const data = await res.json();
                setResults(data);
            }
            fetchData();
        }
        else {
            setResults([]);
        }
    }, [q, searchBy]);

    /* useEffect(() => {
        if (q) {
            searchRelay(q, searchBy);
        }
        else {
            setResults([]);
        }
    }, [q, searchBy]); */


    /* async function searchRelay(q, searchBy) {
        try {
            const res = await axios.get(`/api/relay/search?q=${q}&searchBy=${searchBy}`).then((response) => {
                setResults(response.data)
            }).catch((error) => {
                toast({
                    title: "Suchkriterium nicht gefunden",
                    description: "Bitte versuche es erneut.",
                    variant: "default",
                })
            })
        } catch (error) {
            toast({
                title: "Etwas ist schief gelaufen...",
                variant: "destructive",
            })
        }
    } */

    return (
        <div className="flex flex-col w-4/6 space-y-5">
            {results.map(result => (
                <RelayCard
                    name={result.name}
                    id={result.id}
                    type={result.relais?.typ ?? 'N/A'}
                    key={result.id}
                />
            ))}
        </div>
    );
}