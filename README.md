# Portfolio Aboubakar — React + Vite

Portfolio premium (thème sombre néon) pour Aboubakar, développeur web & mobile.
Stack : **React 19**, **Vite**, **Tailwind CSS (CDN)**, **Framer Motion**, **Lucide**.

---

## 1. Lancer le projet en local (Windows)

### Pré-requis

- **Node.js 20.19+ ou 22.12+** (obligatoire pour Vite 8) → <https://nodejs.org> (version LTS)
- **Git** (déjà installé si vous avez cloné le projet)

Vérifiez la version installée :

```bat
node -v
```

Si la commande répond quelque chose comme `v18.x`, il faut installer une version plus récente.

### Méthode rapide

- **`demarrer.cmd`** : installe les dépendances si besoin, démarre le site et ouvre
  <http://localhost:5173>.
- **`mettre-a-jour.cmd`** : récupère les dernières corrections depuis GitHub (`git pull`),
  réinstalle si besoin, puis démarre le site. À utiliser quand le dépôt a été mis à jour.

### Méthode manuelle (invite de commandes / PowerShell)

```bat
cd C:\Users\HP\aboubakar-portfolio
npm install
npm run dev
```

Puis ouvrez <http://localhost:5173> dans le navigateur.

### Commandes utiles

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement avec rechargement automatique |
| `npm run build` | Génère la version de production dans `dist/` |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Analyse le code avec Oxlint |

### Erreurs fréquentes

- **`npm : impossible de charger le fichier ... npm.ps1`** (PowerShell) : utilisez l'invite de
  commandes (`cmd`) ou lancez `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` dans PowerShell.
- **`Unsupported engine` / écran blanc** : Node.js est trop ancien, réinstallez la version LTS.
- **Page sans style** : Tailwind est chargé via le CDN `cdn.tailwindcss.com`, donc une connexion
  internet est nécessaire au premier chargement.
- **Port déjà utilisé** : `npm run dev -- --port 5174`.

### Tester depuis un téléphone (même Wi-Fi)

Le serveur est configuré avec `host: true` : Vite affiche une adresse `Network: http://192.168.x.x:5173`
utilisable depuis un mobile connecté au même réseau.

---

## 2. Structure du projet

```
├── demarrer.cmd                  # Lancement local en un clic (Windows)
├── mettre-a-jour.cmd             # git pull + lancement, en un clic (Windows)
├── index.html                    # HTML racine + config Tailwind (CDN)
├── vite.config.js
└── src/
    ├── App.jsx
    ├── index.css                 # Variables de thème, scrollbar, typographie
    └── components/
        ├── Layout/               # MainLayout (sections + barre de progression), Sidebar
        ├── Sections/             # Hero, About, Skills, Services, MobileApps, Projects, Process, Contact
        └── UI/                   # BrandIcons (GitHub, LinkedIn, Instagram, TikTok, WhatsApp), NeonScene
```

## 3. Déploiement

Le build statique (`npm run build` → dossier `dist/`) se déploie tel quel sur **Vercel**,
**Netlify** ou **GitHub Pages**.
