# 🐕 Woof Academy Network

> Plateforme de mise en relation et de mise à disposition d'activités canines - Site web statique HTML5/CSS3

![Version](https://img.shields.io/badge/version-3.1.0-cyan)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ⚠️ AVERTISSEMENT JURIDIQUE IMPORTANT

**Woof Academy Network n'est PAS un centre d'éducation canine.**

- Nous mettons à disposition nos **activités et services contre rémunération**
- **Tout coaching est intégralement sous-traité** à des professionnels indépendants certifiés
- Les éducateurs partenaires exercent en leur nom propre et sous leur propre responsabilité
- Woof Academy agit en tant que **plateforme de mise en relation**

## 🎯 Description

Woof Academy Network est une plateforme innovante de mise en relation pour le domaine canin. Elle propose une expérience utilisateur moderne avec un design néon futuriste et glass morphism.

### Notre modèle
- **Mise à disposition** d'activités et services canins
- **Sous-traitance** des prestations de coaching à des professionnels indépendants certifiés
- **Plateforme de mise en relation** entre propriétaires de chiens et éducateurs partenaires
- **Communauté active** et événements networking

## ✨ Fonctionnalités Implémentées

### Pages Publiques
- ✅ **index.html** - Page d'accueil avec hero, stats, services et témoignages
- ✅ **Concept.html** - Présentation du concept, valeurs, équipe et certifications
- ✅ **Activites.html** - Catalogue d'activités avec filtres (éducation, sports, comportement, stages)
- ✅ **Abonnements.html** - Plans tarifaires avec toggle mensuel/annuel et comparatif
- ✅ **Planning-reservation.html** - Calendrier interactif et système de réservation
- ✅ **Nous-contacter.html** - Formulaire de contact et informations

### Espaces Utilisateurs
- ✅ **Espace-Membre.html** - Dashboard membre avec réservations, progression, badges (style Neon Dashboard)
- ✅ **Espace-Pro.html** - Espace Partenaires complet avec :
  - 🎨 Design "Neon Dashboard" (2 colonnes, neon-frame cards, glass morphism)
  - 📋 Section "Mes Compétences" éditable (8 domaines d'expertise, points forts)
  - 🏪 CRUD "Mes Offres Partenaires" (création, édition, suppression d'offres)
  - 🤝 Programme de Parrainage complet (code parrain, avantages parrain/filleul)
  - 📊 Statistiques (filleuls, économies, classement)
- ✅ **Login.html** - Connexion/Inscription avec authentification sociale simulée

### Boutique
- ✅ **Shop.html** - Boutique en ligne avec filtres et tri
- ✅ **Shop-partenaires.html** - Page des partenaires avec codes promo
- ✅ **Shop-global.html** - Marketplace entre membres
- ✅ **Panier.html** - Panier d'achat avec gestion localStorage

### Administration & Légal
- ✅ **admin-config.html** - Panneau d'administration complet avec design Neon Dashboard
  - 🎨 Template Neon inspiré de perso.html (neon-frame, glow effects)
  - 📊 Tableau de bord avec statistiques temps réel
  - ⚙️ Paramètres complets du site (Général, Animation, Navigation, Couleurs, Notifications, Avancé)
  - 🐕 Prévisualisation animation chien
  - 📤 Import/Export configuration JSON
- ✅ **CgvWoof.html** - Conditions Générales de Vente

## 📁 Structure du Projet

```
woof-academy-network/
├── index.html              # Page d'accueil
├── Concept.html            # Le concept
├── Activites.html          # Catalogue d'activités
├── Abonnements.html        # Plans tarifaires
├── Planning-reservation.html # Calendrier & réservations
├── Espace-Membre.html      # Dashboard membre
├── Espace-Pro.html         # Espace professionnel
├── Shop.html               # Boutique principale
├── Shop-partenaires.html   # Partenaires
├── Shop-global.html        # Marketplace
├── Panier.html             # Panier d'achat
├── Login.html              # Connexion/Inscription
├── Nous-contacter.html     # Contact
├── CgvWoof.html            # CGV
├── admin-config.html       # Administration
├── style.css               # Styles CSS complets
└── README.md               # Documentation
```

## 🎨 Design System

### Couleurs
- **Primary (Cyan)**: `#06b6d4` - Actions principales, liens
- **Success (Green)**: `#22c55e` - Succès, validation
- **Accent (Magenta)**: `#d946ef` - Mise en avant, CTA
- **Background**: `#05070a` - Fond principal sombre
- **Text**: `#e5e7eb` - Texte principal clair

### Composants
- Glass morphism cards avec backdrop-filter
- Bordures néon avec box-shadow
- Boutons avec effets hover et glow
- Navigation responsive avec dropdown
- Formulaires stylisés avec focus states
- Badges et tags colorés
- Système de grille flexible (CSS Grid + Flexbox)

## 🔗 URIs Fonctionnelles

| Page | URI | Description |
|------|-----|-------------|
| Accueil | `/index.html` | Landing page |
| Concept | `/Concept.html` | À propos |
| Activités | `/Activites.html` | Catalogue |
| Abonnements | `/Abonnements.html` | Tarifs |
| Planning | `/Planning-reservation.html` | Réservations |
| Membre | `/Espace-Membre.html` | Dashboard |
| Pro | `/Espace-Pro.html` | Formations |
| Boutique | `/Shop.html` | E-commerce |
| Partenaires | `/Shop-partenaires.html` | Partenariats |
| Marketplace | `/Shop-global.html` | C2C |
| Panier | `/Panier.html` | Checkout |
| Login | `/Login.html` | Authentification |
| Contact | `/Nous-contacter.html` | Formulaire |
| CGV | `/CgvWoof.html` | Légal |
| Admin | `/admin-config.html` | Back-office |

## 💾 Stockage Local (localStorage)

- `woofCart` - Panier d'achat (JSON array)
- `woofLoggedIn` - État de connexion (boolean)
- `woofUser` - Données utilisateur (JSON object)
- `woofEducatorCompetences` - Compétences éducateur (JSON object : competences[], pointsForts[], experience, certifications)

## 📱 Responsive Design

Le site est entièrement responsive avec breakpoints :
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🚀 Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Variables CSS, Grid, Flexbox, Animations
- **JavaScript** - Vanilla JS pour l'interactivité
- **Font Awesome 6** - Icônes (CDN)
- **Google Fonts** - Police Inter (CDN)

## 📝 Fonctionnalités JavaScript

- Menu mobile responsive
- Système de tabs et filtres
- Calendrier interactif
- Gestion du panier (CRUD localStorage)
- Modal de réservation
- Toast notifications
- Authentification simulée
- Toggle dark/light billing
- **CRUD Compétences Éducateur** (Espace-Pro)
  - Modal édition avec checkbox grid (8 domaines)
  - Sauvegarde localStorage persistante
  - Affichage dynamique avec icônes colorées
- **CRUD Offres Partenaires** (Espace-Pro)
  - Création/édition/suppression d'offres
  - Tags, prix, catégories, statuts
- **Programme Parrainage** (Espace-Pro)
  - Copie/partage du code parrain
  - Web Share API avec fallback

## 🔜 Améliorations Futures

- [ ] Intégration API REST pour les données dynamiques
- [ ] Système de paiement réel (Stripe)
- [ ] Notifications push
- [ ] Mode sombre/clair toggle
- [ ] PWA (Progressive Web App)
- [ ] Multilingue (i18n)
- [ ] Chat en direct
- [ ] Système de notation des cours

## 📞 Contact

- **Email**: contact@woofacademy.fr
- **Téléphone**: 01 23 45 67 89
- **Adresse**: 123 Rue des Chiens Heureux, 75000 Paris

---

## 🖼️ Logo officiel

Le logo officiel Woof Academy est utilisé sur toutes les pages :
- **URL** : `https://www.genspark.ai/api/files/s/CMqdSq8G`
- **Style** : Bouclier cyan-turquoise avec patte de chien
- **Intégration** : Header + Footer de toutes les pages
- **Effet visuel** : Animation glow pulsante (cyan → magenta), taille augmentée (72px header, 80px footer)

## 🐕 Animation Chien Panier (NOUVEAU v3.0)

Un système d'animation unique et interactif :
- **Icône** : Chien SVG stylisé (face, pas de profil)
- **Animation balle** : Quand un article est ajouté au panier, une balle rouge est lancée depuis le coin haut-gauche
- **Course du chien** : Le chien court vers la gauche pour attraper la balle
- **Retour avec l'os** : Le chien revient à sa position avec un os dans la gueule
- **Compteur** : Badge magenta avec le nombre d'articles

### Configuration des animations (admin-config.html)
- **Durée vol de la balle** : 200ms - 1500ms (défaut: 500ms)
- **Durée course aller** : 400ms - 2000ms (défaut: 800ms)
- **Durée course retour** : 500ms - 2500ms (défaut: 1000ms)
- **Pause avant retour** : 100ms - 1000ms (défaut: 300ms)
- **Toggle on/off** : Activer/désactiver l'animation
- **Prévisualisation** : Test en temps réel dans l'admin

### Fichiers CSS/JS
- `css/woof-header.css` - Styles du header unifié et animations
- `js/woof-header.js` - Logique JavaScript (animation, panier, navigation)

## 🧭 Navigation Bulle Responsive

Navigation moderne qui s'adapte à l'écran :
- **Desktop (>1100px)** : Barre horizontale avec icônes + texte
- **Mobile (<1100px)** : Bulle flottante en bas avec icônes uniquement
- **Icônes par onglet** : Accueil 🏠, Concept 💡, Activités 🏃, Abonnements 🏷️, Planning 📅, Espace 👤, Boutique 🏪, Contact ✉️

## 📜 Mentions légales intégrées

Un bandeau d'avertissement est affiché sur toutes les pages :
> **Woof Academy** ne prend en charge ni l'éducation canine ni le coaching sportif. **Le coaching est sous-traité** à des professionnels indépendants certifiés.

La section 2 des CGV (`CgvWoof.html`) détaille le statut juridique complet.

## 🔄 Changelog

### v3.1.0 (2026-01-24)
#### 🎉 Nouveautés
- 🎨 **Admin Neon Dashboard** : Refonte complète de admin-config.html
  - Design inspiré du template perso.html
  - Topbar avec logo et badge Admin
  - Sidebar avec navigation par icônes
  - Cards avec effets neon-frame (cyan, green, magenta, blue)
  - Background avec grid et dégradés colorés
  - Prévisualisation animation chien en temps réel
  - 6 onglets de paramètres : Général, Animation Chien, Navigation, Couleurs, Notifications, Avancé
  - Zone Danger pour réinitialisation
  - Import/Export configuration JSON
  - Toast notifications stylisées

### v3.0.0
#### 🎉 Nouveautés majeures
- 🐕 **Animation chien panier** : Balle lancée → chien court → attrape → retour avec os
- 🧭 **Navigation bulle responsive** : S'enroule en icônes sur mobile
- ⚙️ **Admin config animations** : Réglage des timings en temps réel
- 🎨 **Header unifié** : Même structure sur toutes les pages (sauf admin)

#### 📁 Nouveaux fichiers
- `css/woof-header.css` - Styles header unifié (11KB)
- `js/woof-header.js` - JavaScript animations (6KB)

#### 📄 Pages mises à jour avec nouveau header
- ✅ index.html
- ✅ Concept.html
- ✅ Activites.html
- ✅ Abonnements.html
- ✅ Planning-reservation.html
- ✅ Shop.html
- 🔄 Autres pages à mettre à jour

#### 🔧 Corrections
- Uniformisation du disclaimer sur toutes les pages
- Logo avec animation glow pulsante

---

**© 2024 Woof Academy Network** - Tous droits réservés

*Plateforme de mise en relation pour les passionnés de chiens*

⚠️ *Note importante : Woof Academy n'est pas un établissement d'éducation canine. Tous les coachings sont sous-traités à des professionnels indépendants.*
