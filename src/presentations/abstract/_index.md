---
title: "Abstract"
date: 2022-12-27T22:02:14+01:00
outputs : ["Reveal"]
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
  .sizeXXX {
  font-size: xxx-large;
}
</style>

# Classes abstraites

---

Une classe abstraite est une classe dont toutes les méthodes n’ont pas été implémentées. 

Elle n’est donc pas instantiable, mais sert avant tout à factoriser du code.

---

Le mot clé <mark>abstract</mark> doit précéder la classe abstraite.
Exemple

```csharp
// Classe abstraite gérant un ensemble d'objets
public abstract class Ensemble
{
    ⋮
```

---

Les méthodes abstraites présentent les caractéristiques suivantes :

1. Une méthode abstraite est implicitement une méthode <mark>virtuelle</mark>.

2. Les déclarations de méthodes abstraites sont autorisées uniquement dans les classes abstraites.

3. Comme une déclaration de méthode abstraite ne fournit <mark>pas d’implémentation réelle</mark>, il n’y a pas de corps de méthode ; 
la déclaration de méthode se termine simplement par un <mark>point-virgule</mark>, et la signature n’est pas suivie d’accolades (<mark>{ }</mark>). 

---

Exemple :
```csharp
// Classe abstraite gérant un ensemble d'objets
public abstract class Ensemble
{
    // méthodes abstraites (sans implémentation) :
    public abstract bool Contient(object o);
    protected abstract void Ajouter(object o);
    protected abstract void Retirer(object o);
    ⋮
```

---

## Implementer les méthodes abstraites

L’implémentation est fournie par une méthode <mark>override</mark>, qui est membre d’une classe non abstraite.

L’utilisation des modificateurs <mark>static</mark> ou <mark>virtual</mark> dans une déclaration de méthode abstraite serait une erreur.

---

Exemple :
```csharp
public class EnsembleTableau : Ensemble
{
    private object[] elements = new object[0];

    public override bool Contient(object o)
    {
        // recherche de l'objet
        for(int i = 0  ; i < elements.Length ; i++)
            if (elements[i] == o) return true; // objet trouvé

        // fin de la boucle sans avoir trouvé l'objet
        return false;
    }
    ⋮
```

---

Il est également possible de déclarer des propriétés abstraites.
```csharp
// Classe abstraite gérant un ensemble d'objets
public abstract class Ensemble
{
    public abstract int nombre { get; }
    public abstract string nom { get; set; }
    ⋮
```

---

Voici l'implémentation
```csharp
public class EnsembleTableau : Ensemble
{
    private string nom_ensemble = null;
    private object[] elements = new object[0];

    public override int nombre
    {
        get { return elements.Count; }
    }

    public override string nom
    {
        get { return nom_ensemble ; }
        set { nom_ensemble = value ; }
    }
    ⋮
```

---

<div class="size">
<img src="/images/heritage/abstract.png" alt="abstract" >
</div>

---

⚠️ L'instanciation doit être faite sur <mark>tous</mark> les éléments <mark>abstract</mark> de la classe abstract. ⚠️

---

# ↩️

#### [Start over]({{ "/index" | url }})