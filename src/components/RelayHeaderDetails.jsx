

export default function RelayHeaderDetails({ relayGroups }) {

    return (
        <div className="container">
            <h3 className="flex-1 font-semibold">Gruppen</h3>
            {relayGroups.map(relayGroup => {
                const { name, sachnummer, siNaName } = relayGroup

                return (
                    <div className="flex-1" key={relayGroup.id}>
                        <p>Sachnummer: {sachnummer}</p>
                        <p>Name: {name}</p>
                        <p>Sicherheitsnachweis: {siNaName}</p>
                    </div>
                )
            })}

        </div>
    )
}