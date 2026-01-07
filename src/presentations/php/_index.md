---
title: "PHP"
date: 2022-12-28T00:23:56+01:00

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

# Un Peut D’HISTOIRE 

---

- Il a été créé en 1994 par Rasmus Lerdorf pour les besoins des pages web
personnelles (livre d’or, compteurs, etc.). À l’époque, PHP signifiait Personnal
Home Page.



- C’est un langage incrusté au HTML et interprété (PHP3) ou compilé (PHP4 et
PHP5) côté serveur. Il dérive du C et du Perl dont il reprend la syntaxe. Il est
extensible grâce à de nombreux modules et son code source est ouvert.  
Comme il supporte tous les standards du web et qu’il est gratuit, il s’est
rapidement répandu sur la toile.



- En 1997, PHP devient un projet collectif et son interpréteur est réécrit par Zeev
Suraski et Andi Gutmans pour donner la version 3 qui s’appelle désormais PHP :
Hypertext Preprocessor (acronyme récursif à l’exemple du système Open
Source Linux : Is Not UniX).

---

# Architecture 3-tiers 

---

![3tiers]({{"/images/php/3tiers.png" | url }})

---

# Les trois logiciels en bref 

---

- Apache est le serveur web. Son rôle est d'écouter les requêtes émises par
   les navigateurs (qui demandent des pages web), de chercher la page
   demandée et de la renvoyer. 
- PHP est un langage de script. Il permet, de décrire dans une page web, un
  affichage dynamique d'information, c'est-à-dire que le texte affiché peut
  dépendre de variables. 
- MySQL est un système de gestion de base de données. Son rôle est de
   stocker les données, sous forme de tables, et de permettre la
   manipulation de ces données à travers le langage de requête SQL.

---

## Intégration d’un script PHP dans une page HTML

---
Les pages web sont au format html (extension `.htm` ou `.html`).
Les pages web dynamiques générées avec PHP sont au format
php (extension `.php`). Le code source PHP est directement
inséré dans le fichier html grâce à la balise (ou TAG) :
`<?php Liste d’instructions ?>`  
Exemple :  

[transformation]({{"/images/php/transformation.png" | url }})

---

## Exemple de scripts

---

Soit la page nommée `index.php`:

[3tiersExemple]({{"/images/php/3tiersExemple.png" | url }})

On remarque que les balises PHP qui existent sur la page d’origine
(coté serveur) ont disparu au côté client => confidentialité du code PHP 

---

# Les instructions 

---

## Typage faible. Exemple :

```php
// Pas de déclaration de variable
$test = 1.5 ;     // Réel

$test = 12 ;      // Entier

$test = array() ; // Tableau

$test = "10" ;    // Chaîne

echo $test ; // 10  
```
---

## Typage automatique. Exemple :
```php
$nombre1 = 1.5 ;      // Réel 
$nombre2 = 12 ;       // Entier 
$chaine1 = "10" ;     // Chaîne 
$chaine2 = 'coucou' ; // Chaîne 
```

---

```php
$total = $nombre1 + $nombre2 + $chaine1 + $chaine2 ;
           1.5    +   12
           ---------------
                      13.5   +  "10"
                      --------------
                                23.5     + "COUCOU"
                                ------------------
                                23.5     +    0
                                -------------------
                                              23.5
```

---

## Les chaînes de caractères 

Substitution de variables dans les chaînes  

Guillemets simples

| **Code PHP**       | **Sortie**   |
|--------------------|:-------------|
| $a='chaîne' ;      | chaîne       |
| $b='voici une $a'; | voici une $a |

---

Guillemets doubles

| **Code PHP**       | **Sortie**       |
|--------------------|:-----------------|
| $a="chaîne" ;      | chaîne           |
| $b="voici une $a"; | voici une chaîne |
 
---

# Les tableaux 

---

## Définition

Un tableau en PHP est en fait une carte ordonnée. 
Une carte est un type qui associe des valeurs en clés.
Un tableau peut être créé en utilisant la structure de langage `array()`  
Exemple :
```php
array( 
	key 	=> value, 
	key2 	=> value2, 
	key3 	=> value3, 
	... 
	) 
```

---

## Création / initialisation :
```php
$tab1=array(12, "fraise", 2.5) ; 
ou
$tab1={12, "fraise", 2.5}
```

---

## Création / initialisation (V2) :
```php
$tab2[] = 12 ; 
$tab2[] = "fraise" ; 
$tab2[] = 2.5 ;
```

---

## Création / initialisation (V3) :
```php
 $tab3[0] = 12 ; 
 $tab3[1] = "fraise" ; 
 $tab3[2] = 2.5 ;
```

---

## Résultat

| **Clé** | **Valeur** |
|---------|:-----------|
| 0       | 12         |
| 1       | "fraise"   |
| 2       | 2.5        |

---

## Tableaux associatifs
Tableaux dont l’accès aux éléments n’est plus
réalisé grâce à un index (0,1,…) mais grâce à
une clé de type entier ou chaîne. 

---

## Exemple
Exemples de clés:
```php
$tab['un'] = 12 ;
$tab[205] = "bonjour" ;
$tab["la valeur"] = 3.0 ;
```
Création
```php
$tab = array(cle1 => val1,
             cle2 => val2,
             …); 
```

---

## Résultat attendu

| **Clé**  | **Valeur** |
|----------|:-----------|
| "un"     | 12         |
| "deux"   | "fraise"   |
| "trois"  | 2.5        |
| "quatre" | "el5"      |

---

```php
$tab5['un']    = 12 ; 
$tab5['trois'] = "fraise" ; 
$tab5["deux"]  = 2.5 ; 
$tab5[42]      = "el5" ; 
```

OU

```php
$tab6 = array('un'    => 12, 
              'trois' => "fraise", 
              "deux"  => 2.5,  
              42      => "el5") ; 
```

---

# Les outils de structuration 

---
<div class="size">

Les inclusions sont très pratiques pour :
- Ne pas dupliquer de code HTML
- Réutiliser des fonctions PHP déjà écrites dans d’autres fichiers

`include` évalue et insert à chaque appel (même dans une boucle) le contenu du fichier passé en argument.
- Si ce fichier est déjà inclus, alors il y a un message d’erreur
- Si le fichier n’existe pas, alors il y a un ‘warning’ affiché

Exemple :
```php
include("fichier.php");
```
</div>

---

[include]({{"/images/php/include.png" | url }})

---

# Les fonctions pour le débogage

---

- `print_r()` affiche des informations à propos d'une variable, de manière à ce qu'elle soit lisible.
- `var_dump()` affiche les informations structurées d'une variable, y compris son type et sa valeur. 
Les tableaux et les objets sont explorés récursivement, avec des indentations, pour mettre en valeur leur structure.

  
---

# ↩️

#### [Start over]({{ "/index" | url }})