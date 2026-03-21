# ENERGIS_WebGIS
## Description

Cette application est constituée :

1/ D'un site web destiné à un bureau d'étude fictif spécialisé dans la géomatique appliquée aux énergies renouvelables.  
2/ D'une application WebSIG permettant aux utilisateurs de visualiser l'ensemble des projets éoliens et photovoltaïques répartis sur le territoire national.

## Fonctionnalités

### 1) Site internet 

Le site internet sera composé de plusieurs pages permettant de :  

Présenter la géomatique aux professionnels des énergies renouvelables non initiés à cette discipline.  
Décrire les prestations proposées par le bureau d'étude en matière d'analyses géospatiales appliquées aux énergies renouvelables.  
Détailler les fonctionnalités et les données mises à disposition par l'application cartographique.  
Fournir un espace d'inscription et de connexion pour accéder à l'application.   

### 2) Application WebSIG 

L'ensemble des fonctionnalités de l'application sera donc associé à l'interface cartographique de manière à exploiter les données géospatiales et gérer les comptes utilisateurs.

### A. Utilisateurs

L'accès à la plate forme WebSIG nécessitera une authentification via un identifiant (adresse e-mail) et un mot de passe renseignés lors de l'inscription. Les utilisateurs pourront se déconnecter librement de l'application et gérer leurs informations personnelles via un profil utilisateur.

Informations collectées lors de l'inscription via un formulaire d'enregistrement :
Nom
Prénom
Adresse e-mail
Adresse postale
Code postal
Ville
Numéro de téléphone
Mot de passe

L’ensemble de ces informations pourra être mis à jour par l’utilisateur via son espace personnel.

Fonctionnalités cartographiques accessibles aux utilisateurs :  
- Consultation des données cartographiques en lecture seule par simple clic dans l'application.  
- Export de cartes au format PDF  
- Utilisation d’outils de calcul et de mesure des distances et surfaces.  
- Accès à une couche de données personnelle dédiée aux utilisateurs pour tracer leurs propres zones de projet (éolien ou photovoltaïque).  
- Recherche rapide de localités via un champ de recherche : les utilisateurs pourront entrer une adresse et l'application effectuera un zoom automatique sur le lieu qui aura été trouvé grâce à un outil de géocodage issu de la librairie Leaflet (utilisant une API OpenStreetMap).  
  
Par le biais d'un dashboard, l'utilisateur pourra accéder soit à son profil mais aussi à l'ensemble des zones d'étude qu'il aura tracées dans l'application   cartographique. Il pourra donc les visualiser, les modifier mais aussi les supprimer.  


### B. Administrateurs

L'administrateur disposera d’une interface dédiée (dashboard) pour la gestion des utilisateurs et des données géographiques de l'application.

- Par le biais de formulaires dédiés, il pourra :  
- Créer de nouveaux comptes utilisateurs.  
- Supprimer des comptes clients en cas de demande de résiliation.  
- Accéder aux informations des utilisateurs (nom, prénom, numéro de téléphone, adresse e-mail, adresse postale) sans pouvoir les modifier.  
- Gérer les rôles et les autorisations (utilisateur standard, administrateur).  
- Ajouter, supprimer et modifier les informations et géométries des données géographiques.  
  

## Technologies utilisées
SCSS, JavaScript, Leaflet, React, Node.js, MySQL

## Installation locale
Clonez ce dépôt : git clone https://github.com/FB-GIS/ENERGIS_WebGIS.git  
Créez votre BDD avec les fichiers SQL correspondant aux tables (voir MCD/MLD dans dossier backend) contenus dans le dossier backend/data  
Modifier les information du fichier .env avec les infos de votre BDD (host, user, password...etc)  
Dans le terminal de votre IDE, positionnez vous sur le dossier backend : cd sites/0_ENERGIS/backend/ PUIS npm run dev  
Dans un second terminal de votre IDE, positionnez vous sur le dossier frontend : cd sites/0_ENERGIS/backend/ PUIS npm run dev  
Pour la gestion du SCSS, positionnez vous sur le dossier css : cd sites/0_ENERGIS/frontend/src/css/ PUIS sass --watch style.scss:style.css  

## Sources des données
Les données spécifiques aux projets éoliens et photovoltaïques ont été agrégées à partir de plusieurs sources publiques (DREAL, DDT, Geo-IDE...etc)

## Auteurs
Frédéric BARON
