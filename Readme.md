# Cinetrack

Cinetrack est une plateforme web moderne de découverte de films et séries.  
Elle permet aux utilisateurs de parcourir des **bandes-annonces** par catégorie (films, séries TV, animations, etc.) et à terme, bénéficiera d’un **système de recommandation intelligent** propulsé par une IA.

>  Ce dépôt contient la première version du **backend** développé avec **Node.js**, **Express**, **Prisma** et **MySQL**.

---

##  Objectifs du projet

L’objectif principal de Cinetrack est de proposer une plateforme fluide et performante pour :
- Explorer des bandes-annonces de films/séries organisées par catégories,  
- Gérer les comptes utilisateurs (inscription, connexion, profil),  
- Enregistrer les likes et favoris,  
- (À venir) Générer des **recommandations personnalisées** basées sur les goûts des utilisateurs,  


---

## Stack Technique

### 🔹 Backend
- **Node.js** (v18+)
- **Express.js**
- **Prisma ORM**
- **MySQL / MariaDB**
- **bcrypt** – Hashage des mots de passe  
- **jsonwebtoken (JWT)** – Authentification  
- **dotenv** – Variables d’environnement  
- **CORS** – Gestion des requêtes front ↔ backend  

### 🔹 Frontend *(à venir)*
- **React.js**
- **Tailwind CSS**

---

## Installation et Lancement

###  Cloner le projet
```bash
git clone https://github.com/marc-pharel-polla/CineTrack.git
cd cinetrack/server
