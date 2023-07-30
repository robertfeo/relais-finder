

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
                                <div className="bg-yellow-200 p-2 pt-5 pb-5 flex flex-col">
                                    <h1 className="text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl dark:text-white font-primary mb-2">Gruppe</h1>
                                    <h2 className="text-1xl font-extrabold leading-none tracking-tight md:text-1xl lg:text-1xl dark:text-white font-primary mb-5">{gruppe.name}</h2>
                                    <p>Sachnummer: {gruppe.sachnummer}</p>
                                    <p>Sicherheitsnachweis: {gruppe.siNaName}</p>
                                </div>
                            )
                        })}

                        <div className="flex flex-col">
                            <h1 className="text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-2xl dark:text-white font-primary mb-2">Anzugsprüfung</h1>
                            <div className="flex flex-row items-center">
                                <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Default</span>
                                <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Dark</span>
                                <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Red</span>
                                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Green</span>
                                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Indigo</span>
                                <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Purple</span>
                                <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">Pink</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}