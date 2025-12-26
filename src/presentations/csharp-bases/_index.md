---
title: "C#"
date: 2025-12-28T00:23:56+01:00

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

# C# Aide mémoire

---

<section>

## COMMENT DECLARER UNE VARIABLE ?

---

### LES TYPES

<div class="size" >

| Type    | Description                              | Taille    | Exemple de syntaxe       |
|---------|------------------------------------------|-----------|--------------------------|
| bool    | Valeur logique (vrai ou faux).           | 1 octet   | bool isReady = true;     |
| char    | Un seul caractère Unicode.               | 2 octets  | char grade = 'A';        |
| string  | Une séquence de caractères (texte).      | Variable  | string name = "Azure";   |
| int     | Nombre entier (sans virgule).            | 4 octets  | int count = 10;          |
| double  | Nombre à virgule (double précision).     | 8 octets  | double pi = 3.14159;     |
| float   | Nombre à virgule (simple précision).     | 4 octets  | float price = 10.99f;    |
| decimal | Haute précision (monétaire / financier). | 16 octets | decimal total = 100.50m; |

</div>

---

### LES CARACTÈRES SPÉCIAUX

| type | Description                                                |
|------|------------------------------------------------------------|
| `\n` | fait un retour chariot                                     |
| `\t` | fait une tabulation                                        |
| `\’` | permet de créer un caractère contenant la valeur du quote. |
| `\"` | affiche un guillemet.                                      |

---

### les opérateurs de calcul

**Exemple d’utilisation :**
```csharp
int a = 10;

int b = 20;

int c = a + b; // c = 5

int d = c + 12; //d = 17

int e = a*b; //e = 3*2 = 6

int f = c%a; //5%2 = 1 car 5 = 2*2 + 1

int g = a + b/c; //g = 14
```

---

### Les opérateurs d’affectation combinés

Exemple d’utilisation :
```csharp
int i = 0; //La variable doit avoir été initialisé au préalable.

i += 12; // i = i + 12;

i -= 12; // i = i – 12;

i *= 5; // i = i * 5;

i /= 5; // i = i / 5;

i %= 2; // i = i % 2;

i++; // i += 1; // i = i + 1;

i--; // i -= 1; // i = i – 1;
```

---

### Concatenation

```csharp
string a = "Coucou,";
string b = " c’est moi !";
string c ="Vous avez entré : " + a + b;//Classique
 //c contient "Vous avez entré : Coucou, c’est moi !"
string d = $"Vous avez entré : {a}{b}";//Interpolation de chaine $                          
```

</section>

---

<section>

## Tests et conditions

---

### La notion de condition

<div class="size" >

| Opérateur | Signification         |
|-----------|-----------------------|
| ==        | Égal à                |
| !=        | Différent de          |
| <         | Inférieur strictement |
| <=        | Inférieur ou égal     |
| >         | Supérieur strictement |
| >=        | Supérieur ou égal     |
| &&        | Et                    |
| \|\|      | Ou                    |
| !         | Non                   |

</div>

---

### L’instruction `if`

```csharp
string a ="";
if (valeur > 10) 
{ 
    //alors afficher... 
    a="Vous avez entrée une valeur strictement supérieure à 10."; 
} 
else 
{ 
    //sinon afficher 
    a="Vous avez entrée une valeur inférieure ou égale à 10."; 
} 
Console.WriteLine(a);
```

---

### L’instruction `switch`
```csharp
//Saisie de la variable country
string a ="";
switch (country) //country est de type string 
{ 
    case "uk": 
    case "usa": 
        a="Your language is english"; /*si usa ou si uk*/ 
        break;
    case "fr": 
        a="Votre langue est le français"; /*si fr uniquement*/ 
        break; 
    default: 
        a="Your language is neither english nor french";
        break; 
} 
Console.WriteLine(a);

```

</section>

---

<section>

## Les Tableaux

---
### Déclaration


```csharp
int[] tableaudentier={1,2,3,7,6,4,9,4,8};
string[] tableaudechaines = { "Nicolas", "Jean", "Fabrice"};
```
ou si on ne connait pas a priori les valeurs :
```csharp
tableaudentier = new int[625];
tableaudechaines = new string[100];
```

---

L’accès aux cellules se fait en spécifiant un nombre entier (de type byte, char, short, ou int) **indexé à partir de 0**.
```csharp
tableaudentiers[0]=24; // on place 24 dans la première cellule.
int i=8;
tableaudentiers[1]=i ; // Maintenant la deuxième cellule a reçu 8.
i=tableaudentier[0] ; // Maintenant i est à 24.
tableaudechaine[6]="coucou" ; // Là je pense que vous avez compris !?
```
</section>

---

<section>

## Les Boucles
---

### La boucle for
```csharp
string a ="";
for (int i = 0; i < 10; i++) 
{ 
    // afficher 10 fois Bonjour
    a=$"Fois n° {i.ToString()} Bonjour !"; 
} 
Console.WriteLine(a);
```
---

### La boucle while
```csharp
const int fin = 5; // ceci est une constante, mot clé const
int somme = 0;   // variable de cumul
int i = 0;       // variable de compteur
while (i < fin) {-
    somme += i ;    // raccourci de somme = somme + 1
    i++;            // raccourci de i = i + 1
 }
Console.WriteLine("La somme vaut :" + somme);
```
</section>

---

<section>

## Les fonctions

---

### Composition des fonctions

<div class="size" >

[modificateur] <mark>type_retour</mark> nom_fonction([paramètres])
{
    // Corps de la fonction
<mark>return</mark> valeur;
}

</div>

---

<mark>Modificateur d'accès :</mark> public, private, protected, internal (détermine qui peut appeler la fonction)
<mark>Type de retour :</mark> le type de données retourné (int, string, bool, void si aucun retour)
<mark>Nom :</mark> identifie la fonction (convention PascalCase : CalculerTotal, AfficherMessage)
<mark>Paramètres :</mark> variables d'entrée entre parenthèses (optionnels)
<mark>Corps :</mark> le code à exécuter entre accolades

---
### Exemple
```csharp
class Program
{
// Définition de la fonction
public static int CalculerPrix(int quantite, double prixUnitaire)
{
    return (int)(quantite * prixUnitaire);
}

    // Point d'entrée du programme
    static void Main()
    {
        // Appel de la fonction
        int prix = CalculerPrix(3, 12.50);
        Console.WriteLine($"Prix total : {prix}€");
    }
}
```
---

### Signature de fonction

L’utilisateur d’une fonction n’a pas à connaitre le programme de la fonction ; seule la signature de la fonction le concerne.

 ---
### Les composants

1. Le nom de la fonction : Son identifiant.

2. Le nombre de paramètres : Combien de valeurs elle reçoit.

3. Le type des paramètres : Si c'est un int, un string, etc.

4. L'ordre des paramètres : L'ordre compte ! (int, string) est différent de (string, int).

5. Les modificateurs de passage : (En C#) comme ref ou out.

---

### Ce qui n'en fait PAS partie
C'est une erreur classique de débutant : le type de retour (ce que la fonction renvoie) et les noms des paramètres ne font généralement pas partie de la signature pour le compilateur.

---

### Exemple
```csharp
CalculerPrix(int , double )
```
est la signature de la fonction

---
## On peut aussi la presenter sous forme de tableau
<div class="size" >

| Nom          | Rôle                                                                                                                  | Paramètres                                                                                                | Valeur de retour                         |
|--------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------|
| CalculerPrix | Calcule le montant total d'une commande en multipliant la quantité par le prix, puis convertit le résultat en entier. | <mark>int quantite :</mark> Le nombre d'articles<br/><mark>double prixUnitaire :</mark> Le prix à l'unité | <mark>int :</mark> Le prix total arrondi |

</div>
</section>

---

# ↩️

#### [Start over]({{ "/index" | url }})
