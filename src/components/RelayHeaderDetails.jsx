

export default function RelayHeaderDetails({ relayData }) {

    return (
        <div className="bg-red-300 basis-4/12 font-primary">
            {[relayData].map(relais => {
                return (
                    <div className="text-zinc-600" key={relais.id}>

                        <div className="bg-zinc-300 pl-2">
                            <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">{relais.id}</h1>
                            <p className="mb-10 text-lg ">{relais.name || '-'}</p>
                            <p className="text-lg">Typ: {relais.relais.typ || '-'}</p>
                        </div>



                        {relais.relaisGruppe.map(gruppe => {
                            return (
                                <div className="bg-yellow-200 border-solid rounded p-2 pt-5 pb-5 flex flex-col border border-zinc-500">
                                    <h1 className="text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl dark:text-white font-primary mb-2">Gruppe</h1>
                                    <h2 className="text-1xl font-extrabold leading-none tracking-tight md:text-1xl lg:text-1xl dark:text-white font-primary mb-5">{gruppe.name}</h2>
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