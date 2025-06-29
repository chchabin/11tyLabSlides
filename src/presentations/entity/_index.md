---
title: "Entity"
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

Interroger la base de données via EF et le modèle généré se fait via un langage particulier appelé Linq to Entity (Language Integrated Query)  
Ce langage permet d’écrire des requêtes qui seront ensuite transformées en langage SQL (ou Oracle ou MySQL) à partir d’un langage typé.  
Les requêtes LINQ s’exécutent toujours dans le contexte du modèle EF.

---

<section>

# SELECTION

```sql
SELECT * FROM context.eleves el
(...)
```

---

## Entity
```csharp
var query = from el in context.eleves
            select el;
            
var allEleves = query.ToList();

 foreach (var eleve in allEleves)
 {
    Console.WriteLine($"{eleve.nom} {eleve.prenom}");
 }
```

<div class="size">

La variable <mark>query</mark> représente la requête à exécuter sur votre base de données.

La variable <mark>allEleves</mark> représente la <mark>List\<Eleves\></mark> issu de l’exécution de votre requête.

⚠️ L’exécution de la requête se fait lors de l’appel de la méthode <mark>ToList()</mark> et non pas lors de la déclaration de la requête !
</div>

</section>

---

<section>

## La clause WHERE

```sql
SELECT * FROM context.eleves el
WHERE el.creditHoraire >10    
...
```

---

```csharp
var query = from el in context.eleves
            where el.creditHoraire >10
            select el;
            
var allEleves = query.ToList();

 foreach (var eleve in allEleves)
 {
    Console.WriteLine($"{eleve.nom} {eleve.prenom}");
 }
```
Dans ce cas, comme en SQL, nous affectons une contrainte <mark>where</mark> 

Les tests dans <mark>where</mark> peuvent contenir plusieurs critères, avec les opérateurs logiques <mark>&&</mark> (and), <mark>||</mark> (or) <mark>==</mark> (équivalent).

</section>

---

<section>

## Types anonymes

```sql
SELECT el.nom AS FirstName, el.prenom AS LastName 
FROM context.eleves el
WHERE el.creditHoraire >10    
(...)
```

---

Voici une nouvelle formulation.
```csharp
var query = from el in context.eleves
            where el.creditHoraire > 10
            select new { FirstName = el.nom, LastName = el.prenom };

var allEleves = query.ToList();

foreach (var eleve in allEleves)
{
    Console.WriteLine($"{eleve.FirstName} {eleve.LastName}");
}
```

---

<div class="size">

Quelques explications :

1. <mark>from</mark> permet de définir la source de données (spécifiée après le mot clé <mark>context</mark>) et une variable de portée locale qui représente les éléments dans la séquence source (ici, c’est <mark>el</mark>). Pour le reste de la requête, on peut exploiter les champs de cette variable (avec <mark>el.creditHoraire</mark> par exemple).
2. <mark>where</mark> nous permet de définir les conditions de la requête, pour filtrer juste sur les valeurs qui nous intéressent
3. <mark>select</mark> permet de définir les variables de sortie. Ici, nous créons un type à la volée avec le mot clé <mark>new</mark>. Le résultat est un ensemble de types Anonymes contenant les propriétés voulues <mark>.FirstName</mark> et <mark>.LastName</mark>.
4. L'affichage se fait à partir de ces nouvelles variables.
</div>

</section>

---

<section>

## Clause ORDERBY

```sql
SELECT *
FROM context.eleves el
WHERE el.creditHoraire >10
ORDER BY el.creditHoraire DESC   
(...)
```

---

Cette instruction se place avant le <mark>select</mark>.
```csharp
var query = from el in m.eleves
            where el.creditHoraire > 10
            orderby el.creditHoraire descending
            select el;
            
var allEleves = query.ToList();

foreach (var eleve in allEleves)
{
    Console.WriteLine($"{eleve.nom} {eleve.prenom}");
}
```
Ici, nous avons ajouté une clause <mark>orderby</mark>, suivie du champ sur lequel faire le tri, et l’ordre.

</section>

---

<section>

## Les fonctions d'agrégation
1. Max() : valeur maximale dans la collection (ou dernier par ordre alphabétique)
2. Min() : valeur minimale dans la collection (ou premier par ordre alphabétique)
3. Count() : total d’éléments dans la collection
4. Average() : moyenne des valeurs de la collection (types numériques uniquement)
5. Sum() : total des valeurs de la collection (types numériques uniquement)
   Voici des exemples d'application :

---

Juste un exemple pour `MAX()` le reste est équivalent
```sql
SELECT MAX(*) 
FROM context.eleves el
WHERE el.creditHoraire >10 
ORDER BY el.creditHoraire DESC   
...
```

---

```csharp
var query = from el in m.eleves
            where el.creditHoraire > 10
            orderby el.creditHoraire descending
            select el.creditHoraire;
var maxEleves = query.Max();
var sumEleves = query.Sum();
var countEleves = query.Count() ;
```

---

## Somme (sum) :
```csharp
var query = from l in this.mesDonnesEF.lecons
            group l by l.idEleve into groupeLecon
            join e in this.mesDonnesEF.eleves on groupeLecon.Key equals e.id
            select new
            { 
                nom = e.nom,
                totalHeure = groupeLecon.Sum(cumul => cumul.duree )
            };
```

<mark>cumul => cumul.duree</mark> est une expression lambda. Elle gagne en performance par rapport à une expression classique.

---

## Cumul (Count)
```csharp
var query = from l in this.mesDonnesEF.lecons
            group l by l.numImmaVehicule into groupeVehicule
            join v in this.mesDonnesEF.vehicules on groupeVehicule.Key equals v.numImma
            select new
            {
                immatriculation = v.numImma,
                NombreDeFois = groupeVehicule.Count()
            };
```
Les types anonymes permettent une intégration des fonctions d'agrégation dans le <mark>select</mark>.

---

## FILTRE
L’idée ici est de passer une variable comme nous aurions passé un paramètre. EF va générer une requête paramétrée et l’exécuter sur votre base :
```csharp
String filtre = "1123YA93";

var query = from l in context.lecons
            where l.numImmaVehicule.StartsWith(filtre)
            select l;
```
<mark>StartWith()</mark> est transformée en commande SQL <mark>Like</mark> et la variable de type string est bien remplacée par un paramètre <mark>nvarchar()</mark>

</section>

---

<section>

### L'opération de manipulation d'ensemble `DISTINCT`
- DISTINCT : supprime les doublons

```sql
SELECT DISTINCT el.creditHoraire  
FROM context.eleves el
WHERE el.creditHoraire >10 
ORDER BY el.creditHoraire DESC   
...
```

---

  Voici des exemples d'application :
```csharp 
  var query = from el in m.eleves
  where el.creditHoraire > 10
  orderby el.creditHoraire descending
  select el.creditHoraire;
  
  var distinctEleves = query.Distinct()
``` 

</section>

---

<section>

## JOINTURE explicites
 
L’idée ici est de récupérer des éléments suivants une jointure SQL en utilisant la syntaxe <mark>from</mark> :
```csharp
var query =  from e in context.lecons
             from r in context.vehicules
             from t in context.eleves
             where t.id == 46
             select e;
```
Le gros avantage ici, c’est qu’il est inutile de spécifier les jointures à utiliser, car elles sont déjà connues par le modèle AutoEcole.

---

## Jointures non explicites
Ce n’est pas le cas dans notre modèle, mais si votre base de données ne contient pas de relations (et donc le modèle ne les connaissant pas) vous pouvez réaliser une relation explicite comme ceci :
```csharp
var query = from t in context.eleves
            join r in context.lecons on t.id equals r.idEleve
            where t.nom == "Ardi"
            select r;
```

<mark>join … in … on … equals</mark> est la syntaxe qui permet d’établir la relation explicite entre deux entités (donc 2 tables).

</section>

---

<section>

## REGROUPEMENT
<div class="size">*

Il s’agit de grouper les éléments dans une nouvelle structure. Nous allons utiliser le concept qde type anonyme dans la requête LINQ.  
Un type anonyme permet de créer un objet dynamiquement sans forcément avoir au préalable écrit la classe correspondante.  
Dans une fonction de regroupement, on a souvent une structure différente de la structure de la table d’où l’utilisation de type anonyme.  
Voici un exemple sur la table <mark>Lecons</mark> on souhaite avoir les <mark>lecons</mark> pour chaque <mark>eleves</mark> :
</div>

---

```csharp
var query = from p in context.lecons
            group p by new { p.id, p.idEleve } into LeconsGroupbyEleve
            select new
            {
            LeconId = LeconsGroupbyEleve.Key.id,
            EleveId = LeconsGroupbyEleve.Key.idEleve
            };
            
foreach (var p in query.ToList())
    {Console.WriteLine($"{p.LeconId} {p.EleveId}");}
```
</section>

---

<section>

## INSERTION
```sql
INSERT INTO context.eleves VALUES ('e1', 'dupont', 'jean')
...
```

---

```csharp
using (var context = new autoecoleEntities())
{
    var nouvelEleve = new Eleve
    {
        Id = "e1",
        Nom = "dupont", 
        Prenom = "jean"
    };

    context.Eleves.Add(nouvelEleve);
    context.SaveChanges();
}
```

</section>


---

<section>

## MISE A JOUR
```sql
UPDATE context.eleves SET nom='yoyo' WHERE prenom='jean'
...
```

---

```csharp
using (var context = new autoecoleEntities())
{
    var eleveAModifier = context.Eleves
        .Where(e => e.Prenom == "jean")
        .FirstOrDefault();

    if (eleveAModifier != null)
    {
        eleveAModifier.Nom = "yoyo";
        context.SaveChanges();
    }

}
```

</section>

---

<section>

## SUPPRESSION
```sql
DELETE FROM Eleves WHERE nom='yoyo'
...
```

---

```csharp
using (var context = new VotreDbContext())
{
    // Méthode 1 : LINQ avec chargement
    var elevesASupprimer = context.Eleves
        .Where(e => e.Nom == "yoyo")
        .ToList();

    if (elevesASupprimer.Any())
    {
        context.Eleves.RemoveRange(elevesASupprimer);
        context.SaveChanges();
    }
}
```

</section>

---

# ↩️

#### [Start over](/index)