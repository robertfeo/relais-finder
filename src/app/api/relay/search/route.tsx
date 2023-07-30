import { db } from '@/lib/db';

export async function GET(req: Request) {

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
                    typ: { contains: query }
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
                    kontakt_id: { contains: query }
                }
            }
            break;
        case 'sachnummer':
            //  TODO: This is not working
            where = {
                relaisGruppe: {
                    sachnummer: { contains: query }
                }
            }
            break;
        case 'sina':
            //  TODO: This is not working
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

    try {
        const results = await db.kurzRelBezeichnung.findMany({
            where,
            include: {
                relaisGruppe: true,
                relais: true,
                spule: true,
                kontakt: true,
            }
        })

        return new Response(JSON.stringify(results), { status: 200 })
    } catch (error) {
        return new Response('Could not fetch relais', { status: 500 })
    }
}