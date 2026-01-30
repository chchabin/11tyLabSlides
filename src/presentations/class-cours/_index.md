---
title: "Class Cours"
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
  .size {
  font-size: 28px;
  }
</style>

# Les Classes

---

<section>

## La dette technique
![dettetech]({{"/images/class/dettetech.png" | url }})

---

⚠️La dette technique⚠️ survient quand les bonnes pratiques n'ont pas été respectées lors de l'écriture du code de votre solution.  
Dans ce cas, une conception logicielle négligée va induire des coûts futurs à rembourser
sous forme :
- de temps de développement supplémentaire,
- des bugs de plus en plus fréquents.

---

### DRY “don’t repeat yourself”
Ce principe est d’éviter au maximum les répétitions d’informations dans un programme.
Chaque élément de connaissance ou de logique d’un programme doit avoir une représentation unique et non ambiguë.

</section>

---

<section>

## Les objets

Objet : des informations & des actions

💾 📱 🔧 🪕 🥾 🍩 👔 👖 👗 👕

---

### Exemple

```texte
objet R21_de_mon_chef
        genre : Renault
        immatriculation : 2245 CDV 75
        NbPlaces : 5
        propriétaire: chef de service
        s_arreter()
        avancer()
fin objet
```

---

### DÉFINITION : un objet
Il se compose d'informations et d'actions. Les actions utilisent (et parfois modifient) les informations de l'objet.
-	L'ensemble des informations d'un objet donné est appelé son ➡️ état ⬅️.
-	L'ensemble des actions applicables à un objet représente son ➡️ comportement ⬅️.

---

### Exemple :
Modélisons l’ensemble des produits en stock, nous aurions :

| 🛈 **Informations** 🛈 | 🎬 **Actions** 🎬  |
|------------------------|--------------------|
| Libellé, prix, stock   | Ajouter, supprimer |

</section>

---

<section>

## Les CLASSES

---

### Définition simple d'une classe

```csharp
public class Voiture
{
    // Le contenu de la classe va ici
}
```
---

### Les attributs (propriétés)
Les attributs sont les caractéristiques d'une classe. Ce sont les données qu'elle stocke.
```csharp
public class Voiture
{
    // Attributs
    public string Marque;
    public string Couleur;
    public int Vitesse;
}
```

---

### Les modificateurs d'accès : public et private

<mark> public</mark>

Un attribut public peut être accédé et modifié de n'importe où dans votre programme.
<mark>private</mark>
Un attribut private ne peut être accédé que depuis l'intérieur de la classe. C'est une forme de protection des données.

---

```csharp
public class Voiture
{
    public string Marque;        // Accessible de partout
    private int Vitesse;          // Accessible seulement dans la classe
    private string NuméroSérie;   // Privé aussi
}
```
---
### Le constructeur
Un constructeur est une méthode spéciale qui s'exécute automatiquement quand vous créez un objet. Il sert à initialiser les attributs.
```csharp
public class Voiture
{
    public string Marque;
    public string Couleur;
    private int Vitesse;

    // Constructeur
    public Voiture(string marque, string couleur)
    {
        Marque = marque;
        Couleur = couleur;
        Vitesse = 0;  // Vitesse initiale à 0
    }
}
```
---

⚠️ <mark>Le constructeur porte le même nom que la classe et n'a pas de type de retour.</mark>

---

### Les méthodes
Une méthode est une fonction qui appartient à la classe. Elle effectue une action sur les données de l'objet.

```csharp
// Méthode sans retour (void)
public void Accelerer()
{
    Vitesse += 10;
    Console.WriteLine("Accélération !");
}

// Méthode avec retour
public int ObtenirVitesse()
{
    return Vitesse;
}

// Méthode avec paramètres
public void ChangerCouleur(string nouvelleCouleur)
{
    Couleur = nouvelleCouleur;
    Console.WriteLine($"Couleur changée en {Couleur}");
}
```

</section>

---

<section>

## Utilisation d'une classe

---

### L'instanciation : créer un objet
Instancier une classe, c'est créer un objet concret à partir de ce modèle.
On utilise le mot clé <mark>new </mark> suivi du nom de la classe et des paramètres du constructeur.

---

```csharp
// Instanciation
Voiture maVoiture = new Voiture("Tesla", "Blanche");
```
Maintenant <mark>maVoiture</mark> est un objet avec <mark>Marque = "Tesla"</mark> et <mark>Couleur = "Blanche"</mark>.

---

<div class="size">

```csharp
public class Voiture
{
    // Attributs
    public string Marque;
    private string Couleur;
    private int Vitesse;

    // Constructeur
    public Voiture(string marque, string couleur)
    {
        Marque = marque;
        Couleur = couleur;
        Vitesse = 0;
    }

    // Méthode pour accélérer (publique)
    public void Accelerer()
    {
        Vitesse += 10;
        Console.WriteLine($"La {Marque} accélère. Vitesse : {Vitesse} km/h");
    }

    // Méthode pour obtenir la vitesse (publique)
    public int ObtenirVitesse()
    {
        return Vitesse;
    }
}
```
</div>

---

### Utilisation de la classe
```csharp
// Instanciation
Voiture voiture1 = new Voiture("BMW", "Noire");
Voiture voiture2 = new Voiture("Peugeot", "Rouge");

// Accès aux attributs publics
Console.WriteLine(voiture1.Marque);   // Affiche : BMW


// Appel de méthodes
voiture1.Accelerer();                 // Affiche : La BMW accélère. Vitesse : 10 km/h
Console.WriteLine(voiture1.ObtenirVitesse());  // Affiche : 10

// Essayer d'accéder à un attribut privé génère une erreur
// voiture1.Vitesse = 50;  // ❌ ERREUR : inaccessible
```
---

| **Concept**  | **Explication**                                 |
|--------------|-------------------------------------------------|
| Classe       | Un modèle pour créer des objets                 |
| Attribut     | Une donnée de la classe                         |
| public       | Accessible de partout                           |
| private      | Accessible seulement dans la classe             |
| Constructeur | Initialise les attributs quand on crée un objet |
| new          | Mot clé pour créer un objet (instancier)        |

</section>

---
<section>

## Programmation orientée objet vs Programmation procédurale

---

### Programmation procédurale (ancienne approche)
On sépare les données (variables) et les fonctions qui les manipulent :

```csharp
// Données
string marqueBmw = "BMW";
int vitesseBmw = 0;
string couleurBmw = "Noire";

string marqueFerrari = "Ferrari";
int vitesseFerrari = 0;
string couleurFerrari = "Rouge";

// Fonctions séparées
void Accelerer(string marque, int vitesse)
{
    vitesse += 10;
    Console.WriteLine($"La {marque} accélère. Vitesse : {vitesse}");
}

// Problèmes : difficile à maintenir, code répétitif, erreurs faciles
```

---

### Programmation orientée objet (approche moderne)
On groupe les données et les fonctions dans une classe. Chaque objet gère ses propres données :

```csharp
public class Voiture
{
    public string Marque;
    private int Vitesse;
    
    public void Accelerer()
    {
        Vitesse += 10;
        Console.WriteLine($"La {Marque} accélère. Vitesse : {Vitesse}");
    }
}


```
---

#### Utilisation simple et organisée
```csharp
Voiture bmw = new Voiture("BMW", "Noire");
Voiture ferrari = new Voiture("Ferrari", "Rouge");

bmw.Accelerer();      // Chaque objet gère ses propres données
ferrari.Accelerer();
```

</section>

---


# ↩️

#### [Start over]({{ "/index" | url }})