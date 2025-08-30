---
title: "Use Case"
date: 2022-12-26T22:12:11+01:00

draft: false
---
<style>
/* Nouveaux styles pour tableaux compacts */
.reveal .compact-table {
  font-size: 0.65em !important;
  line-height: .5;
}
.reveal .compact-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 0.5em 0;
}
.reveal .compact-table td, .compact-table th {
  padding: 0.4em 0.6em !important;
  border: 1px solid #555;
  text-align: left;
  vertical-align: top;
}
.reveal .compact-table mark {
  background-color: #ff6b6b;
  padding: 0.1em 0.3em;
  border-radius: 3px;
  font-weight: bold;
}
/* Style pour tableau de tests encore plus compact */
.reveal .mini-table {
  font-size: 0.55em !important;
  line-height: 1.1;
}
.reveal .mini-table td, .mini-table th {
  padding: 0.3em 0.4em !important;
  font-size: 1em;
}
</style>

# Cas d'utilisation et tests fonctionnels

---

## Définir les fonctionnalités

Un logiciel doit satisfaire des besoins  
Ces besoins sont définis en amont par le maitre d’ouvrage  
Le logiciel va ainsi offrir différentes fonctionnalités associées à ces besoins  
**Un logiciel peut être vu comme une somme de fonctionnalités**

---

## Modéliser les fonctionnalités

Il est pratique de modéliser une cartographie de ces fonctionnalités  
C’est l’objectif du **diagramme des cas d’utilisation**  
Un cas d’utilisation est une fonctionnalité attendue du logiciel

---

## Un exemple : cas Lafleur

![useCaseLafleur]({{"/images/use-case/useCaseLafleur.png" | url }})

---

<section>

## Trois cas d’utilisation :

- Consulter les fleurs
- Gérer son panier
- Gérer les fleurs

---

## Deux acteurs :

- l’internaute : c’est la partie front-office
- L’administrateur : c’est la partie back-office
  </section>

---

## Quelques règles

1. Un cas d’utilisation est une <mark>petite</mark> unité fonctionnelle
2. Un cas d’utilisation satisfait un <mark>besoin</mark>
3. Un cas d’utilisation est une locution contenant un <mark>verbe</mark>
4. Un même acteur peut être acteur de plusieurs cas d’utilisation

---

## Le diagramme des cas d’utilisation fournit une vue d’ensemble et synthétique

- Chaque cas doit être détaillé
- C’est le rôle de la <mark>description textuelle</mark> du cas d’utilisation

---

<div class="reveal compact-table">

## Exemple pour un cas de Lafleur :

| **PROJET :**   Application web de e-commerce                                   | 
|--------------------------------------------------------------------------------|
| <mark>Description cas d’utilisation</mark>                                     |
| <mark>Nom cas d’utilisation :</mark>   consulter les articles (fleurs)         |
| <mark>Acteur déclencheur :</mark>   un internaute                              |
| <mark>Scénario nominal :</mark>                                                |                                                                                                                                                                                          
| 1. L'internaute demande à consulter les articles                               |
| 2. Le système retourne la liste des catégories                                 |                       
| 3. L'internaute sélectionne une catégorie                                      |               
| 4. Le système retourne la liste des articles de la catégorie choisie           |
| <mark>Scénario étendu :</mark>                                                 |
| 5. L'internaute demande à déposer un article dans son panier                   |
| 6. le système ajoute l'article au panier                                       |
| <mark>Scénario particulier :</mark>                                            | 
| 6.1 L'article figure déjà dans le panier : le système en informe l'utilisateur |

</div>

---

## La description précise du cas :

- La succession des échanges entre l’utilisateur et le système (le logiciel)
- La chronologie de ces échanges sous forme d’une numérotation séquentielle
- Le scénario normal
- Éventuellement des scénarios étendus ou alternatifs (particuliers)

---

## Les tests fonctionnels

- Ces tests évaluent si un logiciel réalise les différentes fonctionnalités attendues
- Ces tests devront utiliser les cas d’utilisations décrits pour vérifier s’ils sont réalisés
- Chaque cas d’utilisation devra faire l’objet de plusieurs tests
- Les tests fonctionnels vont vérifier si le logiciel se comporte comme le cas d’utilisation l’envisageait

---


<div class="reveal compact-table">

## Exemple pour un cas de Lafleur :

| **PROJET :**   Application web de e-commerce                                                | 
|---------------------------------------------------------------------------------------------|
| Description cas d’utilisation                                                               |
| Nom cas d’utilisation :   consulter les articles (fleurs)                                   |
| Acteur déclencheur :   un internaute                                                        |
| Scénario nominal :                                                                          |                                                                                                                                                                                          
| 1. L'internaute demande à consulter les articles                                            |
| <mark>2. Le système retourne la liste des catégories</mark>                                 |                       
| 3. L'internaute sélectionne une catégorie                                                   |               
| <mark>4. Le système retourne la liste des articles de la catégorie choisie</mark>           |
| Scénario étendu :                                                                           |
| 5. L'internaute demande à déposer un article dans son panier                                |
| <mark>6. le système ajoute l'article au panier</mark>                                       |
| Scénario particulier :                                                                      | 
| <mark>6.1 L'article figure déjà dans le panier : le système en informe l'utilisateur</mark> |

</div>

---

<div class="mini-table">
 Le plan de tests fonctionnels donne lieu à un document :

| Numéro | utilisateur                          | résultat attendu                                      | résultat obtenu |
|--------|--------------------------------------|-------------------------------------------------------|-----------------|
| 2      | consulter les fleurs des catégories	 | affichage de la liste                                 | 	OK             |
| …      | …                                    | …                                                     | …               |
| 6      | demande d’ajout au panier            | Le panier (session) contient l’identifiant du produit | 	 PAS OK        |

</div>

---

- Ces tests fonctionnels peuvent être automatisés avec des outils logiciels ou directement dans l’environnement de
  développement
- Cette automatisation a le gros avantage de pouvoir être relancé aisément si le logiciel subit des modifications ou
  intègre de nouvelles fonctionnalités.
- Ceci permet d’utiliser ces batteries de tests comme tests de non-régression.

---

# ↩️

#### [Start over]({{ "/index" | url }})                               
                                                                      

