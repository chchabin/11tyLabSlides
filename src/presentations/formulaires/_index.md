---
title: "Formulaires"
date: 2022-12-28T00:23:56+01:00

draft: false
---
<style>
  .reveal p {
    text-align: left;
  }
  .reveal ul {
    display: block;
  }
  .reveal ol {
    display: block;
  }
  .size {
  font-size: 28px;
  }
</style>

# GESTION DE LA PERSISTANCE DES DONNEES

---

<section>

## Le formulaire

---

## Structure de l'entête

```html
<form name="form"    action="resultat.php"     method="POST">
    …
    …zones de texte, cases à cocher, boutons d’option…
    …
</form>
```
Dans la balise d’ouverture du formulaire, on précise :

1. Quelle est l’action du formulaire (Ici, les données seront envoyées vers la page <mark>resultat.php</mark>)
2. Quelle méthode d’envoi des données est utilisée (Ici, les données seront envoyées avec la méthode <mark>POST<mark>)

---

## De la saisie à la récupération

La saisie dans le formulaire (exemple pour le nom)

<img src="/images/php/textbox.png" alt="include" >

```html
<label for="nom">Nom:</label>
<input type="text" size="20"   name="nom1"   id="nom" value="">
```

Grâce à l’attribut <mark>name</mark>, la valeur saisie sera stockée dans <mark>nom1</mark>.

* nom1 va donc contenir <mark>Dugrumeau</mark>

---

## La récupération

```php
<?PHP
    $nom=$_POST["nom1"];
    echo $nom;
?>
```
- <mark>$nom</mark> : Le nom de la variable PHP servant à récupérer le nom peut être différent,
- <mark>nom1</mark> : On reprend forcément le nom utilisé dans le formulaire,
- <mark>echo $nom</mark> : On affiche la variable.

</section>

---

## PASSAGE DE VARIABLES PAR LES OBJETS D'UN FORMULAIRE.
Il existe deux méthodes liées au formulaire:  
- <mark>GET</mark> : les paramètres sont passés et visibles dans l'URL
- <mark>POST</mark> : les paramètres sont passés en complément et non visibles dans l'URL.

Une méthode est plus générale :
- <mark>SESSION</mark> : elle conserve les données pendant une session.

---

## RECUPERATION DES VARIABLES 
Pour accéder aux paramètres passés par la méthode <mark>GET</mark>, on appelle le tableau <mark>$_GET[]</mark>, 

pour la méthode <mark>POST</mark>, on appelle le tableau <mark>$_POST[]</mark> et en accédant à la valeur ayant pour clé 
le nom du paramètre (spécifié dans l'attribut <mark>name</mark>).

Vous pouvez aussi utiliser le tableau <mark>$_REQUEST[]</mark> qui récupère les données qui viennent de GET ou POST.

---

<section>

## METHODE POST

---

Formulaire 1
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <title>FORMULAIRE</title>
</head>
<body>
    <p>Veuillez vous identifier</p>
    <form name=formulaire1 method="POST" action="formulaire_02.php">
        <label for="nom"> Nom :</label>
        <input type="text" id="nom" name="nom" />
        <label for="prenom"> Prénom :</label>
        <input type="text" id="prenom" name="prenom" />
        <input type="submit" value="OK" />
    </form>
</body>
</html>
```
---

## FORMULAIRE SUIVANT 
- On récupère les valeurs des variables 
- On les transmet au formulaire suivant par l'url

```php 
        <?php
         $nom= $_POST['nom'] ;
         $prenom= $_POST['prenom'] ;
        ?>
```
```html        
        <p>Veuillez vous identifier</p>
        <form name=formulaire2 method="POST" 
              action="recup.php?nom=<?= $nom?>&prenom=<?= $prenom?>">
            <label for="age"> Age :</label>
            <input type="text" id="age" name="age" />
            <input type="submit" value="OK" />
        </form>
```
---

##  FORMULAIRE RECUP
```php
<?php
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$age = $_POST['age'];;
?>
```
ou

```php
<?php
$nom = $_REQUEST['nom'];
$prenom = $_REQUEST['prenom'];
$age = $_REQUEST['age'];
?>
```
```html
<p>Bonjour, <?= "$prenom $nom" ?>.</p>
<p>Tu as <?= $age?> ans.</p>
```

</section>

---

<section>

## METHODE GET

---

Formulaire 1
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <title>FORMULAIRE</title>
</head>
<body>
    <p>Veuillez vous identifier</p>
    <form name=formulaire1 method="GET" action="formulaire_02.php">
        <label for="nom"> Nom :</label>
        <input type="text" id="nom" name="nom" />
        <label for="prenom"> Prénom :</label>
        <input type="text" id="prenom" name="prenom" />
        <input type="submit" value="OK" />
    </form>
</body>
</html>
```
---

## FORMULAIRE SUIVANT
Pour ne pas perdre les valeurs des variables :
- On récupère les valeurs des variables 
- On les transmet au formulaire par la methode CHAMP CACHÉ (type="hidden")

Celui-ci ne sera pas visible par l'utilisateur et sera récupéré par son nom et contiendra sa valeur.

---


```php
        <?php
         $nom= $_GET['nom'] ;
         $prenom= $_GET['prenom'] ;
        ?>
```
```html
        <form name=formulaire2 method="GET" action="recup.php">
            <input type="hidden" name="nom" value ="<?= $nom?>">
            <input type="hidden" name="prenom" value ="<?= $prenom?>">

            <label for="age"> Age :</label>
            <input type="text" id="age" name="age" />
            <input type="submit" value="OK" />
        </form>
```
---

##  FORMULAIRE RECUP
```php
<?php
$nom = $_GET['nom'];
$prenom = $_GET['prenom'];
$age = $_GET['age'];
?>
```
ou

```php
<?php
$nom = $_REQUEST['nom'];
$prenom = $_REQUEST['prenom'];
$age = $_REQUEST['age'];
?>
```
```html
<p>Bonjour, <?= "$prenom $nom" ?>.</p>
<p>Tu as <?= $age?> ans.</p>
```
</section>

---

<section>

## LES SESSIONS

---

Formulaire 1
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <title>FORMULAIRE</title>
</head>
<body>
    <p>Veuillez vous identifier</p>
    <form name=formulaire1 method="POST" action="formulaire_02.php">
        <label for="nom"> Nom :</label>
        <input type="text" id="nom" name="nom" />
        <label for="prenom"> Prénom :</label>
        <input type="text" id="prenom" name="prenom" />
        <input type="submit" value="OK" />
    </form>
</body>
</html>
```

---

Elles sont utilisées pour conserver des informations pendant toute la connexion d'un utilisateur, par exemple l'identité 
ou un code d'accès à certaines pages ou encore le contenu d'un panier.

La déclaration des sessions <mark>session_start()</mark> doit se faire avant tout code HTML

---



## Création des sessions
Chaque visiteur se voit attribué un identifiant de session, un fichier est créé sur le serveur par défaut dans le 
répertoire tmp d'Apache - ayant comme nom cet identifiant. Il sera possible par la suite de "suivre" le visiteur et de 
déclarer des variables persistantes de type session. PHP utilise deux techniques pour "propager" cet identifiant chez le 
visiteur : un cookie ou un passage transparent dans l'URL.
```php
<?php
   session_start();
   $_SESSION["nom"]="toto";
```
---

Formulaire 2
```php
<?php
session_start();
$_SESSION['nom'] = $_POST['nom'];
$_SESSION['prenom'] = $_POST['prenom'];
?>
```
```html
<form method="POST" action="passageRecupSession.php">
    <label for="age"> Age :</label>
    <input type="text" id="age" name="age"/>

    <input type="submit" value="Valider">
    <input type="submit" value="Annuler">

</form>
```

---

##  FORMULAIRE RECUP
```php
<?php
session_start();
$nom = $_SESSION['nom'];
$prenom = $_SESSION['prenom'];
$age = $_REQUEST['age'];
?>
```
```html
<p>Bonjour, <?= "$prenom $nom" ?>.</p>
<p>Tu as <?= $age?> ans.</p>
```
---

Pour supprimer une variable de type session, on utilise la fonction  
<mark>session_unregister</mark>  
qui retourne vrai en cas de succès

Pour détruire une session en fin de ...session :
<mark>session_destroy</mark>

---

## Utilisation d’un tableau
Exemple de la gestion d’un panier d'achat :
```php
<?php
session_start();
$_SESSION["mesProduits[0]"]="ballon";
$_SESSION["mesProduits[1]"]="boule";
```
Et dans la page suivante :
```php
<?
session_start();
echo $_SESSION["mesProduits[1]"];
```

---

Il est préférable de tester l'existence d'une variable session avant sa déclaration :
```php
if( ! isset( $_SESSION["nom"] )
    session_register("nom");

```




</section>

---

# ↩️

#### [Start over]({{ "/index" | url }})