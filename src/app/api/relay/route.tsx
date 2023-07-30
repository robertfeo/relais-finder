
import { db } from "@/lib/db";

export async function GET(request: Request, response: Response) {

  const url = new URL(request.url)
  const id = url.searchParams.get('id') || '';

  const relaisData = await db.kurzRelBezeichnung.findMany({
    where: {
      id: {
        in: [id],
      },
    },
    include: {
      relaisGruppe: true,
      relais: true,
      spule: true,
      kontakt: true,
    },
  }).catch(() => {
    return new Response('Could not fetch relay', { status: 500 });
  });

  return new Response(JSON.stringify(relaisData), { status: 200 });
}