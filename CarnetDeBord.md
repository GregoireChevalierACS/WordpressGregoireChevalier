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

Petit passage par le php orienté objet pour commencer, je n'en aurai pas l'utilité dans l'immédiat mais je sens que ça va me servir pour plus tard.
CA Y EST j'ai enfin trouvé la vidéo qui va me permettre d'intégrer mon Js à Wordpress, à priori ça utilise du enqueue ... On verra bien.
Maintenant que c'est fait, je vais pouvoir attaquer un autre gros morceau, l'intégration d'Ajax et la gestion d'API. La légende raconte que c'est facile avec jQuery, mais vu que c'est sur le déclin, je pense pas utiliser ça mais plutôt Js vanilla. On verra bien, je vais juste me renseigner sur la méthode jQuery, on sait jamais ( ͡° ͜ʖ ͡°).
Une source fiable *(tousse)* Aranxa *(tousse)* m'a mis au courant que l'Ajax se gérait depuis le Js. Je sens que ça vient de m'éviter de me perdre longuement. Le premier contact avec Ajax va probablement mieux se passer que prévu.
J'apprends aussi qu’Ajax est l’acronyme de « Asynchronous Javascript And Xml ». Ca m'évitera *peut-être* de faire des blagues ... décapantes.
J'ai trouvé un site qui met en vis-à-vis les lignes de code en jQuery et en Js vanilla sur le site au doux nom de : https://putaindecode.io/articles/de-jquery-a-vanillajs/#ajax . Les codeurs sont des petits rigolo si tu veux mon avis  （°々。）
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTExMDg5MDMxNiwtNzQwNTQ3MDA2LC03ND
A1NDcwMDZdfQ==
-->