---
title: "Interface"
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
  .size {
  font-size: 28px;
  }
  .sizeXXX {
  font-size: xxx-large;
}
</style>

# Classes interfaces

---

##  1- Définition

---

La notion de classe interface offre, des similitudes avec les classes abstraites :
- une interface n'offre que des signatures de méthodes, 
- une classe pourra avoir -implémenter- plusieurs interfaces alors qu'une classe ne peut dériver que d'une seule classe.

---

Exemple :
```csharp
public interface IEmploye
{
    // Methode
    decimal ObtenirSalaireDeBase();
    string Travailler();
⋮
```

---

Si on reprend l'exemple dans le cours des classes abstraites, on voit ici qu'il suffit de remplacer <mark>abstract</mark> par <mark>interface</mark> et de retirer, ici, le mot clé <mark>public</mark>.

Par convention, on ajoute <mark>I</mark> devant le nom de la classe.

---

Dans une interface, nous ne pouvons trouver que des en-têtes de méthodes ou des constantes, les méthodes des interfaces sont donc, par essence même, abstraites.

---

Il est également possible de déclarer des propriétés.
```csharp
public interface IEmploye
{
    // Propriétés
    string Nom { get; set; }
    string Poste { get; set; }
    int Anciennete { get; set; }
⋮
```

---

## 2- Implémentation

---

<div class="size">

```csharp
public class Employe:IEmploye
{
    // Implémentation des propriétés
    public string Nom { get; set; }
    public string Poste { get; set; }
    public int Anciennete { get; set; }

    public string Travailler(){ return $"{Nom} travaille en tant que {Poste}.";}

    public decimal ObtenirSalaireDeBase()
    {
        // Logique de calcul du salaire de base en fonction du poste
        decimal salaireDeBase = 0;

        switch (Poste)
        {
            case "Manager":
                salaireDeBase = 60000;
                break;
            case "Ingénieur":
                salaireDeBase = 70000;
                break;
            // Ajoutez d'autres cas en fonction de vos postes
            default:
                salaireDeBase = 50000;
                break;
        }

        return salaireDeBase;
    }
    
    public Employe(string nom, string poste, int anciennete)
    {
        Nom = nom;
        Poste = poste;
        Anciennete = anciennete;
    }
    
        public string AfficherDetails()
    {
        decimal salaire = ObtenirSalaireDeBase();

        // Logique de calcul du salaire en fonction de l'ancienneté, du poste, etc.
        if (Anciennete >= 5)
        {
            salaire += 10000; // Exemple de prime pour l'ancienneté de 5 ans ou plus
        }

       return $"Nom: {Nom}, Poste: {Poste}, Ancienneté: {Anciennete} ans, Salaire: {salaire:C}";
    }
}
```

</div>

---


<div class="size">
<img src="/images/heritage/EmployeDiag.png" alt="abstract" >
</div>

---

## 3- Instanciation

---
<div class="size">
Il est possible d'implémenter l'employé à partir de la classe ou de l'interface. 
Mais l'accès aux méthodes sera différent selon le choix.


```csharp
IEmploye employe = new Employe("Alice", "Manager", 3);
Console.WriteLine(employe.Travailler());
// Utilisation des autres propriétés et méthodes de la classe Employe
Console.WriteLine(((Employe)employe).AfficherDetails());

Employe etudiant = new Employe("Mourad", "", 6);
Console.WriteLine(etudiant.AfficherDetails());
```
</div>

---

Le résultat est identique :

<div class="size">
<img src="/images/heritage/interfaceConsole.png" alt="interfaceConsole" >
</div>

---

## ⚠️ 
L'instanciation doit être faite sur <mark>tous</mark> les éléments de la classe interface. 
## ⚠️
---

# Résumé

---

<div class="size">

```csharp
public abstract class Animal
{
    public string Nom { get; set; }

    public abstract void FaireDuBruit(); // Méthode abstraite

    public void Manger() // Méthode concrète
    {
        Console.WriteLine($"{Nom} mange.");
    }
}

public class Chien : Animal
{
    public override void FaireDuBruit()
    {
        Console.WriteLine("Le chien aboie !");
    }
}

```
</div>

---


<div class="size">

```csharp
public interface IVehicule
{
    void Demarrer();
    void Freiner();
}

public class Voiture : IVehicule
{
    public void Demarrer()
    {
        Console.WriteLine("La voiture démarre.");
    }

    public void Freiner()
    {
        Console.WriteLine("La voiture freine.");
    }
}


```
</div>

---


<div class="size">

```csharp
public abstract class Animal
{
    public abstract void FaireDuBruit();
}

public interface IVolant
{
    void Voler();
}

public class Oiseau : Animal, IVolant
{
    public override void FaireDuBruit()
    {
        Console.WriteLine("L'oiseau chante !");
    }

    public void Voler()
    {
        Console.WriteLine("L'oiseau vole !");
    }
}

```
</div>

---

# ↩️

#### [Start over]({{ "/index" | url }})