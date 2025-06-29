---
title: "TestU Vs"
date: 2022-12-11T09:11:59+01:00

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

# Les tests avec Visual studio 2019

---

## Création d'un projet de test
Ajoutez un projet de test unitaire
![test Unitaire](/images/test-unitaire/testUnitaire01.png)


---

## Ajouter une référence au projet
Dans ce nouveau projet
![référence test Unitaire](/images/test-unitaire/testUnitaire02.png)


---

## Créez une class de test  
   En haut du fichier, ajoutez l'instruction <mark>using</mark> avec le nom de la référence du projet, par exemple  
   <mark>using Banque;</mark> ou autre :  
   ![dll09](/images/test-unitaire/dll09.png)

---

## Les attributs
Pour identifier les tests il est nécessaire de déclarer des attributs, comme `[TestClass()]` ou `[TestMethod]`, pour la classe et pour la méthode. 
La déclaration minimale est :  
![testUnitaire06](/images/test-unitaire/testUnitaire06.png)

---

Il en existe d'autre comme : `TestInitialize`  et  `TestCleanup` (source Openclassroom)
<div class="size">

```csharp
[TestClass]
public class UnitTest1
{
    [TestInitialize]
    public void InitialisationDesTests()
    {
        // ajouter les initialisations
    }

    [TestMethod]
    public void MonTest()
    {
        // test à faire
    }

    [TestCleanup]
    public void NettoyageDesTests()
    {
        // nettoyer les variables, ...
    }
}
```
</div>

---

## Cycle de vie d’un test
En général, un test se décompose en trois parties, suivant le schéma « AAA », qui correspond aux mots anglais « Arrange, Act, Assert », que l’on peut traduire en français par « Arranger, Agir, Auditer ».

---

- Arranger : il s’agit dans un premier temps de définir les objets, les variables nécessaires au bon fonctionnement de son test (initialiser les variables, initialiser les objets à passer en paramètres de la méthode à tester, etc.).

- Agir : ensuite, il s’agit d’exécuter l’action que l’on souhaite tester (en général, exécuter la méthode que l’on veut tester, etc.)

- Auditer : et enfin de vérifier que le résultat obtenu est conforme à nos attentes.

---

## Les assertions
Pour vérifier que le test s’est bien comporté, on va en général comparer les résultats des méthodes ou objets aux valeurs que l’on est censé obtenir.

Telle propriété est égale à telle valeur, tel booléen doit être vrai, etc.

Cela se fait avec la classe Assert.

---

<mark>Assert.Fail()</mark> , comme son nom l’indique, va faire échouer le test explicitement.  
<mark>AreEqual()</mark> va permettre de vérifier que les deux paramètres sont identiques.

Dans la pratique, on se sert beaucoup de <mark>Assert.AreEqual</mark>, ou <mark>Assert.IsTrue</mark>, ou <mark>Assert.IsFalse</mark>, ou <mark>AreNotEqual</mark>

---

## Coder la méthode
   Ajoutez le code de votre méthode, par exemple :
<div class="size">

```csharp
        public void Debit_montant_nonValide()
        {
            // Arranger
                //Valeur attendue à la fin du test
            double attendu = 11.99; 
                // Valeurs prises en compte pour éxécuter la méthode
            double solde = 11.99;
            double debit = 144.55;
            double decouvertAut = -100;
            Compte c1 = new Compte(123, "Mr. Bryan Walton", solde, decouvertAut);

            // Agir
            c1.debiter(debit);

            // Auditer
                // Résultat rendu par la méthode
            double actuel = c1.getSolde();
                // Résultat à comparer au résultat attendu
            Assert.AreEqual(attendu, actuel, 0.001, "Account not debited correctly");
        }
```
</div>

--- 

## Ajout d'un nouveau test :
1. faire un click droit sur le projet de test unitaire et <mark>Ajouter</mark>
2. choisir <mark>Test unitaire</mark>
   ![ajouter test Unitaire](/images/test-unitaire/testUnitaire03.png)   


--- 

## Execution des tests
Faire un click droit sur le projet et <mark>Exécuter les tests</mark>
![testUnitaire04](/images/test-unitaire/testUnitaire04.png)


--- 

## Résultat du Test
Le résultat apparait sous forme de tableau
![testUnitaire05](/images/test-unitaire/testUnitaire05.png)


---

# ↩️

#### [Start over](/index)