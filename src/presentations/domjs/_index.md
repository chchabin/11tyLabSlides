---
title: "Domjs"
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

# Gestion du DOM avec javascript

---

<section>

## Les éléments du DOM

---

### Définition du DOM

Le DOM (Document Object Model) est une interface pour vos pages web. C’est une API permettant aux programmes de lire et 
de manipuler le contenu de la page, sa structure et ses styles.

---

### Window
<div class="size">

![window_document]({{"/images/js/window_document.webp" | url }})
</div>

### Document
Il faut saisir <mark>console.dir(document)</mark> pour voir ses propriétés

---

### Élément

Les balises h1, p, pre, a, div, etc

---

### Attribut

Par exemple id, class, src, etc

---

### Texte

Une évidence ...

</section>

---

<section>

## La sélection d'éléments

---

### querySelector et querySelectorAll

- <mark>querySelector</mark> : retourne la première occurrence répondant au sélecteur
- <mark>querySelectorAll</mark>` : retourne une nodeList statique

---

Nous pouvons, par exemple, écrire les différentes lignes ci-dessous
```javascript
// Sélectionner la première occurrence qui correspond à une balise p
const baliseP = document.querySelector("p")

// Sélectionner toutes les occurrences qui correspondent à une balise p
const balisesP = document.querySelectorAll("p")

// Sélectionner la première occurrence qui correspond à une balise section qui a la classe "rouge"
const sectionRouge = document.querySelector("section.rouge")

// Sélectionner toutes les occurrences qui correspond à un élément ayant la classe "rouge" dans une une balise section
const classeRouge = document.querySelector("section .rouge")
```

---

- getElementsByClassName
- getElementById
- getElementsByTagName
- getElementsByName
  </section>

---

<section>

## Ecouter un évènement

---

Un événement réagit à des interactions de l'utilisateur ou à d'autres actions qui se produisent dans le navigateur.
Il devient possible d'appeler des fonctions en fonction de cet évènement.

---

### La bonne méthode : <mark>addEventListener</mark>

```javascript
<button id="monBouton">Modifier</button>

<script>
  // Sélectionnez l'élément
  const bouton = document.querySelector('#monBouton')

  // Ajoutez un gestionnaire d'événements pour le clic
  bouton.addEventListener('click', onClick) 
  function onClick(e){
    console.log('Le bouton a été cliqué !')
  }
</script>
```

---
### Avec plusieurs boutons
```javascript
<button class="monBouton" data-action="modifier">Modifier</button>
<button class="monBouton" data-action="supprimer">Supprimer</button>
<button class="monBouton" data-action="maj">Maj</button>

<script>
  // Sélectionnez l'élément
  const bouton = document.querySelectorAll('.monBouton')

  // Ajoutez un gestionnaire d'événements pour le clic
  bouton.foreach(btn=>btn.addEventListener('click', onClick) 
  function onClick(e){
    console.log(`Le bouton cliqué est e.target.textContent`)
  }
</script>
```

---

### Une méthode plus ancienne

```javascript
<button id="monBouton">Supprimer</button>

<script>
  // Sélectionnez l'élément par son ID
  const bouton = document.querySelector('#monBouton')

  // Ajoutez un gestionnaire d'événements pour le clic
  bouton.onclick=onClick
  function onClick(e){
    console.log('Le bouton a été cliqué !')
  }
</script>
```

---

### Méthode à éviter

```javascript
<button id="monBouton" onclick="onClick()">Maj</button>

<script>
  // Ajoutez un gestionnaire d'événements pour le clic
  function onClick(e){
    console.log('Le bouton a été cliqué !')
  }
</script>
```
</section>

---

<section>

## Les objets

---

Voici un objet personne
```javascript
const personne = {
    nom: 'Sionne',
    prenom:'Jacques',
    age:20,
    hobbies:['sport','cinéma','musique'],
}
```

---

### La méthode for ... in
```javascript
for(const prop in personne){
    console.log(prop, personne[prop])
}
```

---

### La méthode entries

```javascript 
const arrFromObj=Object.entries(personne)
console.log(arrFromObj)
```

La méthode renvoie un tableau avec chaque ligne sous forme de tableau :
```javascript 
[ 
    0 :['nom', 'Sionne'], 
    ⋮  
]
```
```javascript
arrFromObj.forEach(el=>console.log(el[1])) 
// affiche les valeurs de l'objet 
// Sionne Jacques 20 ['sport','cinéma','musique']
```
---

### La méthode for ... of
```javascript
for(const [key,value] of Object.entries(personne)){
    console.log(key, value)
}
```

---

### Les méthodes sur les objets

```javascript
// renvoie un tableau des clés
console.log(Object.keys(personne)) 
// renvoie un tableau des valeurs
console.log(Object.values(personne))
```
</section>

---

<section>

## Créer des éléments HTML avec javascript

---

```javascript
<ul id="resultat"></ul>
<script>
  // Sélectionnez l'élément
  const ul = document.querySelector('#resultat')
  // créer l'élément li
  const li = document.createElement('li')
  // insérer du texte
  li.textContent='mon texte'
  // Ajouter li à ul
  ul.appendChild(li)
</script>
```
Ici li est toujours ajouté en fin de liste.

Il existe des instructions pour ajuster le positionnement.

</section>

---

<section>

## Les promesses et Fetch

---

Javascript est un langage mono thread, toutes les opérations s'exécutent les une aprés les autres.

Le problème, c'est que javascript n'attend pas que la première opération soit finie pour exécuter la suivante.

Ce problème se pose souvent, lorsqu'on récupère des données de l'extérieur.

La fonction qui est maintenant utilisée est <mark>Fetch</mark>.

---

Soit la fonction <mark>FetchData</mark>
```javascript
const fetchData = async (link) => {
  // attend la reponse de l'appel fetch
  const response = await fetch(link)
  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }
  return await response.json()
}
```

---

L'appel se fait de la façon suivante :
```javascript
const json=await fetchData('./data.json')
```

---

Si on veut récupérer une page HTML, il faudra changer le return de <mark>FetchData</mark> :
```javascript
 return await response.text()
```

---

L'appel se fait de la façon suivante :
```javascript
... await fetchData('./page.html')
```
</section>

---

# ↩️

#### [Start over]({{ "/index" | url }})