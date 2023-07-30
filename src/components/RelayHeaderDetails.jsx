
export default function RelayHeaderDetails({ relayData }) {

    const colorClasses = [
        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
        'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
    ];

    const getRandomColorClass = () => {
        return colorClasses[Math.floor(Math.random() * colorClasses.length)];
    };

    return (
        <div className="basis-4/12 font-primary">
            {[relayData].map(relais => {
                return (
                    <div className="text-zinc-600 space-y-5 px-2" key={relais.id}>

                        <div className="pl-2">
                            <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-white">{relais.id}</h1>
                            <p className="mb-10 text-base font-semibold">{relais.name || '-'}</p>
                            <p className="text-base">Typ: {relais.relais.typ || '-'}</p>
                        </div>


                        <div class="flex flex-col p-2 space-y-10 dark:bg-gray-800 dark:border-gray-700">

                            <div className="flex flex-col">
                                <h2 className="text-xl  font-semibold leading-none tracking-tight md:text-xl lg:text-xl dark:text-white font-primary mb-2">Anzugsprüfung</h2>
                                <div className="flex flex-row justify-start">
                                    {relayData.kontakt
                                        .filter(kontakt => kontakt.kontakt_id.startsWith('A')) // Filters the array
                                        .map(kontakt => {
                                            return (
                                                <div>
                                                    <span className={getRandomColorClass() + " text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"}>{kontakt.kontakt_id}</span>
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>


                            <div className="flex flex-col">
                                <h1 className="text-xl font-semibold leading-none tracking-tight md:text-xl lg:text-xl dark:text-white font-primary mb-2">Abfallprüfung</h1>
                                <div className="flex flex-row justify-start">
                                    {relayData.kontakt
                                        .filter(kontakt => kontakt.kontakt_id.startsWith('R')) // Filters the array
                                        .map(kontakt => {
                                            return (
                                                <div>
                                                    <span className={getRandomColorClass() + " text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"}>{kontakt.kontakt_id}</span>
                                                </div>

                                            )
                                        })}
                                </div>
                            </div>


                            <div className="flex flex-col">
                                <h1 className="text-xl font-extrabold leading-none tracking-tight md:text-xl lg:text-xl dark:text-white font-primary mb-2">Gruppen:</h1>
                                {relais.relaisGruppe.map(gruppe => {
                                    return (
                                        <div className="flex flex-col">
                                            <h2 className="text-base font-extrabold leading-none tracking-tight md:text-base lg:text-base dark:text-white font-primary mb-3">{gruppe.name}</h2>
                                            <p>Sachnummer: {gruppe.sachnummer}</p>
                                            <p>Sicherheitsnachweis: {gruppe.siNaName}</p>
                                        </div>
                                    )
                                })}
                            </div>


                        </div>
                    </div>
                )
            })}
        </div>
    )
}