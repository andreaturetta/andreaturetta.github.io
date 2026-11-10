# andreaturetta.github.io

Il mio portfolio: <https://andreaturetta.github.io> in italiano, <https://andreaturetta.github.io/en/> in inglese.

Fatto con [Astro](https://astro.build) e Tailwind CSS e pubblicato su GitHub Pages.

## Avvio in locale

```bash
npm install
npm run dev       # http://localhost:4321, mostra anche le bozze
npm run build     # build di produzione in dist/, senza bozze
npm run preview   # anteprima della build
```

## Modificare i contenuti

I testi sono in `src/data/it.ts` (italiano) e `src/data/en.ts` (inglese), che hanno la stessa struttura. Ogni modifica va fatta in tutti e due i file.

- **Bozze**: una voce con `draft: "motivo"` si vede solo con `npm run dev` e non viene pubblicata. Per pubblicarla, completa i testi e togli `draft`. La build elenca le bozze escluse.
- **Progetti**: un Progetto con `detail` ha anche una pagina propria (`/progetti/<slug>/` e `/en/projects/<slug>/`). Le immagini vanno in `public/` e ognuna ha bisogno di un testo `alt`.
- **CV**: quello italiano è `public/cv.pdf`. Quando hai il CV in inglese, mettilo in `public/` e cambia `cv` in `src/data/en.ts`, cioè `href`, `hreflang: "en"` e `label: "Download CV"`.

Le regole su cosa si può pubblicare delle aziende e dei clienti sono in [`docs/adr/0001-riservatezza-contenuti.md`](docs/adr/0001-riservatezza-contenuti.md).

## Pubblicazione

Ogni push su `master` avvia la GitHub Action che costruisce e pubblica il sito.
