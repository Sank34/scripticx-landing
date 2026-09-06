# ScripticX Blog

Blog-ul folosește infrastructura Next.js + MDX existentă. Nu este o instalare Docusaurus.

## Adaugă un articol

1. Creează `content/blog/numele-articolului/`. Numele folderului devine URL-ul `/blog/numele-articolului` (litere mici, cifre și cratime).
2. Adaugă `meta.json`, `en.mdx` și `ro.mdx`. Folosește articolul `welcome` drept exemplu.
3. Scrie conținutul în MDX. Titlul H1 vine din metadata; începe conținutul cu `##`.
4. Rulează `npm run build`, verifică pagina și publică prin fluxul normal de deployment.

```json
{
  "date": "2026-09-05",
  "author": "ScripticX",
  "tags": ["learning", "development"],
  "draft": true,
  "en": {"title": "Post title", "description": "Summary for listing and SEO."},
  "ro": {"title": "Titlul articolului", "description": "Rezumat pentru listă și SEO."}
}
```

Schimbă `draft` în `false` doar când articolul este gata. Drafturile sunt excluse din listă, rute și sitemap. Data este editorială, nu programează publicarea. Ambele traduceri sunt necesare pentru un articol publicat.

Articolele sunt descoperite automat, sortate după dată descrescător și paginate câte șase. Tagurile folosesc litere mici ASCII, cifre și cratime. Autorul este numele afișat, nu implică existența unui profil.

## MDX

Sunt disponibile Markdown, tabele GFM, linkuri, blocuri de cod și componenta `<Callout title="Notă">…</Callout>`. Poți importa componente React locale. ID-urile titlurilor sunt generate automat; cuprinsul citește aceleași ID-uri. Folosește titluri distincte.

Imaginile pot sta în `public/blog/` și pot fi referite prin `/blog/nume.png`. Nu confunda acest folder de imagini cu ruta `/blog`.

Metadatele stau în JSON separat, **nu în YAML frontmatter**. MDX execută cod la compilare: acceptă numai conținut de la autori de încredere din repository, nu upload-uri sau MDX extern.
