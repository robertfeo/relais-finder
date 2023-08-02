const { spawn } = require('child_process');
const { Client } = require('pg');

const prisma = spawn('npx', ['prisma', 'db', 'push', '--schema', '/app/prisma/schema.prisma']);

prisma.stdout.on('data', (data) => {
    console.log(`Info: ${data}`);
});

prisma.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
});

prisma.on('close', (code) => {
    console.log(`child process exited with code ${code}`);

    if (code === 0) {
        const client = new Client({
            connectionString: "postgresql://admin:0000@db:5432/relais-finder?schema=public"
        });

        client.connect();

        const query = `
            CREATE TRIGGER trg_kontakt
                BEFORE INSERT OR UPDATE OF kontakt_id, zweck, "kontaktSchliestNicht", "kurzRelBezeichnungId", "ortASB", "kontaktOeffnetNicht"
                ON public."Kontakt"
                FOR EACH ROW
                EXECUTE FUNCTION public.f_kontakt();
            
            CREATE TRIGGER trg_kurzRelBez
                BEFORE INSERT OR UPDATE OF name
                ON public."KurzRelBezeichnung"
                FOR EACH ROW
                EXECUTE FUNCTION public."f_kurzRelBez"();
            
            CREATE TRIGGER trg_relais
                BEFORE INSERT OR UPDATE OF typ, "kurzRelBezeichnungId", "ziehtNicht", "faelltNicht", "faelltZurUnzeit", "ziehtZurUnZeit", grundstellung
                ON public."Relais"
                FOR EACH ROW
                EXECUTE FUNCTION public.f_relais();

            CREATE TRIGGER trg_relaisGruppe
                BEFORE INSERT OR UPDATE OF name, sachnummer, "kurzRelBezeichnungId", "siNaName"
                ON public."RelaisGruppe"
                FOR EACH ROW
                EXECUTE FUNCTION public."f_relaisGruppe"();

            CREATE TRIGGER trg_spule
                BEFORE INSERT OR UPDATE OF spule_id, zweck, widerstand, windungen, bemerkung, "ortASB", "kurzRelBezeichnungId"
                ON public."Spule"
                FOR EACH ROW
                EXECUTE FUNCTION public.f_spule();
        `;

        client.query(query, (err, res) => {
            if (err) {
                console.error(`Trigger Error: ${err}`);
            } else {
                console.log(`Trigger Success: ${res}`);
            }
            client.end();

            const server = spawn('npx', ['next', 'start'], { stdio: 'inherit' });

            server.on('close', (code) => {
                console.log(`Server exited with code ${code}`);
            });
        });
    }
});
