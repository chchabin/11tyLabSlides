---
title: "Test Unitaire"
date: 2022-12-10T19:27:43+01:00

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
  .font12{
    font-size: x-large;
    }
  .fontLarge{
    font-size: xx-large;
    }
</style>
# Les tests dans le développement

---

## Pourquoi tester un programme ?

- Un programme est une ou une amélioration d’un produit
- Comme tout nouveau produit, il doit être testé
- Limiter la dette technique, 40 à 50% du coût total d’un développement est consacré à la correction : des exigences, de la conception, des bugs

---

## Le test - définition  

Un test est une <mark>activité</mark> qui évalue les qualités d’un système ou d’un composant d’un système.  
Les qualités évaluées lors d’un test doivent être clairement définies (conditions préalables, résultats attendus).

---

## Le test
Un test est composé :
- D’un ensemble (ou scénario) de cas de test
- De plusieurs procédures de test

---

## Les cas de test

C’est la plus petite unité du test ; un cas précise les conditions d’exécution et le résultat attendu,  
Exemple :  
Un cas de test d’un test de charge d’une page d’un site web va se faire en simulant 1000 accès simultanés sur cette page : le résultat attendu portera sur le temps d’accès en ms. Un autre cas de test portera sur 2000 accès simultanés.

---

## Procédure de test

- La procédure de test (pour un cas de test) doit fournir toutes les explications sur les conditions de réalisation du cas
- Ainsi une procédure peut (par exemple) être automatisée ou lancée par un script
- En effet l’échec d’un cas de test peut provenir du programme ou de la procédure elle-même

---

## Cas de test et procédures

<div class="mermaid">
flowchart TD
    A[Test] --> B[Cas de Test 1]   
    A[Test] --> C[Cas de Test n]
    B[Cas de Test 1] --> D[Procédure de Test 1]
    B[Cas de Test 1] --> E[Procédure de Test j]
    C[Cas de Test n] --> F[Procédure de Test 1]
    C[Cas de Test n] --> G[Procédure de Test x]
</div>

---

## Typologie des tests
- <mark>Test de charge</mark> : analyse du comportement en fonction de la charge (nombre d’utilisateurs)
- <mark>Test de performance</mark> : identifier les éventuels goulots d’étranglement (surcharge d’un composant logiciel ou matériel) ; par exemple le temps de réponse d’une requête SQL mal formée
- <mark>Test unitaire</mark> : teste une petite unité (classe ou méthode)
- <mark>Test fonctionnel</mark> : teste un cas d’utilisation ; par exemple une prise de commande

---

## Typologie des tests (suite)
- <mark>Test de non-régression</mark> : teste si l’ajout d’une nouvelle fonctionnalité (ou classe ou méthode) ne remet pas en cause l’intégrité du code de la version précédente
- <mark>Test d’intégration</mark> : teste la bonne interaction des modules
- <mark>Test de système</mark> : effectué sur le système entier dans une configuration d’exploitation
- <mark>Test de sécurité</mark>
  …

---

## Qui réalise les tests ?

Ce sont des testeurs qui doivent posséder plusieurs compétences :
- Connaître différentes procédures de test
- Connaître différents logiciels de test
- Programmer pour automatiser les tests
- Rendre compte efficacement des procédures et résultats des tests

---

## Quand définir les tests ?
La définition des tests est parallèle à la réalisation du projet.  
Par exemple lorsque l’on définit un cas d’utilisation, on définit les tests à réaliser :
![test01](/images/test-unitaire/test01.png)


---

## Quand réaliser les tests ?
- Pratique traditionnelle : après le codage
- Pratique actuelle : avant le codage

---

## Méthode TDD : 
### Développement piloté par les tests

- L’écriture des tests (utilisant une classe de test) est écrite au préalable
- Les tests ne vont pas passer puisque le code à tester n’est pas écrit !!!
- On écrit le code qui doit permettre de passer les tests
- On recommence en ajoutant de nouveaux tests
- Etc..

---

<div class="font12">

![RED-GREEN-REFACTO cycle](/images/test-unitaire/RED-GREEN-REFACTO-cycle.png)
<mark> RED</mark> : On commence par écrire un test et on vérifie que ce dernier échoue (car le code n’est pas implémenté). Ce test spécifie le comportement d’une méthode (ce qu’elle doit renvoyer, ce qu’elle doit appeler, …).  
<mark>GREEN</mark> : On écrit le code minimum pour que le test passe au vert.  
<mark>REFACTOR</mark> : On améliore le code sans changer son comportement.

</div>

---

Dans le livre Clean Code (p.80), Oncle Bob définit les 3 lois du TDD :

1. Vous n’êtes pas autorisé à écrire du code métier tant que vous n’avez pas écrit un premier test unitaire qui échoue.
2. Vous n’êtes pas autorisé à écrire plus qu’un test unitaire qui est suffisant pour échouer et qui ne compile pas.
3. Vous n’êtes pas autorisé à écrire plus de code que ce qui est suffisant pour passer au vert le test unitaire

---

Oncle Bob, insiste sur le fait, qu’écrire des tests unitaires ou pratiquer le TDD n’est pas magique, et qu’on peut très 
bien continuer d’écrire du mauvais code et d’écrire des mauvais tests. 

Il précise également que suivre les trois lois 
n’est pas toujours approprié, il faut donc trouver des solutions adaptées à notre projet.

---

## Les logiciels de test

Ces logiciels sont plutôt orientés tests unitaires  
- JUnit dans le mode Java, 
- NUnit pour Dotnet, 
- PhpUnit pour PHP,
- cucumber pour Javascript.

Des environnements plus lourds peuvent faire des tests de performance ou de charge.  

---

# ↩️

#### [Start over](/index)