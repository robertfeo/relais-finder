"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/search')
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen antialiased">

        <div className="fixed top-4 inset-x-0 text-center p-24">
          <div className="relative">
            <div className="absolute inset-0">
              <h1 className="text-5xl font-semibold text-gray-800 blur-xl hover:blur-3xl opacity-40 font-primary">RelaisFinder</h1>
            </div>
            <div className="relative">
              <h1 className="text-5xl font-semibold text-gray-800 font-primary">RelaisFinder</h1>
            </div>
            <div className="w-full max-w-md mt-8">
            </div>
          </div>

          <Button onClick={handleClick} variant="outline">
            Suchen
          </Button>
        </div>
      </div>
    </>
  )
}
