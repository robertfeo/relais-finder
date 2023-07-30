

export default function RelayHeaderDetails({ relayGroups }) {

    return (
        <div>
            {relayGroups.map(relayGroup => {
                const { name, sachnummer, siNaName } = relayGroup

                return (
                    <div key={relayGroup.id}>
                        <p>Name: {name}</p>
                        <p>Sachnummer: {sachnummer}</p>
                        <p>Sicherheitsnachweis: {siNaName}</p>
                    </div>
                )
            })}
        </div>
    )
}