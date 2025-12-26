---
title: "Javascript"
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

## Cours ES6 (ECMAScript 2015) pour Développeurs PHP et C#

---

## Introduction
ES6, également appelé ECMAScript 2015, est une mise à jour majeure de JavaScript qui a introduit de nombreuses fonctionnalités modernes similaires à celles que vous connaissez en PHP et C#.

---
<section>

## 1. Let et Const

---

### let
- Portée de bloc (block scope). Similaire aux variables locales en C# et PHP
- Pas de hoisting utilisable
- Ne peut pas être redéclaré dans le même scope

```javascript
let x = 10;
if (true) {
    let x = 20; // Variable différente
    console.log(x); // 20
}
console.log(x); // 10
```
---
### const
- Même principe que `let` mais pour les constantes
- Similaire à `const` en PHP ou `readonly` en C#
- Doit être initialisé lors de la déclaration
- La référence ne peut pas être modifiée (mais le contenu d'un objet peut l'être).

```javascript
const PI = 3.14159;
// PI = 3.14; // Erreur!

const user = { name: "Alice" };
user.name = "Bob"; // OK - modification du contenu
// user = {}; // Erreur - modification de la référence
```

</section>

---

<section>

## 2. Fonctions

---

###  Déclaration classique

```javascript
function saluer(nom) {
    return "Bonjour " + nom;
}

// Paramètres par défaut
function saluer(nom = "invité") {
    return "Bonjour " + nom;
}

const result = saluer();
// "Bonjour invité"
```

---

### Expressions de fonction

```javascript
// Assignation à une variable
const saluer = function(nom) {
    return "Bonjour " + nom;
};

// Peut être anonyme ou nommée
const calculer = function addition(a, b) {
    return a + b;
};
```

---

###  Paramètres par Défaut

```javascript
function greet(name = "Invité", greeting = "Bonjour") {
    return `${greeting}, ${name}!`;
}

console.log(greet()); // "Bonjour, Invité!"
console.log(greet("Alice")); // "Bonjour, Alice!"
console.log(greet("Bob", "Salut")); // "Salut, Bob!"
```

---

### Arrow Functions (Fonctions Flèches)

Syntaxe plus concise pour les fonctions avec comportement différent du `this`.

```javascript
// Syntaxe concise
const saluer = (nom) => {
    return "Bonjour " + nom;
};

// Syntaxe ultra-courte (return implicite)
const saluer = nom => "Bonjour " + nom;

// Plusieurs paramètres
const additionner = (a, b) => a + b;

// Sans paramètres
const direBonjour = () => "Bonjour !";
```

---

### Particularité du `this`
Les arrow functions n'ont pas leur propre `this` - elles héritent du contexte parent.

```javascript
const obj = {
    name: "Objet",
    regularFunction: function() {
        console.log(this.name); // "Objet"
    },
    arrowFunction: () => {
        console.log(this.name); // undefined (this du contexte parent)
    }
};
```
</section>

---

## 3. Template Literals (Littéraux de Gabarit)
<div class="size"> 
Chaînes de caractères avec interpolation — similaire à <mark>${}</mark> en PHP ou <mark>$""</mark> en C#.
</div>

```javascript
const name = "Marie";
const age = 25;

// Interpolation
const message = `Bonjour, je m'appelle ${name} et j'ai ${age} ans.`;

// Multi-lignes
const html = `
    <div>
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>`;

// Expressions
const total = `Le total est ${10 + 20} euros`;
```

---
<section>

## 4. Destructuring (Déstructuration)

Extraction de valeurs d'objets et tableaux de manière concise.

### Objets
```javascript
const user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
```

---
```javascript
// Destructuration
const { name, age } = user;
console.log(name); // "Alice"

// Avec renommage
const { name: userName, age: userAge } = user;

// Valeurs par défaut
const { name, country = "France" } = user;
```
</section>

---

<section>

## 5. Tableaux

---

### Création et opérations de base
```javascript
// Création
const nombres = [1, 2, 3, 4, 5];
const mixte = [1, "texte", true, {nom: "Alice"}]; // Types mixtes OK

// Méthodes courantes
nombres.push(6);           // Ajoute à la fin
nombres.pop();             // Retire de la fin
nombres.unshift(0);        // Ajoute au début
nombres.shift();           // Retire du début

// Accès
console.log(nombres[0]);   // Premier élément
console.log(nombres.length); // Taille du tableau
```
---

### Méthodes de transformation (importantes pour callbacks)

```javascript
const nombres = [1, 2, 3, 4, 5];

// map : transforme chaque élément
const doubles = nombres.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter : filtre les éléments
const pairs = nombres.filter(n => n % 2 === 0);
// [2, 4]

// reduce : réduit à une seule valeur
const somme = nombres.reduce((acc, n) => acc + n, 0);
// 15
```

</section>

---


<section>

## 6. Rest et Spread Operators

### Rest Operator (...)
Regroupe les arguments restants dans un tableau — similaire à `params` en C#.

```javascript
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

---

### Spread Operator (...)
Développe un itérable en éléments individuels - similaire au spread en PHP.

```javascript
// Tableaux
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copie
const copy = [...arr1];

// Objets
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
```
</section>

---
<section>

## 7. Classes et Encapsulation

Syntaxe orientée objet similaire à PHP et C#.

---

### Classes de base
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Bonjour, je suis ${this.name}`;
    }

    // Méthode statique
    static species() {
        return "Homo sapiens";
    }
}

// Utilisation
const person = new Person("Alice", 30);
console.log(person.greet());
console.log(Person.species());
```
---

### Propriétés et Méthodes Privées (ES2022)

**Similaire à `private` en C# et PHP**

```javascript
class BankAccount {
    // Propriété privée (préfixe #)
    #balance = 0;
    #accountNumber;

    constructor(accountNumber, initialBalance) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }

    // Méthode privée
    #validateAmount(amount) {
        return amount > 0 && !isNaN(amount);
    }

    // Méthodes publiques
    deposit(amount) {
        if (this.#validateAmount(amount)) {
            this.#balance += amount;
            return true;
        }
        return false;
    }

    withdraw(amount) {
        if (this.#validateAmount(amount) && this.#balance >= amount) {
            this.#balance -= amount;
            return true;
        }
        return false;
    }

    getBalance() {
        return this.#balance;
    }

    // Getter (propriété calculée)
    get formattedBalance() {
        return `${this.#balance.toFixed(2)} €`;
    }

    // Setter avec validation
    set minimumBalance(value) {
        if (value < 0) {
            throw new Error("Le solde minimum ne peut pas être négatif");
        }
        this.#minBalance = value;
    }
}

// Utilisation
const account = new BankAccount("123456", 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.formattedBalance); // "1500.00 €"
// console.log(account.#balance); // Erreur : propriété privée inaccessible
```
---
### Héritage
```javascript
class Student extends Person {
    #studentId; // Propriété privée
    #grades = [];

    constructor(name, age, studentId) {
        super(name, age); // Appel du constructeur parent
        this.#studentId = studentId;
    }

    #calculateAverage() {
        if (this.#grades.length === 0) return 0;
        const sum = this.#grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.#grades.length;
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 20) {
            this.#grades.push(grade);
        }
    }

    get average() {
        return this.#calculateAverage();
    }

    getStudentInfo() {
        return `${this.name} (ID: ${this.#studentId}) - Moyenne: ${this.average}`;
    }
}

const student = new Student("Bob", 20, "STU001");
student.addGrade(15);
student.addGrade(18);
console.log(student.getStudentInfo());
```
</section>

---

<section>

## 8. Callbacks (Fonctions de Rappel)

**Concept fondamental en JavaScript — similaire aux délégués en C# ou aux callables en PHP**

---
### Architecture de l'Event Loop


<pre>

┌─────────────────────────┐
│   Call Stack (Pile)     │  ← Code en cours d'exécution
└─────────────────────────┘
↓
┌─────────────────────────┐
│   Web APIs              │  ← setTimeout, fetch, DOM events
└─────────────────────────┘
↓
┌─────────────────────────┐
│   Callback Queue        │  ← Callbacks en attente
└─────────────────────────┘
↓
┌─────────────────────────┐
│   Event Loop            │  ← Vérifie si Call Stack est vide
└─────────────────────────┘
</pre>


---

### Définition
Un callback est une fonction passée en argument à une autre fonction, qui sera exécutée plus tard.

---

### Callbacks Simples
```javascript
// Fonction qui accepte un callback
function processData(data, callback) {
    console.log("Traitement des données...");
    const result = data * 2;
    callback(result);
}

// Utilisation avec une fonction nommée
function displayResult(result) {
    console.log(`Résultat: ${result}`);
}

processData(5, displayResult); // "Résultat: 10"

// Utilisation avec une fonction anonyme
processData(10, function(result) {
    console.log(`Résultat: ${result}`);
});

// Utilisation avec une arrow function
processData(15, (result) => console.log(`Résultat: ${result}`));
```
---
### Callbacks dans les Méthodes de Tableaux
```javascript
const numbers = [1, 2, 3, 4, 5];

// map avec callback
const doubled = numbers.map((n) => n * 2);

// filter avec callback
const evens = numbers.filter((n) => n % 2 === 0);

// forEach avec callback
numbers.forEach((n, index) => {
    console.log(`Element ${index}: ${n}`);
});

// reduce avec callback
const sum = numbers.reduce((acc, n) => acc + n, 0);
```
---
### Callbacks Asynchrones
```javascript
// setTimeout avec callback
setTimeout(() => {
    console.log("Exécuté après 2 secondes");
}, 2000);

// Simulation d'appel API avec callback
function fetchUserData(userId, successCallback, errorCallback) {
    setTimeout(() => {
        const success = Math.random() > 0.2;
        if (success) {
            successCallback({ id: userId, name: "Alice" });
        } else {
            errorCallback("Erreur de connexion");
        }
    }, 1000);
}

// Utilisation
fetchUserData(
    123,
    (user) => console.log("Utilisateur:", user),
    (error) => console.error("Erreur:", error)
);
```
---
### Problème du "Callback Hell" et Solutions
```javascript
// Callback Hell (à éviter)
getUserData(userId, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            console.log(details);
        });
    });
});

// Solution avec Promises (voir section suivante)
getUserData(userId)
    .then(user => getOrders(user.id))
    .then(orders => getOrderDetails(orders[0].id))
    .then(details => console.log(details))
    .catch(error => console.error(error));
```
</section>

---

<section>

## 9. Promises

Gestion asynchrone plus élégante - similaire à <mark>Task</mark> en C#.

---

### Définition
Une Promise est un objet représentant l'achèvement (ou l'échec) futur d'une opération asynchrone.

---

### Les 3 états d'une Promise
1. Pending (En attente) → État initial, ni résolue ni rejetée
2. Fulfilled (Résolue) → Opération terminée avec succès
3. Rejected (Rejetée) → Opération échouée

💡 Analogie : Une Promise est comme une commande au restaurant : elle est "en préparation", puis "servie" ou "annulée"

---


```javascript
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ data: "Données récupérées" });
            } else {
                reject("Erreur de récupération");
            }
        }, 1000);
    });
};

// Utilisation
fetchData()
    .then(result => console.log(result.data))
    .catch(error => console.error(error))
    .finally(() => console.log("Terminé"));

// Chaînage
fetchData()
    .then(result => result.data)
    .then(data => data.toUpperCase())
    .then(upperData => console.log(upperData));
```

---

### async/await
async/await est du sucre syntaxique qui rend le code asynchrone ressemblant à du code synchrone.

---

### Déclaration de fonction async
```javascript
// Fonction async retourne automatiquement une Promise
async function chargerDonnees() {
return "Données"; // Équivalent à Promise.resolve("Données")
}

// Utilisation
chargerDonnees().then(console.log); // "Données"

// Fonction fléchée async
const chargerDonnees = async () => {
return "Données";
};
```

---

### await : Attendre une Promise
```javascript
async function afficherUtilisateur() {
    // await "attend" que la Promise soit résolue
    const user = await chargerUtilisateur(1);
    console.log("Utilisateur:", user.nom);
    
    // Le code s'exécute séquentiellement
    const commandes = await chargerCommandes(user.id);
    console.log("Commandes:", commandes.length);
}

afficherUtilisateur();
```

</section>

---



<section>

## 10. DOM et Applications pratiques


---

### Qu'est-ce que le DOM ?
Le DOM est une représentation en arbre de la structure HTML d'une page. JavaScript peut le manipuler pour modifier dynamiquement le contenu, la structure et le style.

---

### Structure du DOM
<pre>
document
  └── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── div#container
          │   ├── h1
          │   └── p.description
          └── ul
              ├── li
              └── li
            </pre>
---

### Sélectionner des éléments
Méthodes de sélection

```javascript
// Par ID (retourne un élément ou null)
const element = document.getElementById('monId');

// Par sélecteur CSS (premier élément trouvé)
const element = document.querySelector('.ma-classe');
const element = document.querySelector('#monId');
const element = document.querySelector('div.container > p');

// Par sélecteur CSS (tous les éléments)
const elements = document.querySelectorAll('.ma-classe');
const elements = document.querySelectorAll('li');

// Anciennes méthodes (moins utilisées)
const elements = document.getElementsByClassName('ma-classe');
const elements = document.getElementsByTagName('div');
```
---
#### Exemples pratiques
```javascript
// HTML: <div id="app"></div>
const app = document.getElementById('app');

// HTML: <button class="btn">Click</button>
const button = document.querySelector('.btn');

// HTML: <li>Item 1</li> <li>Item 2</li>
const items = document.querySelectorAll('li');
console.log(items.length); // 2

// Parcourir une NodeList
items.forEach(item => {
console.log(item.textContent);
});
```
---

### Modifier le contenu
```javascript
const element = document.querySelector('#monElement');

// textContent - texte brut (recommandé)
element.textContent = "Nouveau texte";
console.log(element.textContent);

// innerHTML - HTML (attention XSS !)
element.innerHTML = "<strong>Texte en gras</strong>";

// innerText - texte visible (tient compte du CSS)
element.innerText = "Texte visible";

// value - pour les inputs
const input = document.querySelector('input');
input.value = "Valeur par défaut";
console.log(input.value);
```
---

### Sécurité : Attention à innerHTML
```javascript
// ❌ DANGEREUX avec des données utilisateur
const userInput = "<img src=x onerror='alert(1)'>";
element.innerHTML = userInput; // XSS possible !

// ✅ SÉCURISÉ
element.textContent = userInput; // Affiché comme texte
```
---

### Modifier les attributs et styles

---

### Attributs HTML
```javascript
const link = document.querySelector('a');

// Lire un attribut
const href = link.getAttribute('href');

// Modifier un attribut
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');

// Supprimer un attribut
link.removeAttribute('target');

// Vérifier l'existence
if (link.hasAttribute('href')) {
console.log('Le lien a un href');
}

// Attributs directs
const img = document.querySelector('img');
img.src = 'nouvelle-image.jpg';
img.alt = 'Description de l\'image';
```
---

### Classes CSS
```javascript
const element = document.querySelector('.box');

// Ajouter une classe
element.classList.add('active');

// Retirer une classe
element.classList.remove('hidden');

// Toggle (ajouter si absent, retirer si présent)
element.classList.toggle('visible');

// Vérifier une classe
if (element.classList.contains('active')) {
console.log('Element est actif');
}

// Remplacer une classe
element.classList.replace('old-class', 'new-class');
```
---

### Styles inline
```javascript
const box = document.querySelector('.box');

// Modifier le style
box.style.backgroundColor = 'blue';
box.style.width = '200px';
box.style.display = 'none';

// Plusieurs styles
Object.assign(box.style, {
color: 'white',
fontSize: '16px',
padding: '20px'
});
```
---

### Créer des éléments
```javascript
// Créer un nouvel élément
const div = document.createElement('div');
div.textContent = 'Nouveau div';
div.className = 'box';
div.id = 'monDiv';

// Créer et ajouter au DOM
const container = document.querySelector('#container');
container.appendChild(div); // Ajouter à la fin

// Autres méthodes d'insertion
container.prepend(div);     // Ajouter au début
container.before(div);      // Avant l'élément
container.after(div);       // Après l'élément

// insertAdjacentElement
container.insertAdjacentElement('beforeend', div);
// Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
```
---

### Supprimer des éléments
```javascript
const element = document.querySelector('.to-remove');

// Méthode moderne
element.remove();

// Méthode ancienne
element.parentElement.removeChild(element);

// Vider un conteneur
const container = document.querySelector('#container');
container.innerHTML = ''; // Supprime tout le contenu
```
---



### Événements : addEventListener()
```javascript
const button = document.querySelector('button');

// Écouter un événement
button.addEventListener('click', function(event) {
console.log('Bouton cliqué !');
console.log(event); // Objet événement
});

// Avec fonction fléchée
button.addEventListener('click', (e) => {
console.log('Cliqué !');
});
```
---

### L'objet event
```javascript
button.addEventListener('click', (event) => {
event.preventDefault();  // Empêcher l'action par défaut
event.stopPropagation(); // Arrêter la propagation

    console.log(event.target);      // Élément cliqué
    console.log(event.currentTarget); // Élément avec le listener
    console.log(event.type);        // Type d'événement ('click')
});
```
---

### Événements de formulaire

---

### Gérer la soumission
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
e.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log(data);
    // {nom: "Alice", email: "alice@example.com"}
});
```
---

### Validation en temps réel
```javascript
const emailInput = document.querySelector('#email');
const errorSpan = document.querySelector('#emailError');

emailInput.addEventListener('input', (e) => {
const email = e.target.value;

    if (!email.includes('@')) {
        errorSpan.textContent = 'Email invalide';
        errorSpan.style.color = 'red';
    } else {
        errorSpan.textContent = '';
    }
});
```
---

### Délégation d'événements

---

### Problème : Éléments dynamiques
```javascript
// ❌ Ne fonctionne pas pour les éléments ajoutés après
const buttons = document.querySelectorAll('.delete-btn');
buttons.forEach(btn => {
btn.addEventListener('click', () => {
console.log('Supprimer');
});
});

// Si on ajoute un nouveau bouton après, il n'aura pas de listener
```
---

### ✅ Solution : Délégation d'événements
```javascript
// Écouter sur le parent
const container = document.querySelector('#container');

container.addEventListener('click', (e) => {
// Vérifier si l'élément cliqué correspond
if (e.target.classList.contains('delete-btn')) {
console.log('Bouton supprimer cliqué');
e.target.closest('.item').remove();
}
});
```
---

### Charger et afficher des données avec fetch()
```javascript
async function afficherUtilisateurs() {
const container = document.querySelector('#users');

    // Afficher un loader
    container.innerHTML = '<p>Chargement...</p>';
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        // Vider le container
        container.innerHTML = '';
        
        // Créer les éléments
        users.forEach(user => {
            const div = document.createElement('div');
            div.className = 'user-card';
            div.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <button data-id="${user.id}" class="details-btn">Détails</button>
            `;
            container.appendChild(div);
        });
    } catch (error) {
        container.innerHTML = '<p class="error">Erreur de chargement</p>';
    }
}

// Appeler au chargement de la page
afficherUtilisateurs();
```
---

### Gérer les clics avec les données
```javascript
// Délégation pour les boutons de détails
document.querySelector('#users').addEventListener('click', async (e) => {
if (e.target.classList.contains('details-btn')) {
const userId = e.target.dataset.id;

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const user = await response.json();
            
            alert(`Détails: ${user.name} - ${user.phone}`);
        } catch (error) {
            alert('Erreur lors du chargement des détails');
        }
    }
});
```
---

### Création d'une classe d'événement

**Similaire au pattern Observer en C# et PHP**

---

### Classe EventManager Complète

```javascript
class EventManager {
    #listeners = {};

    /**
     * Enregistre un écouteur pour un événement
     * @param {string} eventName - Nom de l'événement
     * @param {Function} callback - Fonction de rappel
     * @returns {Function} Fonction pour se désabonner
     */
    on(eventName, callback) {
        if (!this.#listeners[eventName]) {
            this.#listeners[eventName] = [];
        }
        
        this.#listeners[eventName].push(callback);
        
        // Retourne une fonction pour se désabonner
        return () => this.off(eventName, callback);
    }

    /**
     * Enregistre un écouteur qui ne s'exécute qu'une seule fois
     * @param {string} eventName - Nom de l'événement
     * @param {Function} callback - Fonction de rappel
     */
    once(eventName, callback) {
        const onceWrapper = (data) => {
            callback(data);
            this.off(eventName, onceWrapper);
        };
        this.on(eventName, onceWrapper);
    }

    /**
     * Retire un écouteur d'un événement
     * @param {string} eventName - Nom de l'événement
     * @param {Function} callback - Fonction de rappel à retirer
     */
    off(eventName, callback) {
        if (!this.#listeners[eventName]) return;
        
        this.#listeners[eventName] = this.#listeners[eventName].filter(
            cb => cb !== callback
        );
    }

    /**
     * Déclenche un événement
     * @param {string} eventName - Nom de l'événement
     * @param {*} data - Données à transmettre aux écouteurs
     */
    emit(eventName, data) {
        if (!this.#listeners[eventName]) return;
        
        this.#listeners[eventName].forEach(callback => {
            try {
                callback(data);
            } catch (error) {
                console.error(`Erreur dans l'écouteur de ${eventName}:`, error);
            }
        });
    }

    /**
     * Retire tous les écouteurs d'un événement (ou tous si pas de nom)
     * @param {string} eventName - Nom de l'événement (optionnel)
     */
    clear(eventName) {
        if (eventName) {
            delete this.#listeners[eventName];
        } else {
            this.#listeners = {};
        }
    }

    /**
     * Obtient le nombre d'écouteurs pour un événement
     * @param {string} eventName - Nom de l'événement
     * @returns {number}
     */
    listenerCount(eventName) {
        return this.#listeners[eventName]?.length || 0;
    }

    /**
     * Retourne tous les noms d'événements enregistrés
     * @returns {string[]}
     */
    eventNames() {
        return Object.keys(this.#listeners);
    }
}
```

---

```javascript
// Utilisation de base
const eventManager = new EventManager();

// Enregistrer un écouteur
const unsubscribe = eventManager.on('userLogin', (data) => {
    console.log(`Utilisateur ${data.username} connecté`);
});

// Déclencher l'événement
eventManager.emit('userLogin', { username: 'Alice', timestamp: Date.now() });

// Se désabonner
unsubscribe();

// Écouteur unique
eventManager.once('appReady', () => {
    console.log('Application prête!');
});
```
</section>

---

<section>

## 11. Modules

Import et export de code entre fichiers — similaire aux namespaces en C# et aux namespaces en PHP.
Les Modules ES (`.js` ou `.mjs`) sont la méthode standard pour organiser le code en fichiers réutilisables, offrant un véritable *scope* privé.

---

### api.js (Export)
```javascript
// Exportation nommée
export const API_URL = '...';

// Exportation par défaut
export default class UserService {
    // ... classe contenant la logique Fetch ...
}
```

---

### main.js (Import)
```javascript
// Importation nommée
import { API_URL } from './api.js';

// Importation par défaut (nom au choix)
import UserService from './api.js';

// Nécessite dans le HTML
<script type="module" src="main.js"></script>
```
---

### Adapter le Modèle-Vue-Contrôleur
Nous séparons les responsabilités en utilisant les classes et les modules ES pour créer trois couches distinctes :

---
<div class="size"> 

| Composant                   | Rôle Principal                                                | Implémentation JS                          |
|-----------------------------|---------------------------------------------------------------|--------------------------------------------|
| **Modèle (Model)**          | Gère les données (CRUD via Fetch). Source de vérité.          | **Classes POO**                            |
| **Vue (View)**              | Gère l'affichage (DOM) et les interactions utilisateur.       | **DOM** / `Event Listeners`                |
| **Contrôleur (Controller)** | Fait le lien, gère les flux d'événements et les mises à jour. | Fonction d'initialisation et **Callbacks** |

</div>



</section>

---

## Bonnes Pratiques pour Développeurs PHP/C#

<div class="size">

1. **Utilisez des propriétés privées (`#`)** comme en C# et PHP
2. **Préférez les callbacks nommés** pour la lisibilité
3. **Structurez votre code en MVC** comme vous le feriez en C# ou PHP
4. **Utilisez l'encapsulation** avec getters/setters
5. **Privilégiez les Promises** aux callbacks imbriqués
6. **Organisez votre code en modules** (un fichier par classe)
7. **Documentez vos callbacks** avec JSDoc (similaire à PHPDoc)

</div>

---

## Comparaison avec PHP et C#

<div class="size">

| Concept          | JavaScript ES6     | C#                      | PHP              |
|------------------|--------------------|-------------------------|------------------|
| Propriété privée | `#prop`            | `private Type prop`     | `private $prop`  |
| Callback         | `(param) => {}`    | `Action<T>` / `Func<T>` | `callable`       |
| Promise          | `Promise`          | `Task`                  | Promise (8.0+)   |
| Événement        | `addEventListener` | `event` / `delegate`    | Observer pattern |
| Classe           | `class MyClass`    | `class MyClass`         | `class MyClass`  |

</div>

---

## Conclusion

ES6 offre toutes les fonctionnalités que vous connaissez en PHP et C# : encapsulation, callbacks, architecture MVC et gestion d'événements. La principale différence réside dans la syntaxe et le modèle asynchrone natif de JavaScript.

Continuez à pratiquer ces concepts pour maîtriser le développement JavaScript moderne !

---

# ↩️

#### [Start over]({{ "/index" | url }})
