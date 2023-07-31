import { db } from "@/lib/db";
import { cache } from "react";



export async function GET(req: Request) {

    const getRelay = cache(async (id: any, where: any) => {
        "use server"
        const relay = await db.kurzRelBezeichnung.findMany({
            where: where ? where : { id: { in: [id], }, },
            include: {
                relais: true,
                relaisGruppe: true,
                spule: true,
                kontakt: true,
            },
        })
        return relay;
    })

    const url = new URL(req.url)

    const query = url.searchParams.get('q')
    const searchCriteria = url.searchParams.get('searchBy')

    if (!query) return new Response('Invalid query', { status: 400 })

    if (query.length === 0) {
        return new Response(JSON.stringify([]), { status: 200 })
    }

    let where = {}

    switch (searchCriteria) {
        case 'typ':
            where = {
                relais: {
                    typ: { startsWith: query }
                }
            }
            break;
        case 'rel-bezeichnung':
            where = {
                id: {
                    contains: query
                }
            }
            break;
        case 'grundstellung':
            where = {
                relais: {
                    grundstellung: { contains: query }
                }
            }
            break;
        case 'windungen':
            where = {
                spule: {
                    some: {
                        windungen: { startsWith: query }
                    }
                }
            }
            break;
        case 'widerstand':
            where = {
                spule: {
                    some: {
                        widerstand: { startsWith: query }
                    }
                }
            }
            break;
        case 'kontakt':
            where = {
                kontakt: {
                    some: {
                        kontakt_id: { contains: query }
                    }
                }
            }
            break;
        case 'sachnummer':
            where = {
                relaisGruppe: {
                    some: {
                        sachnummer: { contains: query }
                    }
                }
            }
            break;
        case 'sina':
            where = {
                relaisGruppe: {
                    some: {
                        siNaName: {
                            contains: query
                        }
                    }
                }
            }
            break;
        default:
            return new Response(JSON.stringify([]), { status: 404 })
    }

    const relayData = await getRelay(undefined, where)
        .catch(() => {
            return new Response('Could not fetch relay', { status: 500 });
        });

    return new Response(JSON.stringify(relayData), { status: 200 });
}