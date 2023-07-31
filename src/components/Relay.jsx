import { Suspense, useEffect, useState } from "react";
import NavbarCustom from "./NavbarCustom";
import RelayHeaderDetails from "./RelayHeaderDetails";
import RelayTables from "./RelayTables";

export default function Relay({ id }) {

    const [result, setResult] = useState([]);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const res = await fetch(`/api/relay?id=${id}`)
                const data = await res.json();
                console.log(data[0].kontakt);
                setResult(data);
            }
            fetchData();
        }
        else {
            setResult([]);
        }
    }, [id]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {result?.map(relais => (
                <div className="flex flex-col md:flex-col pt-10 pb-10" key={relais.id} >
                    <NavbarCustom id={relais.id} />
                    <div className="flex flex-col md:flex-row pt-10 pb-10 space-x-10" key={relais.id} >
                        <RelayHeaderDetails relayData={relais} />
                        <RelayTables relayData={relais} />
                    </div>
                </div>
            ))}
        </Suspense>
    )
}