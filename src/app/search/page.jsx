"use client"
import SearchRelay from "@/components/SearchRelay";
import SelectSearchCriteria from "@/components/SelectSearchCriteria";

import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Page() {

  const router = useRouter()

  const [query, setQuery] = useState()
  const [searchBy, setSearchBy] = useState()

  const handleSearchCriteria = (criteria) => {
    setSearchBy(criteria)
  }

  return (
    <>
      <div className="container mx-auto md:container md:mx-auto bg-slate-400 flex flex-col">
        <div className="flex flex-col items-center flex-wrap mt-10 mb-5 bg-yellow-200">
          <div className="relative">
            <div className="absolute">
              <h1 className="text-5xl font-semibold text-gray-800 blur-xl hover:blur-3xl opacity-40 font-primary">RelaisFinder</h1>
            </div>
            <div className="relative">
              <h1 className="text-5xl font-semibold text-gray-800 font-primary">RelaisFinder</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center flex-wrap space-y-5 mt-5 mb-5 bg-slate-800">
          <div>
            <SelectSearchCriteria
              onSearchCriteriaChange={handleSearchCriteria}
            />
          </div>

          <div>
            <Input
              type="text"
              placeholder="Eingabe..."
              className="w-[300px] border-gray-200 rounded p-2 font-primary"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>

        </div>

        <main className="bg-blue-400 mb-10 mt-5">
          <div className="flex flex-col items-center">
            <SearchRelay q={query} searchBy={searchBy} />
          </div>
        </main>

        
      </div>
    </>
  );

}
