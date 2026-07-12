# 🎨 Mon Portfolio - Site Web Personnel

Un portfolio web moderne et coloré créé avec **HTML5**, **Bootstrap 5** et **JavaScript** pour présenter vos projets et vos compétences.

## ✨ Fonctionnalités

- 🎯 **Design moderne et coloré** avec gradients et animations
- 📱 **Responsive design** - Optimisé pour tous les appareils
- ⚡ **Performance optimisée** - Chargement rapide
- 🎨 **Animations fluides** - Effets visuels attrayants
- 📝 **Toutes les sections** - Accueil, À propos, Compétences, Projets, Blog, Contact
- 🎭 **Effects avancés** - Parallax, Ripple, Scroll animations
- 📬 **Formulaire de contact** - Fonctionnel avec validation
- 🔗 **Liens vers réseaux sociaux** - GitHub, LinkedIn, Twitter, Instagram

## 🚀 Démarrage Rapide

### 1. Cloner ou créer le projet
```bash
git clone https://github.com/Nasri732/mon-portfolio.git
cd mon-portfolio
```

### 2. Ouvrir le portfolio
Double-cliquez sur `index.html` ou utilisez un serveur local :
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server
```

Puis ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur.

## 📁 Structure du Projet

```
mon-portfolio/
├── index.html          # Page principale
├── style.css           # Styles CSS
├── script.js           # JavaScript interactif
├── README.md           # Documentation
└── assets/             # Dossier pour images (optionnel)
    └── images/
```

## 🎨 Personnalisation

### 1. Modifier vos informations personnelles

Ouvrez `index.html` et remplacez :

- **Nom & titre** : Cherchez `Bonjour! 👋` et `Je suis Développeur Web Full Stack`
- **Photo de profil** : Remplacez l'URL de l'image placeholder
- **Bio** : Modifiez la section À propos
- **Compétences** : Mettez à jour la liste dans la section Compétences
- **Projets** : Ajoutez vos vrais projets dans la section Projets
- **Articles** : Remplacez les articles de démo par vos articles
- **Coordonnées** : Mettez à jour email, téléphone, localisation
- **Réseaux sociaux** : Ajoutez vos vrais liens

### 2. Modifier les couleurs

Editez `style.css` et modifiez les variables :

```css
:root {
    --primary-color: #28a745;      /* Vert principal */
    --secondary-color: #17a2b8;    /* Bleu secondaire */
    --success: #28a745;             /* Succès (vert) */
    --info: #17a2b8;                /* Info (bleu) */
    --warning: #ffc107;             /* Avertissement (jaune) */
    --danger: #dc3545;              /* Danger (rouge) */
}
```

### 3. Ajouter des sections personnalisées

Vous pouvez dupliquer les sections existantes dans `index.html` et les adapter à vos besoins.

### 4. Connecter le formulaire de contact

Pour que le formulaire fonctionne vraiment, vous pouvez utiliser :
- [Formspree](https://formspree.io/)
- [SendGrid](https://sendgrid.com/)
- [EmailJS](https://www.emailjs.com/)

## 🖼️ Sections Principales

### 1. **Accueil (Hero)**
- Photo de profil
- Titre et description
- Boutons d'appel à l'action

### 2. **À Propos**
- Présentation personnelle
- Statistiques (projets, clients, expérience)
- Liens vers réseaux sociaux

### 3. **Compétences**
- Frontend (HTML, CSS, JavaScript, React, Vue)
- Backend (Node.js, Python, MongoDB, PostgreSQL)
- Outils (Git, Docker, APIs, Agile)

### 4. **Projets**
- Cartes de projets avec images
- Description et technologies utilisées
- Liens vers les projets

### 5. **Blog**
- Articles récents
- Catégories (React, Sécurité, Design)
- Dates de publication

### 6. **Contact**
- Formulaire de contact
- Informations de contact
- Réseaux sociaux

## 📦 Dépendances

- **Bootstrap 5.3** - Framework CSS
- **Font Awesome 6.4** - Icônes
- Pas d'autres dépendances externes requises!

## 🌐 Déployer votre Portfolio

### Option 1: GitHub Pages (Gratuit)

1. Committez vos changements
```bash
git add .
git commit -m "Mise à jour du portfolio"
git push origin main
```

2. Allez dans les **Paramètres** de votre repository
3. Cherchez **Pages** dans le menu de gauche
4. Sélectionnez `main` comme branche source
5. Votre portfolio est en ligne à `https://Nasri732.github.io/mon-portfolio`

### Option 2: Vercel (Très facile)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Importez ce repository
4. Vercel déploiera automatiquement!

### Option 3: Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez votre compte GitHub
3. Glissez-déposez le dossier ou connectez votre repo
4. Votre site est en ligne!

## 💡 Conseils de Personnalisation

- 📸 Utilisez [Unsplash](https://unsplash.com) ou [Pexels](https://pexels.com) pour des images gratuites
- 🎨 Testez des palettes de couleurs sur [Coolors.co](https://coolors.co)
- 📝 Écrivez une bio mémorable et engageante
- 🔗 Ajoutez des liens vers votre GitHub, LinkedIn, etc.
- ⚡ Optimisez les images pour une meilleure performance
- 🔍 Testez la responsivité sur mobile

## 🐛 Dépannage

### Le portfolio ne s'affiche pas correctement
- Vérifiez que tous les fichiers sont dans le même dossier
- Videz le cache du navigateur (Ctrl+F5)
- Testez avec un autre navigateur

### Les animations ne fonctionnent pas
- Vérifiez que JavaScript est activé
- Consultez la console du navigateur (F12) pour les erreurs

### Les images ne se chargent pas
- Vérifiez les URLs des images
- Assurez-vous que les fichiers d'images existent
- Utilisez des URLs absolutes plutôt que relatives

## 📞 Support

Pour des questions ou des problèmes :
1. Consultez la documentation Bootstrap: https://getbootstrap.com/docs/5.3/
2. Consultez la documentation Font Awesome: https://fontawesome.com/docs
3. Ouvrez une issue sur GitHub

## 📄 Licence

Ce projet est libre d'utilisation et de modification. Vous pouvez l'utiliser comme base pour votre portfolio personnel.

## 🙏 Merci

Merci d'avoir utilisé ce template de portfolio! N'oubliez pas de:
- ⭐ Donner une star si vous aimez le projet
- 🔄 Le forker pour votre usage personnel
- 📢 Le partager avec d'autres développeurs

---

**Créé avec ❤️ pour les développeurs web**

Bonne chance avec votre portfolio! 🚀