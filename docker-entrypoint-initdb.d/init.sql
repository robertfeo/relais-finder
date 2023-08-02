CREATE ROLE root LOGIN PASSWORD 'root';
CREATE DATABASE root;

/* CREATE DATABASE "relais-finder"; */
GRANT ALL PRIVILEGES ON DATABASE "relais-finder" TO admin;

CREATE OR REPLACE FUNCTION "relais-finder".public.f_kontakt()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    VOLATILE
    COST 100
AS $BODY$
BEGIN
  --- Remove the BOM from each column for each row
  NEW."kontakt_id" = REPLACE(NEW."kontakt_id", '﻿', '');
  NEW."kurzRelBezeichnungId" = REPLACE(NEW."kurzRelBezeichnungId", '﻿', '');
  NEW."zweck" = REPLACE(NEW."zweck", '﻿', '');
  NEW."kontaktSchliestNicht" = REPLACE(NEW."kontaktSchliestNicht", '﻿', '');
  NEW."ortASB" = REPLACE(NEW."ortASB", '﻿', '');
  NEW."kontaktOeffnetNicht" = REPLACE(NEW."kontaktOeffnetNicht", '﻿', '');
  
  IF EXISTS (
    SELECT 1 FROM public."Kontakt" 
    WHERE 
        "kontakt_id" = NEW."kontakt_id" AND
  		"kurzRelBezeichnungId" = NEW."kurzRelBezeichnungId")
  THEN
    RETURN NULL; -- cancels the INSERT operation
  ELSE
    RETURN NEW;  -- allows the INSERT operation
  END IF;
END;
$BODY$;


CREATE OR REPLACE FUNCTION public."f_kurzRelBez"()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    VOLATILE
    COST 100
AS $BODY$
BEGIN
  --- Remove the BOM from each column for each row
  NEW."id" = REPLACE(NEW."id", '﻿', '');
  NEW."name" = REPLACE(NEW."name", '﻿', '');
  
  IF EXISTS (
    SELECT 1 FROM public."KurzRelBezeichnung" 
    WHERE 
        "id" = NEW."id") 
  THEN
    RETURN NULL; -- cancels the INSERT operation
  ELSE
    RETURN NEW;  -- allows the INSERT operation
  END IF;
END;
$BODY$;


CREATE OR REPLACE FUNCTION public.f_relais()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    VOLATILE
    COST 100
AS $BODY$
BEGIN
  --- Remove the BOM from each column for each row
  NEW."typ" = REPLACE(NEW."typ", '﻿', '');
  NEW."kurzRelBezeichnungId" = REPLACE(NEW."kurzRelBezeichnungId", '﻿', '');
  NEW."ziehtNicht" = REPLACE(NEW."ziehtNicht", '﻿', '');
  NEW."faelltNicht" = REPLACE(NEW."faelltNicht", '﻿', '');
  NEW."faelltZurUnzeit" = REPLACE(NEW."faelltZurUnzeit", '﻿', '');
  NEW."ziehtZurUnZeit" = REPLACE(NEW."ziehtZurUnZeit", '﻿', '');
  NEW."grundstellung" = REPLACE(NEW."grundstellung", '﻿', '');

  IF EXISTS (
    SELECT 1 FROM public."Relais" 
    WHERE 
        "kurzRelBezeichnungId" = NEW."kurzRelBezeichnungId") 
  THEN
    RETURN NULL; -- cancels the INSERT operation
  ELSE
    RETURN NEW;  -- allows the INSERT operation
  END IF;
END;
$BODY$;


CREATE OR REPLACE FUNCTION public."f_relaisGruppe"()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    VOLATILE
    COST 100
AS $BODY$
BEGIN
  --- Remove the BOM from each column for each row
  NEW."kurzRelBezeichnungId" = REPLACE(NEW."kurzRelBezeichnungId", '﻿', '');
  NEW."sachnummer" = REPLACE(NEW."sachnummer", '﻿', '');
  NEW."name" = REPLACE(NEW."name", '﻿', '');
  NEW."siNaName" = REPLACE(NEW."siNaName", '﻿', '');

  IF EXISTS (
    SELECT 1 FROM public."RelaisGruppe" 
    WHERE 
        "kurzRelBezeichnungId" = NEW."kurzRelBezeichnungId" AND 
        "sachnummer" = NEW."sachnummer") 
  THEN
    RETURN NULL; -- cancels the INSERT operation
  ELSE
    RETURN NEW;  -- allows the INSERT operation
  END IF;
END;
$BODY$;


CREATE OR REPLACE FUNCTION public.f_spule()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    VOLATILE
    COST 100
AS $BODY$
BEGIN
  --- Remove the BOM from each column for each row
  NEW."kurzRelBezeichnungId" = REPLACE(NEW."kurzRelBezeichnungId", '﻿', '');
  NEW."spule_id" = REPLACE(NEW."spule_id", '﻿', '');
  NEW."widerstand" = REPLACE(NEW."widerstand", '﻿', '');
  NEW."windungen" = REPLACE(NEW."windungen", '﻿', '');
  NEW."bemerkung" = REPLACE(NEW."bemerkung", '﻿', '');
  NEW."ortASB" = REPLACE(NEW."ortASB", '﻿', '');
  NEW."kurzRelBezeichnungId" = REPLACE(NEW."kurzRelBezeichnungId", '﻿', '');

  IF EXISTS (
    SELECT 1 FROM public."Spule" 
    WHERE 
        "kurzRelBezeichnungId" = NEW."kurzRelBezeichnungId" AND 
        "spule_id" = NEW."spule_id") 
  THEN
    RETURN NULL; -- cancels the INSERT operation
  ELSE
    RETURN NEW;  -- allows the INSERT operation
  END IF;
END;
$BODY$;

	
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

