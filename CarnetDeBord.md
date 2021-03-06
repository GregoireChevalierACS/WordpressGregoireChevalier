**Carnet de bord**

Le projet consiste à créer un plugin météo destiné à Wordpress tout en le détaillant à la façon d'un carnet de bord. Le plugin devra donner le temps qu'il fera à l'adresse de l'utilisateur le jour même, le lendemain, surlendemain et le jour d'après.

Les données météorologiques seront récupérées avec une API et affichées en AJAX. Deux technologies pour lesquelles je suis totalement étranger.

À terme, le plugin a vocation de permettre à l'utilisateur de changer la localisation du bulletin météo 

31/1/2020
Jour 1 : 

 - Explication du projet et des consignes
 - Création de la feuille de route
 - Installation de Wordpress
 - Découverte des fonctionnalités, premier test de plugin
 
 Étant totalement débutant sur Wordpress, je passe la première après midi de ce projet à découvrir l'interface et à parcourir ses fonctionnalités.  Pour lancer le projet, je passe à la création du plugin dans lequel je marque une ligne de texte et la date avant de replonger dans la documentation.

4/2/2020
Jour 2 :

 - Création du dossier du plugin météo
 - Visionnage de vidéos d'introduction à Wordpress
 - Ajout des dates ultérieures 
 - Fix des fonctions php relatives aux dates
 - Ajout de la localisation par pays et affichage relatif
 
 Je me suis amusé à résoudre des problèmes mineurs relatifs à l'affichage des dates, leur format d'affichage et le passage d'un mois à l'autre. Le tout est maintenant fonctionnel. C'est pas grand chose, mais ça suffit à me motiver à passer à la suite.
La localisation pose un tout autre problème, je galère à traduire ce que me renvoie la fonction qui détecte le code pays et à l'afficher correctement. Après quelques allers-retour dans la doc, le problème est reglé et je décide de tenter de changer la localisation pour voir si le résultat affiché change bien également, seulement, pour accéder à cette fonction (la SetLocale() de php ne portant pas ses fruits), il me faut gérer cela via JavaScript. 
Et là je vais devoir me pencher sur la partie intégration du css/Js au wordpress, que je repousse par flemme depuis le début du projet. La journée se termine là dessus et je remets le tout au lendemain.

5/2/2020
Jour 3

 - Création du repo git hub
 - Ajout du fichier md et début du carnet de bord
 - Continuité des recherches sur l'intégration du Js  au wordpress
 - Documentation

Bon, cette fois, je ne peux plus repousser. J'ai bien tenté de traînailler en faisant le repo et en éditant le carnet de bord, mais j'en suis arrivé au point où il va falloir que je me farcisse la série de vidéos tuto d'Alecad, qui selon ce que j'ai récolté comme info dans la classe, est fort adaptée à la structure de notre projet en plus d'être didactique.
Et. Elle. Fait. 63. Épisodes.
Bah c'est parti..... après la pause :p

6/2/2020
Jour 4

 - Reprise de la lecture de la doc et tutos vidéo
 - Bidouillages en Css pour prévoir l'accueil des fonctionnalités
 - Étude de l'Ajax
 - Reprise du concept et mise à plat sous forme de visuels
 - Étude de plugins existants

Petit passage par le php orienté objet pour commencer, je n'en aurai pas l'utilité dans l'immédiat mais je sens que ça va me servir pour plus tard.
CA Y EST j'ai enfin trouvé la vidéo qui va me permettre d'intégrer mon Js à Wordpress, à priori ça utilise du enqueue ... On verra bien.
Maintenant que c'est fait, je vais pouvoir attaquer un autre gros morceau, l'intégration d'Ajax et la gestion d'API. La légende raconte que c'est facile avec jQuery, mais vu que c'est sur le déclin, je pense pas utiliser ça mais plutôt Js vanilla. On verra bien, je vais juste me renseigner sur la méthode jQuery, on sait jamais ( ͡° ͜ʖ ͡°).
Une source fiable *(tousse)* Aranxa *(tousse)* m'a mis au courant que l'Ajax se gérait depuis le Js. Je sens que ça vient de m'éviter de me perdre longuement. Le premier contact avec Ajax va probablement mieux se passer que prévu.
J'apprends aussi qu’Ajax est l’acronyme de « Asynchronous Javascript And Xml ». Ca m'évitera *peut-être* de faire des blagues ... décapantes.
J'ai trouvé un site qui met en vis-à-vis les lignes de code en jQuery et en Js vanilla sur le site au doux nom de : https://putaindecode.io/articles/de-jquery-a-vanillajs/#ajax . Les codeurs sont des petits rigolo si tu veux mon avis  （°々。）
Suite à la réunion initiée par notre cher formateur, il a fallu que je repense le projet du point de vue du concept. Je m'étais focalisé sur la technique pour voir ce que je pourrai réaliser et comment, malheureusement il aurait fallu partir du principe que la technique serait acquise et qu'il fallait concevoir de façon ambitieuse. Donc, papier, stylo et c'est parti pour coucher des idées sur le papier. 
Me voilà donc avec un projet validé par ce cher formateur, qui y est allé de son petit ajout de fonctionnalité. Et autant je peux entrevoir comment je vais réaliser l'organisation du plugin, autant pour ce qui va être de le remplir, là ...  ¯\_(ツ)_/¯
Mais au moins j'ai des jolis schémas. Je vais donc mettre tous mes doutes sous le tapis (de souris) et ça ne sera un problème que demain matin.

7/2/2020
Jour 5

 - Maquettage des fonctionnalités
 - Documentation 
 - Planification et prise de contact avec AJAX

Ca pèle dehors. J'en ai encore les doigts engourdis, et je vais commencer la journée en douceur en posant rapidement la base d'HTML de mon plugin. Première étape, le matérialiser sous forme de petit bouton qui va activer ou désactiver le tout au clic.
Je me bats actuellement contre wordpress qui passe outre mon css sur certains points.  À priori, ça viendrait du thème de la page. Retour à la case documentation. Puisqu'on peut gérer une partie du css depuis wordpress même, je vais arrêter de m’appesantir sur le sujet et passer à l'AJAX.
Le premier contact se fait en douceur, j'apprivoise la bête de façon détournée pour pas (m')l'effrayer. J'ai trouvé sur le site https://www.seomix.fr/ajax-wordpress/ une méthode qui accompagne pas à pas, mais qui, ô hérésie, utilise allégrement jQuery comme si tout était normal. Heureusement, j'ai déjà la parade, je sais où trouver la conversion des fonctions jQuery/Js. Encore que c'est pas si grave d'utiliser Query, mais quitte à apprendre une nouvelle techno, j'aime autant essayer de maîtriser la chaîne du premier au dernier maillon. Même si ça prend plus de temps et d'énergie. Je suis plus un control freak, je le promets. Je travaille sur moi ^^'.

10/2/2020
Jour 6

 - Début de l'apprentissage de l'AJAX
 - Diversification des recherches
 - Noyade dans la doc
 - Non-pétage de plombs
 - Retour de la sérénité
 - Intégration des infos de l'API au plugin.

Lundi matin, démarrage en douceur, je mets à jour la VM, et je pose un regard distrait sur la doc concernant l'AJAX,  qui résume ce que j'ai vu de Grafikart ce weekend. Je m'attends à pouvoir en faire quelque chose avant midi, c'est l'objectif.
Après quelques recherches, je me suis posé la question : pourquoi est-ce que je veux utiliser AJAX ? La réponse, dans l'immédiat, c'est que je veux accéder à la position de l'utilisateur. Et pour ça j'ai pas besoin d'AJAX, mais juste d'une API. Donc le focus change sensiblement et je m'attelle à récupérer la position de l'utilisateur. De l'user. C'est plus rapide en anglais. C'est bien l'anglais. Quand c'est plus court. Seulement.Oui.
Sauf que plot twist, que renvoie l'API ? Du XML. XML, comme dans Asynchronous Javascript And Xml. Eh bah yes.... Je .... Je vais prendre une pause et on verra après ><'.
Avec les idées plus claires, je me suis dit que ça m'embête de passer encore moult temps sur de la doc et que je veux arriver à un résultat rapidement. Alors, changement de technique, et tutos openweathermap.
Je comprends mieux le côté Asynchrone maintenant que je vois comment marche le fetch...
Premières requêtes effectuées. J'arrive maintenant à obtenir la température de la ville sélectionnée dans la console. Reste à savoir comment je la passe en variable et le tour est joué.
JSON = **JavaScript Object Notation**. C'est noté.
Je me casse les dents à essayer de convertir le résultat d'une requête json en javascript. Et toute la doc que je trouve concerne le passage de javascript *vers* Json. C'est frustrant, mais peut-être que je prends le problème dans le mauvais sens? Si je définis une variable js, en utilisant JSON.parse, .... ?
Je deviens chèvre. Mon essai de json parse, suivant **à la lettre** la doc mdn me renvoie "SyntaxError: JSON.parse: unexpected keyword at line 1".
Comment j'en suis arrivé à m'embourber dans une connerie de la doc qui ne traite même pas le problème auquel je fais face depuis 2h+ ? J'ai l'impression de perdre mon temps. Et plus je passe de temps à essayer de comprendre et moins j'ai l'impression d'aller dans la bonne direction. Et plus je trouve que je perds mon temps. Tout ça pour qu'on me dise qu'en fait c'est tout simple et que je suis à deux doigts de faire ce que je veux depuis le début. C'est très irritant.
Le problème que j'ai mentionné juste avant vient du fait que dans la déclaration :
const json = '{"result":true, "count":42, "test":35}';
je mettais des strings à la place de nombres. SAUF QUE la doc précisait "... analyse une chaîne de caractères...". 
Je vais pas m'énerver, promis. Je viens juste de perdre trois quarts d'heure à cause d'une tournure de phrase que  j'aurais mal compris.
`•̀益•́´
Je vais pas tout casser. Ou tout du moins je vais essayer.
...
La solution m'est enfin apparue, c'est tout simple en fait ! Nan je déconne, j'ai bien été aidé sur un bout de logique qui permettait de lier les deux ensembles : infos de l'API et Js.

11/2/2020
Jour 7

 - Mise à jour des logiciels
 - Réalisation de la fonctionnalité °C/°F
 - Améliorations d'ergonomie
 - Poursuite de l'intégration des informations
 - Retour dans la doc

Petite mise à niveau de la VM et apt-get update pour rester à jour et lancer la journée.
J'ai bien envie de m'atteler à la conversion Celsius/Farenheit. Je vais faire ça pour me défroisser les neurones, et après je me relance dans l'AJAX.
Peut-être.
Oui.
Et voilà, vite et bien fait, le plugin affiche maintenant la température en °C ou °F selon le bouton sur lequel on clique. C'est bien le Js, hein ? Oui, mais c'est fini pour aujourd'hui, on va recommencer à se triturer le cerveau ⊙.☉
Prochaine (grosse) étape : la création des pages d'ajout et de suppression de villes favorites. Ce qui sous entend de gérer les cookies, ou de faire des sessions avec login. Dans tous les cas c'est une nouvelle montagne qui me fait face :c
Il va falloir que je me pose les bonnes questions si je veux des réponses constructives.
https://www.youtube.com/watch?v=GihQAC1I39Q
Pour savoir quoi utiliser, ça me semble pas mal.
Après recherches, je me focalise sur l'injection de données dans un cookie pour commencer. Je vais essayer de faire rentrer toutes les infos relatives à ce que renvoie l'API dans un cookie au clic d'un des boutons de mon interface.
Et c'est un (demi) succès, voilà ce que ça renvoie : Strasbourg :"7.6%B0C=scattered%20clouds"
On verra demain pour le formattage :)


12/2/2020
Jour 8

 - À la poursuite du cookie mystérieux
 - Les ingrédients d'un bon cookie 
 - d

Reprise de la création d'un cookie au clic, et tentatives d'adaptation au contexte. La doc diffère de mon projet parce qu'elle définit une date d'expiration dudit cookie en dur et je vais avoir besoin de changer ça...
let  today = new  Date();
const  date = new  Date(today);
date.setDate(date.getDate() + 5);
Et voilà, j'ai la date de dans 5 jours. C'est beau Js quand même.
Maintenant il faut que j'intègre ça au cookie.
Hm, le cookie garde l'expiration à la session malgré le "expires=" + date, sachant que date est définie comme j+5
En fait "expires=" doit s'écrire ";expires=", sinon ça ne marche pas et la date d'expiration est set par défaut sur Session. ¯_(ツ)_/¯
L'inconvénient de travailler sur les cookies, c'est que ça donne faim.
Le cookie est créé. Les ingrédients ; nom de la ville, température, temps prévu, sont biologiques et garantis sans gluten et cuits au feu de bois selon la tradition. Le problème, c'est qu'une fois le cookie cuit, comment faire pour récupérer les ingrédients séparément ? Stocker chaque ingrédient dans une variable propre pour y accéder ailleurs ? Testons.
![Gemoji image for :cookie](https://emoji.fileformat.info/gemoji/cookie.png)![Gemoji image for :cookie](https://emoji.fileformat.info/gemoji/cookie.png)![Gemoji image for :cookie](https://emoji.fileformat.info/gemoji/cookie.png)![Gemoji image for :cookie](https://emoji.fileformat.info/gemoji/cookie.png)![Gemoji image for :cookie](https://emoji.fileformat.info/gemoji/cookie.png)![Gemoji image for :cookie](https://emoji.fileformat.info/gemoji/cookie.png)![Gemoji image for :cookie](https://emoji.fileformat.info/gemoji/cookie.png)![Gemoji image for :cookie](https://emoji.fileformat.info/gemoji/cookie.png)Je rencontre le souci suivant, il va falloir gérer la création et la lecture de cookies selon la ville sélectionnée. Donc autant que je fasse le carousel qui display les différents presets de l'user, et je verrai ça après.

Yaaaaay on a dépassé les 10 000 caractères
La fin de la journée s'est faite sur une introduction à symphony via un document explicatif sur le Modèle Conceptuel de Données.


Jour 9
13/2/2020

 - Tentatives de suppression du cookie
 - Finalisation du carousel

Bon, pour commencer la journée, on a été laissé en autonomie, et l'ambiance est, pour le moins ... décontractée. Oui.
Après un rapide coup d'oeil au plugin, je décide de faire deux choses ce matin, avant midi dans l'idéal. Il s'agit de supprimer le cookie créé la veille au clic du bouton -, et de faire le carousel qui va afficher les différentes villes.
Et j'ai enfin un visuel qui s'approche de quelque chose de responsive. Win!
Bon point : J'ai deux slides. Dont une qui a les résultats simulés en dur, mais tout de même.
Mauvais point : Il semblerait que ça crée un conflit qui empêche la fonction qui change l'affichage des degrés de °C à °F et inversement de fonctionner Oo .
Woops.
Après réflexion je me suis rendu compte que j'ai stocké la température et le temps dans le cookie. Ce qui n'a aucun intérêt : il faut sauvegarder la ville et éventuellement l'IP de l'user !
Ce que je peux être distrait...
Allez, on repasse sur l'étude du MCD.
À demain :p


Jour 10
14/2/2020

 - Rectification des bugs créés par le carousel
 - Implémentation de l'ajout de villes

Salut, ça biche?
Au programme ce matin, résolution de bugs. On verra ensuite pour l'implémentation du reste des fonctionnalités.
Maintenant que je peux à nouveau transformer les °F en°C, je vais décomposer les étapes qui vont me mener à pouvoir interroger l'API sur des villes différentes.
1) Créer un formulaire au clic du bouton + du plugin.
2) Interroger l'API à propos de la ville en question
3) Stocker les villes dans un array, et injecter ces données à un cookie
4) Créer une slide pour chaque ville en appelant les données du cookie
5) Voir pour les prévisions sur plusieurs jours.... Plus tard. Peut être.
Étape 1 passée avec succès. Maintenant je dois savoir comment stocker la valeur de l'input et comment l'utiliser pour l'insérer dans un fetch. Et de façon pas trop dégueulasse si possible, tant qu'à faire !
formData, en Js, me paraît être une solution viable. À voir maintenant si je peux intégrer ça correctement au projet.


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTAxMzcxNTAwNF19
-->