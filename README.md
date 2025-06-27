# Movies & Users App

## Description

**Movies & Users** est une application web full-stack permettant de gérer une liste d'utilisateurs et de films. Elle inclut des fonctionnalités de pagination, une interface moderne, et une architecture claire en frontend/backend.

## Fonctionnalités principales

- 🎬 Gestion des films (ajout, affichage)
- 👤 Gestion des utilisateurs
- 📄 Pagination des résultats (affichage de 10 éléments par page)
- 🌐 API REST avec Express.js
- 📦 Base de données MongoDB

## Stack technique

| Côté            | Technologie            |
|-----------------|------------------------|
| Frontend        | React.js, Tailwind CSS |
| Backend         | Node.js, Express.js    |
| Base de données | MongoDB + Mongoose     |


## Structure du projet

 ```
Projet_MongoDB/
│
├── Frontend
│   └── src/
│       └── components/
│   └── App.js
│   └── index.js
│
├── Backend Express
│   └── models/
│   └── routes/
│   └── server.js
│
├── .gitignore
├── README.md
├── .env         # Variables d'environnement (MONGODB_URI)

```

## Installation & lancement

### 1. Clone le dépôt :

```bash
git clone git@github.com:MouramChafik/Projet_MongoDB.git
cd Projet_MongoDB
```

2. Configure les variables d’environnement :
Dans server/.env :

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db
PORT=5000

3. Installe les dépendances :
# Backend
```bash
cd Backend
npm install
node server.js
```

# Frontend
```bash
cd Frontend
npm install
```
4. Lancer l'application :

# Démarrer le backend #
```bash
cd backend
node server.js
```
# Démarrer le frontend
```bash
cd frontend
npm start
```
Aperçu : 
```bash
http://localhost:3000/ 
```

 Captures d’écran ou une démo 
 
TODO & améliorations futures

🔍 Ajout de la recherche par titre d’utilisateur ou de film
✏️ Formulaire d’édition pour les films et utilisateurs
📱 Responsive mobile
✅ Tests unitaires & d’intégration
🌍 Déploiement sur Vercel (frontend) et Render (backend)
Sécurité

Les clés secrètes (ex: Mongo URI) sont stockées dans un fichier .env et exclues de Git avec .gitignore.
N'oublie pas de révoquer toute clé exposée accidentellement.
Auteur

Chafik Mouram
GitHub : MouramChafik

