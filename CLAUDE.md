# CLAUDE.md

Portfolio personale di Andrea Turetta, in italiano su `/` e in inglese su `/en/`. Astro 5, Tailwind CSS v4 e GitHub Pages. È pensato per il **Selezionatore**; i termini del dominio sono in `GLOSSARY.md` e le decisioni in `docs/adr/`.

## Contenuti

- Tutti i testi stanno in `src/data/it.ts` e `src/data/en.ts`, che hanno la stessa forma (`src/data/types.ts`). Ogni modifica di contenuto va fatta in entrambe le lingue. I testi inglesi sono traduzioni da far rivedere ad Andrea.
- Una voce con `draft: "<motivo>"` è una **bozza**: si vede con `npm run dev` ed è esclusa dalla build di produzione (`published()` in `src/data/index.ts`). Un contenuto incompleto resta bozza finché non è pronto. Online va solo testo definitivo.
- La **riservatezza** vale per ogni Esperienza e ogni Progetto (`docs/adr/0001-riservatezza-contenuti.md`): descrizioni generiche, mai nomi di server, domini, IP, numeri di macchine o versioni. Un Progetto fatto per un'azienda o un cliente resta bozza finché non c'è il loro permesso.
- Le sezioni hanno una chiave comune (`SectionKey`) e un `id` per lingua. Il selettore IT/EN usa la chiave per portare alla stessa sezione nell'altra lingua, quindi una sezione nuova va aggiunta con la chiave in `types.ts` e l'`id` in tutte e due le lingue.
- Il CV italiano è `public/cv.pdf`. Il sito inglese scarica lo stesso PDF con l'etichetta «Download CV (Italian)» finché `en.ts` non punta a un CV inglese.

## Privacy

L'informativa (`src/components/PrivacyPage.astro`, in italiano e in inglese) dichiara che il sito non usa cookie, statistiche, moduli o risorse di terze parti (i font sono in locale, da `@fontsource`) e che salva solo la scelta del tema nel `localStorage`. Se una modifica cambia una di queste cose, aggiorna l'informativa nella stessa modifica.

## Grafica

La grafica viene dalla variante A del prototipo, salvata sul branch `prototype/home-varianti`. Il tema predefinito è scuro, quello chiaro è disponibile; c'è un solo colore di accento, Inter per i testi e JetBrains Mono per le etichette. Prima di dare per finita una modifica al sito applica la skill `web-compliance-and-anti-ai-look`.

## Verifica e pubblicazione

- Il repo non ha test. Una modifica è verificata quando `npm run build` termina senza errori e la pagina è stata controllata nel browser: IT ed EN, tema scuro e chiaro, larghezze 390 e 1440.
- Ogni push su `master` pubblica il sito (`.github/workflows/main.yml`). Il lavoro si fa su un altro branch.
- I commenti nel codice sono in italiano, brevi, e spiegano solo il perché di una scelta.
