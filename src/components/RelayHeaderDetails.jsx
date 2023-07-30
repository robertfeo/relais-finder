

export default function RelayHeaderDetails({ relayData }) {

    return (
        <div className="bg-red-300 basis-4/12">
            {[relayData].map(relais => {
                return (
                    <div key={relais.id}>
                        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-zinc-600 md:text-5xl lg:text-6xl dark:text-white">{relais.id}</h1>
                        <p className="my-4 text-lg text-zinc-600">{relais.name || '-'}</p>
                        <p>Typ: {relais.relais.typ || '-'}</p>
                        {relais.relaisGruppe.map(gruppe => {
                            return (
                                <div className="bg-yellow-200">
                                    <p>Name: {gruppe.name}</p>
                                    <p>Sachnummer: {gruppe.sachnummer}</p>
                                    <p>Sicherheitsnachweis: {gruppe.siNaName}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}