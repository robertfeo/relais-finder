import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import RelayCard from "./RelayCard";

export default function SearchRelay({ q, searchBy }) {

    const { toast } = useToast()

    const [results, setResults] = useState([]);

    useEffect(() => {
        if (q) {
            const fetchData = async () => {
                const res = await fetch(`/api/relay/search?q=${q}&searchBy=${searchBy}`, { next: { revalidate: 1 } })
                const data = await res.json();
                setResults(data);
            }
            fetchData();
        }
        else {
            setResults([]);
        }
    }, [q, searchBy]);

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