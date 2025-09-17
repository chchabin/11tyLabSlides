---
title: "Transactions"
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
# UTILISATION DU TERME STATIC DANS LES CLASSES

---

## Avantages

---

## Performance et mémoire :

1. Les membres statiques sont chargés une seule fois en mémoire, partagés entre toutes les instances
2. Pas besoin de créer une instance pour accéder aux membres statiques
3. Économie de mémoire pour les données partagées

---

## Simplicité d'accès :

4. Accès direct via le nom de la classe : MaClasse.MaMethode()
5. Utile pour les fonctions utilitaires et les constantes globales
6. Parfait pour les méthodes qui ne dépendent pas de l'état d'une instance

---

# Garantie d'unicité

7. Les variables statiques maintiennent leur valeur pendant toute la durée de vie de l'application
8. Utile pour implémenter des singletons ou des compteurs globaux

---

## Inconvénients

---

## Limitations de la POO :

1. Impossible d'utiliser l'héritage, le polymorphisme ou l'encapsulation
2. Pas d'accès aux membres d'instance depuis les méthodes statiques
3. Difficile à mocker (créer des objets faux) pour les tests unitaires

---

## Couplage fort :

4. Crée des dépendances directes difficiles à gérer
5. Rend le code moins modulaire et plus difficile à maintenir
6. Complique l'injection de dépendances

---

## Problèmes de concurrence :

7. Les variables statiques partagées peuvent causer des problèmes de thread-safety
8. Nécessitent souvent des mécanismes de synchronisation

---

## Cycle de vie :

9. Les membres statiques restent en mémoire pendant toute la durée de l'application
10. Peuvent causer des fuites mémoire si mal utilisés
11. Difficiles à "nettoyer" ou réinitialiser

---

## Utilisation

---


## Méthodes utilitaires

<div class="size">

```csharp
public static class MathHelper
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
    public static int Subtrack(int a, int b)
    {
        return a - b;
    }

    /// etc...
}
```
</div>

---

## Modèle Singleton
<div class="size">

```csharp
public class Singleton
{
    private static Singleton _instance;

    private Singleton() { }

    public static Singleton Instance
    {
        get
        {
            if (_instance == null)
            {
                _instance = new Singleton();
            }
            return _instance;
        }
    }
}

```
</div>

---

## Constantes
<div class="size">

```csharp
public class Constants
{
   public static const string AppName = "MyApplication";
   public static int PI = 3.14;
   public static int Count { get; private set; }

    public Constants()
    {
        Count++;
    }
}

```
</div>

---

## Constructeurs statiques
Ces constructeurs initialisent les membres statiques du type. Ils sont appelés automatiquement avant tout accès aux membres statiques et ne sont exécutés qu’une seule fois.
<div class="size">

```csharp
public class Example
{
    public static int StaticField;

    static Example()
    {
        StaticField = 42;
    }
}


```
</div>

---

## Classes statiques
Ces classes ne peuvent contenir que des membres statiques. Vous ne pouvez pas créer d’instance d’une classe statique, et elle est généralement utilisée pour regrouper des méthodes utilitaires.
<div class="size">

```csharp
public static class Utility
{
    public static void HelperMethod()
    {
       Console.WriteLine("This is a helper method.");
    }
}


```
</div>


---

---

---

---

---

---