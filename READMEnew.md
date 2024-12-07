# Application de Liste de Tâches (Todo List)

## Introduction

Cette application de liste de tâches a été développée dans le cadre d'un test technique. Elle repose sur un backend NestJS et un frontend React, avec une base de données MySQL. L'objectif est de permettre la création, la modification, la suppression et l'affichage des tâches.

## Choix et Décisions

### Outils et Technologies

- **Backend** : NestJS pour une architecture modulaire et Prisma pour la gestion des données.
- **Frontend** : React pour une interface utilisateur réactive.
- **Base de données** : MySQL pour stocker les tâches.
- **Gestion des dépendances** : Yarn, conformément aux consignes.

### Décisions techniques

- **Organisation du backend en modules** pour une meilleure maintenabilité.
- **Utilisation de Prisma** pour simplifier les interactions avec la base de données et gérer les migrations.
- **Ajout de hooks React personnalisés** pour simplifier la gestion des données côté frontend.

## Points de Blocage et Résolutions

### Problème avec le champ `completed`

- **Problème** : Ce champ était initialement absent du modèle de base de données.
- **Solution** : Ajout du champ dans le schéma Prisma et application d'une migration.

### Problème de types dans Prisma

- **Problème** : Incompatibilité des types lors des opérations CRUD.
- **Solution** : Utilisation d'assertions de type explicites.

### Problème de connexion à la base de données

- **Problème** : Les identifiants dans le fichier `.env` ne correspondaient pas à ma configuration locale.
- **Solution** : Mise à jour des identifiants pour refléter correctement les paramètres locaux (utilisateur, mot de passe et nom de la base de données).

### Conversion des fins de ligne CRLF en LF

- **Problème** : Des erreurs de syntaxe sur Linux dues à un formatage CRLF.
- **Solution** : Conversion des fichiers en format LF, compatible avec Linux.

### Ajout de données pour les tests

- **Action** : Ajout de plusieurs tâches dans la base de données pour valider le bon fonctionnement des fonctionnalités de l'application.

### Synchronisation des données entre backend et frontend

- **Problème** : Difficulté à mettre à jour l'état local après une opération backend.
- **Solution** : Ajout de gestionnaires d'état et d'effets pour synchroniser les données.

## Instructions d'Installation

### Backend

1. Clonez le dépôt backend :
   git clone <URL_DU_DEPOT_BACKEND>
   cd backend
2. Installez les dépendances :
yarn install
3. Configurez la base de données dans le fichier .env :
DATABASE_URL="mysql://<user>:<password>@localhost:3306/<database_name>"
4. Appliquez les migrations Prisma :
npx prisma migrate dev --name init
5. Lancez le serveur backend :
yarn start:dev

### Frontend
1. Clonez le dépôt frontend :
git clone <URL_DU_DEPOT_FRONTEND>
cd frontend
2. Installez les dépendances :
yarn install
3. Lancez le serveur frontend :
yarn start

## Fonctionnalités Implémentées

### Backend
- Création de tâches.
- Modification de tâches.
- Suppression de tâches (déjà implémentée dans le code fourni).
- Récupération des tâches (fonctionnalité existante).

### Frontend
- Ajout d'une tâche.
- Modification d'une tâche.
- Suppression d'une tâche via un appel à l'API backend.
- Marquage d'une tâche comme complétée ou non complétée.

## Points Bonus
Une nouvelle fonctionnalité a été ajoutée : l'option completed, permettant de marquer une tâche comme complétée ou non complétée.

- Cette option est disponible dans le frontend via une case à cocher.
- Les changements sont synchronisés avec la base de données via des appels API.

Ce projet a permis de construire une application modulaire et performante en utilisant les meilleures pratiques de développement avec NestJS et React. Les défis rencontrés ont été résolus avec succès, notamment les problèmes liés à la base de données, au formatage des fichiers et à la synchronisation des données. L'application est prête à être testée et utilisée.
