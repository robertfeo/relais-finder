import DataNotAvailable from "@/components/DataNotAvailable";
import { Button } from "@/components/ui/button";

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
        <div className="basis-4/12 font-primary antialiased">
            {[relayData].map(relais => {
                return (
                    <div className="text-zinc-600 space-y-5 px-2" key={relais.id}>

                        <div className="bg-zinc-50 py-5 flex flex-col mb-5 rounded-xl pl-3 relative shadow-sm">
                            <Button className="bg-zinc-500 absolute top-3 right-3 w-7 h-7 text-center flex justify-center items-center p-1" variant='default'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </Button>
                            <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-white">{relais.id}</h1>
                            <p className="text-base font-semibold">{relais.name || '-'}</p>
                        </div>



                        <div className="bg-zinc-50 py-5 flex flex-col mb-5 rounded-xl pl-3 shadow-sm">
                            <div class="flex flex-col py-2 space-y-8  dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex flex-row space-x-5">
                                    <div className="flex flex-col basis-1/2">
                                        <h1 className="text-lg font-semibold leading-none tracking-tight md:text-lg lg:text-lg dark:text-white font-primary mb-1">Anzugsprüfung</h1>
                                        <div className="flex flex-row justify-left flex-wrap">
                                            {!relayData.kontakt || relayData.kontakt.length === 0 ? (
                                                <DataNotAvailable />
                                            ) : (
                                                relayData.kontakt
                                                    .filter(kontakt => kontakt.kontakt_id.startsWith('A'))
                                                    .map(kontakt => {
                                                        return (
                                                            <div className="py-0.5">
                                                                <span className={getRandomColorClass() + " text-xs font-semibold mr-1 px-2.5 py-0.5 rounded-full"}>{kontakt.kontakt_id}</span>
                                                            </div>
                                                        )
                                                    })
                                            )}
                                        </div>
                                    </div>


                                    <div className="flex flex-col basis-1/2">
                                        <h1 className="text-lg font-semibold leading-none tracking-tight md:text-lg lg:text-lg dark:text-white font-primary mb-1">Abfallprüfung</h1>
                                        <div className="flex flex-row justify-start flex-wrap">
                                            {!relayData.kontakt || relayData.kontakt.length === 0 ? (
                                                <DataNotAvailable />
                                            ) : (
                                                relayData.kontakt
                                                    .filter(kontakt => kontakt.kontakt_id.startsWith('R'))
                                                    .map(kontakt => {
                                                        return (
                                                            <div className="py-0.5">
                                                                <span className={getRandomColorClass() + " text-xs font-semibold mr-1 px-2.5 py-0.5 rounded-full"}>{kontakt.kontakt_id}</span>
                                                            </div>
                                                        )
                                                    })
                                            )}
                                        </div>
                                    </div>



                                </div>


                                <div className="flex flex-row space-x-5">
                                    <div className="flex flex-col basis-1/2">
                                        <h1 className="text-lg font-semibold leading-none tracking-tight md:text-lg lg:text-lg dark:text-white font-primary mb-1">Typ</h1>
                                        {relais.relais == null || relais.relais == undefined ? (
                                            <DataNotAvailable />
                                        ) : (
                                            <p className="text-base">{relais.relais.typ || '-'}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col basis-1/2">
                                        <h1 className="text-lg font-semibold leading-none tracking-tight md:text-lg lg:text-lg dark:text-white font-primary mb-1">Grundstellung</h1>
                                        {relais.relais == null || relais.relais == undefined ? (
                                            <DataNotAvailable />
                                        ) : (
                                            <p className="text-base">{relais.relais.grundstellung || '-'}</p>
                                        )}
                                    </div>
                                </div>



                                <div className="flex flex-row">
                                    <div className="flex flex-col">
                                        <h1 className="text-lg font-semibold leading-none tracking-tight md:text-lg lg:text-lg dark:text-white font-primary mb-1">Fällt nicht</h1>
                                        {relais.relais == null || relais.relais == undefined ? (
                                            <DataNotAvailable />
                                        ) : (
                                            <p className="text-base">{relais.relais.faelltNicht || '-'}</p>
                                        )}
                                    </div>
                                </div>





                                <div className="flex flex-row">
                                    <div className="flex flex-col">
                                        <h1 className="text-lg font-semibold leading-none tracking-tight md:text-lg lg:text-lg dark:text-white font-primary mb-1">Fällt zur Unzeit</h1>
                                        {relais.relais == null || relais.relais == undefined === 0 ? (
                                            <DataNotAvailable />
                                        ) : (
                                            <p className="text-base">{relais.relais.faelltZurUnzeit || '-'}</p>
                                        )}
                                    </div>
                                </div>


                                <div className="flex flex-row">
                                    <div className="flex flex-col">
                                        <h1 className="text-lg font-semibold leading-none tracking-tight md:text-lg lg:text-lg dark:text-white font-primary mb-1">Zieht nicht</h1>
                                        {relais.relais == null || relais.relais == undefined === 0 ? (
                                            <DataNotAvailable />
                                        ) : (
                                            <p className="text-base">{relais.relais.ziehtNicht || '-'}</p>
                                        )}
                                    </div>
                                </div>









                                <div className="flex flex-col">
                                    <h1 className="text-lg font-extrabold leading-none tracking-tight md:text-lg lg:text-lg dark:text-white font-primary mb-1">Gruppen</h1>
                                    {relais.relaisGruppe && relais.relaisGruppe.length === 0 ? (
                                        <DataNotAvailable />
                                    ) : (
                                        relais.relaisGruppe.map(gruppe => {
                                            return (
                                                <div className="flex flex-col">
                                                    <h2 className="text-base font-bold leading-none tracking-tight md:text-base lg:text-base dark:text-white font-primary mb-2">{gruppe.name}</h2>
                                                    <p className="text-base">Sachnummer: {gruppe.sachnummer}</p>
                                                    <p className="text-base">Sicherheitsnachweis: {gruppe.siNaName}</p>
                                                </div>
                                            )
                                        })
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}