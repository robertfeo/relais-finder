'use client'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/Card'
import { Label } from "@/components/ui/label"
import Link from 'next/link'

export default function RelayCard({ name, id, type }) {

    return (
        <Card>
            <CardHeader className="flex flex-col md:flex-row sm:flex-col lg:flex-row items-center justify-between space-x-5">
                <div className='flex flex-col items-start space-y-2 bg-yellow-300'>
                    <CardTitle className="whitespace-nowrap">{name}</CardTitle>
                    <CardDescription>
                        <Label htmlFor="email">Typ: {type}</Label>
                    </CardDescription>
                </div>

                <div className=''>
                    <Button asChild variant="outline">
                        <Link href={`/relay/${id}`}>Details</Link>
                    </Button>
                </div>

            </CardHeader>
        </Card>
    )

}