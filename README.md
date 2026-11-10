# Portfolio — Ayoub Chaoui

Site personnel : Business Analyst IT / Chef de projet IT, étude de cas Chill & Work, création vidéo, parcours et compétences.

Site statique (HTML, CSS, JavaScript), sans build ni dépendance : on modifie un fichier, on pousse, c'est en ligne.

## Structure

```
index.html              Contenu de toutes les pages
assets/css/style.css    Couleurs, typographies, mise en page
assets/js/main.js       Icônes animées, navigation entre pages, filtres, compteurs
assets/images/          Photos
```

## Ajouter ou modifier du contenu

Tout le texte est dans `index.html`. Chaque page est une `<section class="page" data-page="...">` :

| Page          | Repère dans `index.html`              |
| ------------- | ------------------------------------- |
| Accueil       | `data-page="accueil"`                 |
| Projets       | `data-page="projets"`                 |
| Chill & Work  | `data-page="chill-and-work"`          |
| Création      | `data-page="creation"`                |
| Parcours      | `data-page="parcours"`                |
| Compétences   | `data-page="competences"`             |
| Contact       | `data-page="contact"`                 |

### Ajouter un projet

Copier un bloc `<article class="card ticket hov" ...>` dans la page Projets et changer le texte.
L'attribut `data-cat` range le projet dans les filtres : `pro`, `web`, `crea`, `aca` (plusieurs possibles, séparés par un espace).

### Ajouter une expérience

Copier un bloc `<article class="hov">` dans la page Parcours. Ajouter la classe `w` (`<article class="w hov">`) pour la couleur orange (création).

### Ajouter une compétence

Copier une tuile `<div class="tile hov">` dans la page Compétences.

### Icônes

Une icône s'écrit `<i data-ic="nom"></i>`. Noms disponibles (définis en haut de `assets/js/main.js`) :

`home arrow external kanban coffee film briefcase gear mail search users doc pen rocket grid code cap shield bolt spark image container window chart chat calendar bell gift box pulse branch check database play layers wave globe bank flow uml plug loop copy phone camera pin`

### Changer une photo

Remplacer le fichier dans `assets/images/` en gardant le même nom.

## Mise en ligne (GitHub Pages)

1. Sur GitHub : **Settings › Pages**.
2. *Source* : **Deploy from a branch**, branche `main`, dossier `/ (root)`.
3. Le site est publié à `https://<compte>.github.io/<nom-du-repo>/` en une minute environ, puis à chaque push.

Nom de domaine personnel (optionnel) : **Settings › Pages › Custom domain**, puis ajouter chez le registraire un enregistrement `CNAME` vers `<compte>.github.io`.

## Tester en local

Ouvrir `index.html` dans le navigateur, ou :

```bash
python3 -m http.server 8000
```
puis http://localhost:8000
