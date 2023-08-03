import { db } from "@/lib/db";
import { cache } from "react";

export async function GET(request: Request, response: Response) {

  const getRelay = cache(async (id: any) => {
    "use server"
    const relay = await db.kurzRelBezeichnung.findMany({
      where: { id: { in: [id], }, },
      include: {
        relais: true,
        relaisGruppe: true,
        spule: true,
        kontakt: true,
      },
    })
    return relay;
  })

  const url = new URL(request.url)
  const id = url.searchParams.get('id') || '';

  const relayData = await getRelay(id)
    .catch(() => {
      return new Response('Could not fetch relay', {
        status: 500,
        headers: { 'content-type': 'text/html; charset=utf-8' }
      });
    });

  return new Response(JSON.stringify(relayData), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  });
}
