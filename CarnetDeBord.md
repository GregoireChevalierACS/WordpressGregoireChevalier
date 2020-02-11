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
Mais au moins j'ai des jolis schémas. Je vais donc mettre tous mes doute sous le tapis (de souris) et ça ne sera un problème que demain matin.

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
 - Poursuite de l'intégration des informations




<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcxODk2ODQ2NywxOTY1NzkzMDE2LC0xMj
k3Njc0NDQ0XX0=
-->