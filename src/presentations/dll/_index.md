---
title: "Dll"
date: 2022-12-27T22:02:14+01:00

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
</style>

# Création d'une DLL avec Visual Studio

---

Nous allons voir comment créer une dll contenant une ou plusieurs classes.  
Nous utiliserons la classe EnsembleCaracteres comme support. 


---

# Création de la DLL

---

## Création du projet
Créons un nouveau projet VS de type <mark>bibliothèque de classes (.Net Framework)</mark> que nous nommerons `libEnsCar`  :  
![bibClass]({{"/images/dll/bibClass.png" | url }})

---

Le code commence par :  
![dllCode]({{"/images/dll/dllCode.png" | url }})

---

## Ajout de documentation
La documentation est utile pour l’utilisateur des classes ; ajoutons une documentation.
Pour cela, au-dessus de la méthode (ou de la classe) à documenter, ajoutons 3 slashs, l’environnement VS va insérer 
automatiquement des balises de documentation, au-dessus du constructeur.  
Dans la balise summary, écrivons la documentation :
![dllComment]({{"/images/dll/dllComment.png" | url }})
Cette documentation apparaîtra dans l’IntelliSense quand l’utilisateur de la classe appellera le constructeur.

---

## Création de la documentation XML
Pour utiliser cette documentation, il faut générer le fichier XML associé.  
Pour cela, aller dans le menu Projet → Propriétés de libEnsCar ; la page suivante s’ouvre :
![xml]({{"/images/dll/xml.png" | url }})

---

Cocher la case « Fichier de documentation XML» :  
![xml02]({{"/images/dll/xml02.png" | url }}) 
<mark>Compiler l’application.</mark>

---

Avec l’explorateur dans le répertoire de votre projet, vous trouverez la dll et le fichier XML de documentation :  
![bin]({{"/images/dll/bin.png" | url }})

---

Vous pouvez ouvrir le fichier XML et observer vos commentaires. Vous pouvez même les modifier directement dans le fichier XML.  
Ce sont les deux fichiers qu’il faudra copier dans le projet qui utilisera votre bibliothèque.


---

# Utilisation de la dll

---

La DLL peut être utilisée indifféremment dans un projet Console ou WinForms.  
La création du nouveau projet peut se faire soit :
- en créant une nouvelle solution,
- en ajoutant un projet dans la solution existante.

---

## Ajouter un projet dans une solution existante
1. Sélectionner le projet  
   ![nouveauProjet]({{"/images/dll/nouveauProjet.png" | url }})
2. faire un clic droit => Ajouter => Nouveau Projet
3. Choisir le type de projet (Console ou WinForms) puis valider

---

4. Faire un clic droit sur le projet  
![projetDemar01]({{"/images/dll/projetDemar01.png" | url }})  
5. Choisir "définir en tant que projet de démarrage "
![projetDemar]({{"/images/dll/projetDemar.png" | url }})

---

6. Affichez les dépendances du projet.  
7. Faire un clic droit → "ajouter une référence au projet"  
![referencePlus]({{"/images/dll/referencePlus.png" | url }})  
8. Choisissez la DLL EnsCar   
![referencePlus02]({{"/images/dll/referencePlus02.png" | url }})

---

9. Il ne reste plus qu’à indiquer dans votre code, grâce à la clause <mark>using</mark>, la bibliothèque :  
![usingLib]({{"/images/dll/usingLib.png" | url }})  
<mark>Attention</mark> : la bibliothèque à indiquer dans la clause using est le nom du namespace de la dll ! Dans notre cas la dll et le nom du namespace sont les mêmes.

---

## Ajouter un projet en créant une nouvelle solution
1. Dans le répertoire de la solution ajouter les deux fichiers dll et xml.  
!ajout01[]({{"/images/dll/ajout01.png" | url }})

---

2. Dans l’explorateur de solution déplier les références :  
   ![ajout02]({{"/images/dll/ajout02.png" | url }})
3. Faire un clic droit → "ajouter une référence au projet"
4. Suivre les cas 8 et 9 précédents.

---

# ↩️

#### [Start over]({{ "/index" | url }})