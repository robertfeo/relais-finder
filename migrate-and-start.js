const { spawn } = require('child_process');
const { Client } = require('pg');

const prisma = spawn('npx', ['prisma', 'db', 'push', '--schema', '/app/prisma/schema.prisma', '--accept-data-loss']);

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
        DO $$
        BEGIN
            IF EXISTS (
                SELECT 1
                FROM information_schema.triggers
                WHERE event_object_table = 'Kontakt'
                AND trigger_name = 'trg_kontakt'
            ) THEN
                DROP TRIGGER trg_kontakt ON public."Kontakt";
                CREATE TRIGGER trg_kontakt
                BEFORE INSERT
                ON public."Kontakt"
                FOR EACH ROW
                EXECUTE FUNCTION public.f_kontakt();
            END IF;

            IF EXISTS (
                SELECT 1
                FROM information_schema.triggers
                WHERE event_object_table = 'KurzRelBezeichnung'
                AND trigger_name = 'trg_kurzRelBez'
            ) THEN
                DROP TRIGGER trg_kurzrelbez ON public."KurzRelBezeichnung";
                CREATE TRIGGER trg_kurzRelBez
                BEFORE INSERT
                ON public."KurzRelBezeichnung"
                FOR EACH ROW
                EXECUTE FUNCTION public."f_kurzRelBez"();
            END IF;

            IF EXISTS (
                SELECT 1
                FROM information_schema.triggers
                WHERE event_object_table = 'Relais'
                AND trigger_name = 'trg_relais'
            ) THEN
                DROP TRIGGER trg_relais ON public."Relais";
                CREATE TRIGGER trg_relais
                BEFORE INSERT
                ON public."Relais"
                FOR EACH ROW
                EXECUTE FUNCTION public.f_relais();
            END IF;

            IF EXISTS (
                SELECT 1
                FROM information_schema.triggers
                WHERE event_object_table = 'RelaisGruppe'
                AND trigger_name = 'trg_ortASB'
            ) THEN
                DROP TRIGGER trg_relaisGruppe ON public."RelaisGruppe";
                CREATE TRIGGER trg_relaisGruppe
                BEFORE INSERT
                ON public."RelaisGruppe"
                FOR EACH ROW
                EXECUTE FUNCTION public."f_relaisGruppe"();
            END IF;

            IF EXISTS (
                SELECT 1
                FROM information_schema.triggers
                WHERE event_object_table = 'Spule'
                AND trigger_name = 'trg_spule'
            ) THEN
                DROP TRIGGER trg_spule ON public."Spule";
                CREATE TRIGGER trg_spule
                BEFORE INSERT
                ON public."Spule"
                FOR EACH ROW
                EXECUTE FUNCTION public.f_spule();
            END IF;
        END
        $$;
        `;

        client.query(query, (err, res) => {
            if (err) {
                console.error(`Trigger Error: ${err}`);
            }
            client.end();

            const server = spawn('npx', ['next', 'start'], { stdio: 'inherit' });

            server.on('close', (code) => {
                console.log(`Server exited with code ${code}`);
            });
        });
    }
});
