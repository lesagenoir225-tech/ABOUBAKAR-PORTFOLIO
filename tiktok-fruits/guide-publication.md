# 🍓 Pack TikTok « Fruits en tendance » — Guide de publication

3 vidéos verticales **1080×1920, 30 fps, MP4** (format TikTok/Reels/Shorts), calquées sur
les tendances fruits IA qui cartonnent en 2026 : **bébés-fruits qui dansent**,
**mini-série téléréalité type « Fruit Love Island »** et **ASMR fruits**.

Fichiers prêts à poster dans `out/` :

| Fichier | Contenu | Durée |
| --- | --- | --- |
| `01-bebes-fruits-danse.mp4` | Les bébés-fruits (fraise, kiwi, orange) dansent sur scène | 12 s |
| `02-ile-des-fruits-episode1.mp4` | Épisode 1 « L'Île des Fruits » : Mangue vs Fraise, la danse de Banano | 16,5 s |
| `03-asmr-fruits.mp4` | Coupe ultra satisfaisante, spirale de fruits, jus d'orange | 12 s |

---

## Légendes prêtes à copier-coller

**Vidéo 1 — bébés-fruits danse**
> Bébé fraise danse mieux que toi 😭🍓 Qui danse le mieux ? Dis-le en commentaire 👇
> `#aifruit #fruitdance #bebefruit #danse #tiktokfrance #pourtoi #fyp #fruits #trend #viral`

**Vidéo 2 — L'Île des Fruits (épisode 1)**
> ÉPISODE 1 : L'ÎLE DES FRUITS 🍌🌴 Mangue et Fraise se détestent… mais Banano prépare
> quelque chose. Tu es TEAM MANGO ou TEAM STRAWBERRY ? Dis « SUITE » pour l'épisode 2 👀
> `#aifruit #fruitloveisland #serie #comedie #drama #pourtoi #fyp #fruits #ia #viral`

**Vidéo 3 — ASMR fruits**
> Ça donne faim ? 😮‍💨🍓 Attends la dernière coupe…
> `#asmr #fruitsatisfying #oddlysatisfying #asmrfrancais #fruits #coupe #pourtoi #fyp #trend #viral`

---

## Sons à ajouter dans l'app (important !)

Les vidéos ont déjà une **voix off FR**, mais TikTok pousse beaucoup plus les vidéos qui
utilisent un **son tendance** (l'icône 🔊 → « Ajouter un son ») :

- **Vidéo 1** : remplace l'audio par un son danse tendance (ex. « Brazil Dance », sons
  « baby dance » du moment) — c'est le format qui explose le plus.
- **Vidéo 2** : garde la voix off (le format mini-série marche avec la narration), ou
  ajoute un son « reality show drama » en fond très bas.
- **Vidéo 3** : prends un son ASMR coupe de fruits, ou un son doux en fond.

## Conseils de publication

1. **Étiquette le contenu IA** : paramètres de publication → « Label IA » / « Contenu
   généré par IA » (obligatoire pour les contenus réalistes générés par IA).
2. **Rythme** : 1 à 2 vidéos par jour pendant 7 jours pour tester l'algo. Poste vers
   12h, 18h ou 21h.
3. **Hook** : les 2 premières secondes sont déjà accrocheuses (texte + personnages) —
   ne les coupe pas.
4. **Série = croissance** : mets la vidéo 2 en épisode 1, puis génère les épisodes 2, 3…
   chaque commentaire « SUITE » booste l'algo. Réponds en vidéo aux commentaires.
5. **Communique sur le compte** : change la bio en mode « La série fruits la plus folle
   de TikTok 🍌 », épingle les 3 vidéos.
6. Poster aussi en **Reels Instagram** et **Shorts YouTube** (mêmes fichiers).

---

## Reproduire / modifier les vidéos

Tout est automatisé dans `build.sh` :

```bash
cd tiktok-fruits
npm install --strict-ssl=false   # installe ffmpeg embarqué
bash build.sh                    # régénère out/*.mp4
```

- Les visuels sont dans `img/` (générés par IA, style 3D type Pixar).
- Les légendes s'éditent dans `captions/*.txt` (1 fichier par scène).
- Les voix off sont dans `audio/*.mp3`.
- Les durées/scènes se changent en haut du script (`scene img/... 3.0 ...`).
