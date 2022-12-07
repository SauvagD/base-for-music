# Base for music - Gender Game

## Mise en place du projet

Cloner le projet nommée `base-for-music`, sur votre PC, dans un nouveau dossier. Aller ensuite dans le projet cloné.
Une fois cela fait, il est nécessaire d'ouvrir deux terminal.

### Backend

Votre premier terminal va faire tourner la partie Backend (*ExpressJs / SQLite*) de l'application. 
Aller dans le dossier **back**, en utilisant `cd back`.  

Il faut ensuite installer les librairies nécessaire au Backend, en exécutant la commande `npm install`.
Ensuite, il faut lancer le serveur en utilisant `npm start`.

### Front

Le second terminal va accueillir la partie Front (*React / Mantine*) de l'application.
Aller dans le dossier **front**, en utilisant `cd front`.

Installer les librairies nécessaire, en exécutant la commande `npm install`.
Ensuite, il faut lancer le serveur Front, en utilisant `yarn dev`.

## Fonctionnement technique

J'ai commencé ce projet, par le côté Backend de l'application. Il me semblait plus simple de faire la mise en place de la base de donnée rapidement pour ensuite passer à la partie Front avec React.

## Backend

J'ai d'abord commencé par installer / importer les dépendances dont j'allais avoir besoin (SQLite3, dotenv, express, fs).
Ensuite, il me fallait peupler la base de données en utilisant le fichier **names.txt**, fourni dans la consigne. Pour ce faire j'ai eu besoin du module fs, me permettant de manipuler des fichiers. Ainsi, j'ai pu seulement, prendre les prénoms des utilisateurs en ignorant les noms de familles, et les insérer dans la base de donnée. 
J'ai inséré ces enregistrement dans une table nommée *people* possédant 2 colonnes: la colonne prénom (string), et la colonne id. Cette colonne id, va me servir pour récupérer de manière aléatoire, un enregistrement dans la database.
En effet, pour produire ce nombre aléatoire, je me base sur le nombre maximum de record que contient la table people, en me basant sur l'Id. Ainsi, j'ai une formule me permettant de déterminer un nombre entre 1 et le maximum d'enregistrement dans la base, ce qui me retourne un prénom aléatoire.

Puis, j'ai besoin de trouver le genre du prénom. Il me suffit d'utiliser l'API, et le client de genderAPI, me permettant de retrouver un genre à partir d'un prénom.
Je retourne au Front, un objet contenant une priopriété prénom et une propriété genre.

## Front

J'ai d'abord commencé par créer la logique du jeu en utilisant la partie Back. En effet, il faut récupérer l'objet contenant le prénom pour l'afficher. Ainsi, j'ai créer un provider nommée *gameProvider*, me permettant d'avoir des variables globales liées au jeu. Toute ma logique métier se trouve dans ce provider. Il contient le status du jeu (Perdu, Gagné, En attente) et le nombre de points actuel du joueur. En utilisant un `useEffect`, je suis parvenu a récupérer un prénom aléatoire à chaque fois que l'utilisateur gagne ou perd un point. 

Pour ce qui est de la partie visuel, Mantine a fait le plus gros travail : en effet, quand l'utilsateur perd ou gagne, une modal apparait lui indiquant le statut de la partie.
De plus, chaque fois que le score change positivement ou négativement, la couleur change indiquant une perte (rouge) ou un gain (vers) de point. 

## Points d'améliorations

Ce projet est un petit projet, cherchant juste à répondre à une consigne. Cependant, pour un plus gros projet, il faudrait mettre en place, une vrai base de données et une architecture avec des routes et des controllers. De plus, il faudrait le conteneurisé pour rendre l'application, plus portative, et plus pratique d'installation.

Sinon, de mon point de vue plusieurs points pourrait être amélioré à court terme :
- la gestion d'erreur en cas d'indisponibilité du serveur Back, ou de l'API;
- la sécurité au niveau du front, pour ne pas voir le genre en allant dans la partie réseau de l'inspecteur;
- le proxy entre le Back et le Front;
- la suppression de la croix (en haut à droite) de la modal;
- créer plus d'éléments graphiques en lien avec le thème du jeu;
- une meilleur gestion du style dans le code;