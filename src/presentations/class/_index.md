---
title: "Class"
date: 2023-01-08T10:14:34+01:00

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

# Révision sur les classes

---

## La dette technique
![dettetech](/images/class/dettetech.png)

---

<section>

Un projet de développement logiciel inclut souvent une conception logicielle, formalisée ou non.
L’écriture du code, si elle suit les bonnes pratiques, assure la cohérence du projet et facilite sa maintenance :
- <mark>corrective</mark> : corriger les bugs informatiques,
- <mark>évolutive</mark> : ajouter de nouvelles fonctionnalités au logiciel.  

---

⚠️La dette technique⚠️ survient quand les bonnes pratiques n'ont pas été respectées lors de l'écriture du code de votre solution.  
Dans ce cas, une conception logicielle négligée va induire des coûts futurs à rembourser
sous forme :
- de temps de développement supplémentaire, 
- des bugs de plus en plus fréquents.

---

## DRY “don’t repeat yourself”
Ce principe est d’éviter au maximum les répétitions d’informations dans un programme. 
Chaque élément de connaissance ou de logique d’un programme doit avoir une représentation unique et non ambiguë.

---

L’erreur associée est le ⚠️**WET**⚠️ (We enjoy typing ou Wasting everyone’s time) qui consiste à réécrire plusieurs fois les mêmes bouts de code à différents endroits, ce qui implique que la maintenance en sera compliquée, car redondante.


---

## KISS : Keep it simple, stupid
Ce principe est de garder un code lisible, simple et clair, facile à comprendre.  
Un indicateur est d’avoir des fonctions qui ne dépassent pas 50 lignes (hors commentaires).
</section>

---
<section>

## Les objets

Objet : des informations & des actions

💾 📱 🔧 🪕 🥾 🍩 👔 👖 👗 👕

---

## Exemple : 
Modélisons l’ensemble des produits en stock, nous aurions :

| 🛈 **Informations** 🛈 | 🎬 **Actions** 🎬  |
|------------------------|--------------------|
| Libellé, prix, stock   | Ajouter, supprimer |

---

## DÉFINITION : un objet
Il se compose d'informations et d'actions. Les actions utilisent (et parfois modifient) les informations de l'objet.
-	L'ensemble des informations d'un objet donné est appelé son ➡️ état ⬅️.
-	L'ensemble des actions applicables à un objet représente son ➡️ comportement ⬅️.  
     </section>

---

Pour créer des objets ayant le même 👍patron👍, je crée une classe. Tous les objets seront créés à partir de cette classe.

![patrons](/images/class/patron.png)

---

## DÉFINITION : une classe
C'est un ➡️ modèle d'objet ⬅️.  
C'est un nouveau type créé par le programmeur et qui sert de modèle pour tous les objets de cette classe. 
Une classe spécifie les informations et les actions qu'auront en commun tous les objets qui en sont issus.

---

|  Voici la représentation réalisée par Visual Studio  | Voici la même classe représentée sous la forme d'un diagramme conforme au standard UML. |
|:----------------------------------------------------:|:---------------------------------------------------------------------------------------:|
|   ![classVs](/images/class/classVs.png)   |                     ![](/images/class/classUml.png)                     |

---

## DÉFINITION : Les attributs
Ils sont les variables de la classe, sauf s’ils sont publics, les attributs ne sont pas visibles depuis une autre classe (étrangère).

---

## DÉFINITION : L’encapsulation 
Elle consiste à cacher le fonctionnement interne d’un composant pour ne laisser apparaitre que les éléments utiles à l’utilisateur.

---

## DÉFINITION : Les méthodes 
Elles sont les fonctions ou procédures de la classe. Elles aussi peuvent être publiques ou privées.

---

## DÉFINITION : Instancier
Une classe permet de définir un nouveau type, construire des objets (instancier). On parle alors de services ou de variables d’instances.  
La création d’un objet, ou instanciation, est réalisé avec l’opérateur ➡️ new ⬅️ qui retourne une référence vers le nouvel objet créé.

---

Ne pas confondre ⚠️ instanciation et initialisation ⚠️
-	Instancier, c’est, créer un nouvel objet (opérateur <mark>new</mark>)
-	Initialiser, c’est, donner une valeur initiale à quelque chose (opérateur <mark>=</mark>)

---

## DÉFINITION : Constructeurs
Chaque classe contient un ou plusieurs constructeurs.  
Cette fonction particulière est appelée lors de la création d’un objet par l’opérateur <mark>new</mark>.  
Le but du constructeur est d’initialiser les champs d’instances de l’objet.  
Un constructeur est déclaré comme une méthode sans type de retour et dont le nom est identique à celui de la classe.

---

## DÉFINITION : Autoréférence
À l’intérieur d’une méthode, le mot-clé <mark>this</mark> permet d’accéder à l’instance (l’objet) sur lequel la méthode est appelée.

---

## DÉFINITION : L’accès aux membres d’instances
L’accès aux membres d’instances, champs et méthodes, se fait à travers l’utilisation d’une référence sur l’objet concerné et de l’opérateur d’accès point (dot).

---

## DÉFINITION : Un accesseur 
C'est une méthode le plus souvent publique qui permet d’accéder à un attribut privé, en lecture. 
En anglais, ils commencent par le mot clé <mark>get</mark>.

---

## DÉFINITION : Un mutateur 
C'est une méthode le plus souvent publique qui permet d’accéder à un attribut privé, en écriture. 
En anglais, ils commencent par le mot clé <mark>set</mark>.

---

## DÉFINITION : le polymorphisme 
Il concerne des membres qui peuvent avoir différentes formes (implémentations) en fonction de la classe dans laquelle elle se situe.

---

## DÉFINITION : Override
Le modificateur override est nécessaire pour étendre ou modifier l’implémentation d’une méthode.

---

# ↩️

#### [Start over](/index)