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

# Cours ES6 (ECMAScript 2015) pour Développeurs PHP et C#

## Introduction
ES6, également appelé ECMAScript 2015, est une mise à jour majeure de JavaScript qui a introduit de nombreuses fonctionnalités modernes similaires à celles que vous connaissez en PHP et C#.

---
<section>

## 1. Let et Const

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

## 2. Arrow Functions (Fonctions Flèches)

Syntaxe plus concise pour les fonctions avec comportement différent du `this`.

```javascript
// Syntaxe classique
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Avec un seul paramètre
const double = x => x * 2;

// Avec plusieurs lignes
const complexFunction = (x, y) => {
    const result = x + y;
    return result * 2;
};
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

Chaînes de caractères avec interpolation — similaire à `${}` en PHP ou `$""` en C#.

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

---

### Tableaux
```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Ignorer des valeurs
const [, , third] = numbers;
console.log(third); // 3
```

</section>

---

## 5. Paramètres par Défaut

```javascript
function greet(name = "Invité", greeting = "Bonjour") {
    return `${greeting}, ${name}!`;
}

console.log(greet()); // "Bonjour, Invité!"
console.log(greet("Alice")); // "Bonjour, Alice!"
console.log(greet("Bob", "Salut")); // "Salut, Bob!"
```

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

## 9. Promises

Gestion asynchrone plus élégante - similaire à `Task` en C#.

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
## 10. EventManager - Classe de Gestion d'Événements

**Similaire au pattern Observer en C# et PHP**

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

---
<section>

## 11. Architecture MVC et Gestion d'Événements

### Pattern MVC en JavaScript

---
### Model
```javascript
// MODEL - Gestion des données
class TaskModel {
    #tasks = [];
    #eventManager;

    constructor(eventManager) {
        this.#eventManager = eventManager;
    }

    addTask(task) {
        const newTask = {
            id: Date.now(),
            text: task,
            completed: false,
            createdAt: new Date()
        };

        this.#tasks.push(newTask);

        // Émettre l'événement
        this.#eventManager.emit(AppEventManager.EVENTS.TASK_ADDED, newTask);
        this.#eventManager.emit(AppEventManager.EVENTS.TASK_UPDATED, this.#tasks);
    }

    removeTask(id) {
        const task = this.#tasks.find(t => t.id === id);
        if (!task) return;

        this.#tasks = this.#tasks.filter(t => t.id !== id);

        this.#eventManager.emit(AppEventManager.EVENTS.TASK_REMOVED, task);
        this.#eventManager.emit(AppEventManager.EVENTS.TASK_UPDATED, this.#tasks);
    }

    toggleTask(id) {
        const task = this.#tasks.find(t => t.id === id);
        if (!task) return;

        task.completed = !task.completed;

        this.#eventManager.emit(AppEventManager.EVENTS.TASK_TOGGLED, task);
        this.#eventManager.emit(AppEventManager.EVENTS.TASK_UPDATED, this.#tasks);
    }

    getTasks() {
        return [...this.#tasks];
    }

    getStats() {
        return {
            total: this.#tasks.length,
            completed: this.#tasks.filter(t => t.completed).length,
            pending: this.#tasks.filter(t => !t.completed).length
        };
    }
}
```
---
### Vue
```javascript
// VIEW - Interface utilisateur
class TaskView {
    #eventManager;
    #domListener;

    constructor(eventManager) {
        this.#eventManager = eventManager;
        this.#domListener = new DOMEventListener(eventManager);

        this.taskList = document.getElementById('task-list');
        this.taskInput = document.getElementById('task-input');
        this.addButton = document.getElementById('add-button');
        this.statsDisplay = document.getElementById('stats');
        this.notification = document.getElementById('notification');

        this.#bindDOMEvents();
    }

    #bindDOMEvents() {
        // Bouton d'ajout
        this.#domListener.listen(
            this.addButton,
            'click',
            'view:addTask',
            () => this.taskInput.value.trim()
        );

        // Touche Enter dans l'input
        this.#domListener.attach(this.taskInput, 'keypress', (e) => {
            if (e.key === 'Enter') {
                const text = this.taskInput.value.trim();
                if (text) {
                    this.#eventManager.emit('view:addTask', text);
                    this.taskInput.value = '';
                }
            }
        });

        // Délégation pour les boutons de suppression
        this.#domListener.delegate(
            this.taskList,
            'click',
            '.delete-btn',
            function() {
                const id = parseInt(this.closest('.task-item').dataset.id);
                this.#eventManager.emit('view:deleteTask', id);
            }.bind(this)
        );

        // Délégation pour les boutons toggle
        this.#domListener.delegate(
            this.taskList,
            'click',
            '.toggle-btn',
            function() {
                const id = parseInt(this.closest('.task-item').dataset.id);
                this.#eventManager.emit('view:toggleTask', id);
            }.bind(this)
        );
    }

    render(tasks) {
        this.taskList.innerHTML = tasks.map(task => ` div class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}"> span class="task-text">${task.text} /span> div class="task-actions"> button class="toggle-btn">✓ /button> button class="delete-btn">✗ /button> /div> /div>
        `).join('');
    }

    renderStats(stats) {
        this.statsDisplay.innerHTML = ` div class="stats"> span>Total: ${stats.total} /span> span>Terminées: ${stats.completed} /span> span>En cours: ${stats.pending} /span> /div>
        `;
    }

    showNotification(message, type = 'info') {
        this.notification.textContent = message;
        this.notification.className = `notification ${type}`;
        this.notification.style.display = 'block';

        setTimeout(() => {
            this.notification.style.display = 'none';
        }, 3000);
    }

    destroy() {
        this.#domListener.destroy();
    }
}
  ```
---
### DOMEventListener
 ```javascript
class DOMEventListener {
    #eventManager;
    #listeners = [];

    constructor(eventManager) {
        this.#eventManager = eventManager;
    }

    /**
     * Attache un écouteur à un élément
     * @param {HTMLElement} element - Élément DOM
     * @param {string} eventType - Type d'événement (click, input, etc.)
     * @param {Function} handler - Fonction de rappel
     */
    attach(element, eventType, handler) {
        element.addEventListener(eventType, handler);
        this.#listeners.push({ element, eventType, handler });
    }

    /**
     * Délégation d'événements
     * @param {HTMLElement} container - Conteneur parent
     * @param {string} eventType - Type d'événement
     * @param {string} selector - Sélecteur CSS
     * @param {Function} callback - Fonction de rappel
     */
    delegate(container, eventType, selector, callback) {
        const handler = (e) => {
            const target = e.target.closest(selector);
            if (target && container.contains(target)) {
                callback.call(target, e);
            }
        };
        
        this.attach(container, eventType, handler);
    }

    /**
     * Écoute un événement et émet via EventManager
     * @param {HTMLElement} element - Élément DOM
     * @param {string} domEvent - Événement DOM
     * @param {string} appEvent - Nom de l'événement application
     * @param {Function} dataExtractor - Fonction pour extraire les données
     */
    listen(element, domEvent, appEvent, dataExtractor = (e) => e) {
        const handler = (e) => {
            const data = dataExtractor(e);
            this.#eventManager.emit(appEvent, data);
        };
        
        this.attach(element, domEvent, handler);
    }

    /**
     * Nettoie tous les écouteurs
     */
    destroy() {
        this.#listeners.forEach(({ element, eventType, handler }) => {
            element.removeEventListener(eventType, handler);
        });
        this.#listeners = [];
    }
}
 ```  

---
### CONTROLLER
 ```javascript
// CONTROLLER - Logique de contrôle
class TaskController {
    #model;
    #view;
    #eventManager;

    constructor(model, view, eventManager) {
        this.#model = model;
        this.#view = view;
        this.#eventManager = eventManager;

        this.#bindModelEvents();
        this.#bindViewEvents();
        this.#initialize();
    }

    #bindModelEvents() {
        // Écouter les événements du modèle
        this.#eventManager.on(AppEventManager.EVENTS.TASK_ADDED, (task) => {
            this.#view.showNotification(`Tâche ajoutée: ${task.text}`, 'success');
        });

        this.#eventManager.on(AppEventManager.EVENTS.TASK_REMOVED, (task) => {
            this.#view.showNotification(`Tâche supprimée: ${task.text}`, 'info');
        });

        this.#eventManager.on(AppEventManager.EVENTS.TASK_TOGGLED, (task) => {
            const status = task.completed ? 'terminée' : 'en cours';
            this.#view.showNotification(`Tâche ${status}`, 'info');
        });

        this.#eventManager.on(AppEventManager.EVENTS.TASK_UPDATED, () => {
            this.#updateView();
        });

        this.#eventManager.on(AppEventManager.EVENTS.ERROR, (error) => {
            this.#view.showNotification(error.message, 'error');
        });
    }

    #bindViewEvents() {
        // Écouter les événements de la vue
        this.#eventManager.on('view:addTask', (text) => {
            this.#handleAddTask(text);
        });

        this.#eventManager.on('view:deleteTask', (id) => {
            this.#handleDeleteTask(id);
        });

        this.#eventManager.on('view:toggleTask', (id) => {
            this.#handleToggleTask(id);
        });
    }

    #handleAddTask(text) {
        try {
            if (text.length < 3) {
                throw new Error('La tâche doit contenir au moins 3 caractères');
            }
            this.#model.addTask(text);
        } catch (error) {
            this.#eventManager.emit(AppEventManager.EVENTS.ERROR, error);
        }
    }

    #handleDeleteTask(id) {
        this.#model.removeTask(id);
    }

    #handleToggleTask(id) {
        this.#model.toggleTask(id);
    }

    #updateView() {
        const tasks = this.#model.getTasks();
        const stats = this.#model.getStats();

        this.#view.render(tasks);
        this.#view.renderStats(stats);
    }

    #initialize() {
        this.#updateView();
        this.#eventManager.emit(AppEventManager.EVENTS.TASKS_LOADED);
    }
}

// INITIALISATION DE L'APPLICATION
const eventManager = new AppEventManager();
const taskModel = new TaskModel(eventManager);
const taskView = new TaskView(eventManager);
const taskController = new TaskController(taskModel, taskView, eventManager);

// Écouter l'événement de chargement (exemple)
eventManager.on(AppEventManager.EVENTS.TASKS_LOADED, () => {
    console.log('Application de gestion de tâches chargée');
});
```
---

### Capture d'Événements et Event Bubbling

```javascript
// Capture et Bubbling
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent cliqué');
}, false); // false = bubbling (défaut)

document.getElementById('child').addEventListener('click', () => {
    console.log('Child cliqué');
}, false);

// Avec capture (useCapture = true)
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent capturé');
}, true); // true = capture

// Empêcher la propagation
document.getElementById('child').addEventListener('click', (e) => {
    e.stopPropagation(); // Arrête le bubbling
    console.log('Child cliqué sans propagation');
});

// Empêcher l'action par défaut
document.getElementById('link').addEventListener('click', (e) => {
    e.preventDefault(); // Empêche la navigation
    console.log('Navigation annulée');
});
```
---
### Événements Personnalisés (Custom Events)

```javascript
// Créer un événement personnalisé
class EventEmitter {
    #events = {};

    on(event, callback) {
        if (!this.#events[event]) {
            this.#events[event] = [];
        }
        this.#events[event].push(callback);
    }

    off(event, callback) {
        if (this.#events[event]) {
            this.#events[event] = this.#events[event].filter(cb => cb !== callback);
        }
    }

    emit(event, data) {
        if (this.#events[event]) {
            this.#events[event].forEach(callback => callback(data));
        }
    }
}

// Utilisation
class UserService extends EventEmitter {
    login(username, password) {
        // Logique de connexion...
        this.emit('login', { username, timestamp: Date.now() });
    }

    logout() {
        this.emit('logout', { timestamp: Date.now() });
    }
}

const userService = new UserService();

// Écouter les événements avec callbacks
userService.on('login', (data) => {
    console.log(`Utilisateur ${data.username} connecté à ${data.timestamp}`);
});

userService.on('logout', (data) => {
    console.log(`Déconnexion à ${data.timestamp}`);
});

userService.login('alice', 'password123');
```
---
### Délégation d'Événements (Event Delegation)

```javascript
// Efficace pour les listes dynamiques
document.getElementById('task-list').addEventListener('click', (e) => {
    // Délégation : un seul listener pour tous les éléments
    if (e.target.classList.contains('delete-btn')) {
        const taskId = e.target.dataset.id;
        deleteTask(taskId);
    } else if (e.target.classList.contains('edit-btn')) {
        const taskId = e.target.dataset.id;
        editTask(taskId);
    }
});
```
</section>

---

## 11. Modules

Import et export de code entre fichiers — similaire aux namespaces en C# et aux namespaces en PHP.

```javascript
// fichier: models/TaskModel.js
export class TaskModel {
    // ... code de la classe
}

// fichier: views/TaskView.js
export class TaskView {
    // ... code de la classe
}

// fichier: controllers/TaskController.js
import { TaskModel } from '../models/TaskModel.js';
import { TaskView } from '../views/TaskView.js';

export class TaskController {
    // ... code de la classe
}

// fichier: main.js
import { TaskController } from './controllers/TaskController.js';
import { TaskModel } from './models/TaskModel.js';
import { TaskView } from './views/TaskView.js';

const app = new TaskController(new TaskModel(), new TaskView());
```

---
<section>

## 12. Méthodes de Tableaux avec Callbacks

### map()
Transforme chaque élément d'un tableau.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]

// Avec index et tableau complet
const withIndex = numbers.map((n, index, array) => {
    return { value: n, index, total: array.length };
});
```
---
### filter()
Filtre les éléments selon une condition.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0); // [2, 4, 6]
```
---
### reduce()
Réduit un tableau à une seule valeur.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0); // 10

// Exemple complexe : grouper par propriété
const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Charlie", role: "admin" }
];

const byRole = users.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = [];
    }
    acc[user.role].push(user);
    return acc;
}, {});
// { admin: [...], user: [...] }
```
---
### find() et findIndex()
```javascript
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

const user = users.find(u => u.id === 2); // { id: 2, name: "Bob" }
const index = users.findIndex(u => u.id === 2); // 1
```
---
### some() et every()
```javascript
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(n => n % 2 === 0); // true
const allPositive = numbers.every(n => n > 0); // true
```
</section>

---

## 13. Exemple Complet : Application MVC avec Événements

```javascript
// app.js - Application complète de gestion de produits

// MODEL
class ProductModel {
    #products = [];
    #callbacks = { change: [], add: [], remove: [] };

    addProduct(name, price) {
        const product = {
            id: Date.now(),
            name,
            price: parseFloat(price),
            quantity: 1
        };
        this.#products.push(product);
        this.#trigger('add', product);
        this.#trigger('change', this.#products);
    }

    removeProduct(id) {
        const removed = this.#products.find(p => p.id === id);
        this.#products = this.#products.filter(p => p.id !== id);
        this.#trigger('remove', removed);
        this.#trigger('change', this.#products);
    }

    updateQuantity(id, quantity) {
        const product = this.#products.find(p => p.id === id);
        if (product) {
            product.quantity = quantity;
            this.#trigger('change', this.#products);
        }
    }

    getProducts() {
        return [...this.#products];
    }

    getTotal() {
        return this.#products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
    }

    // Système d'événements avec callbacks
    on(event, callback) {
        if (this.#callbacks[event]) {
            this.#callbacks[event].push(callback);
        }
    }

    #trigger(event, data) {
        if (this.#callbacks[event]) {
            this.#callbacks[event].forEach(callback => callback(data));
        }
    }
}

// VIEW
class ProductView {
    constructor() {
        this.productList = document.getElementById('product-list');
        this.totalDisplay = document.getElementById('total');
        this.nameInput = document.getElementById('product-name');
        this.priceInput = document.getElementById('product-price');
        this.addButton = document.getElementById('add-product');
    }

    render(products, total) {
        // Rendu de la liste
        this.productList.innerHTML = products.map(product => `
            <div class="product-item" data-id="${product.id}">
                <span>${product.name} - ${product.price}€</span>
                <input type="number" value="${product.quantity}" 
                       class="quantity-input" min="1">
                <button class="remove-btn">Supprimer</button>
            </div>
        `).join('');

        // Affichage du total
        this.totalDisplay.textContent = `Total: ${total.toFixed(2)}€`;
    }

    bindAddProduct(handler) {
        const addProduct = () => {
            const name = this.nameInput.value.trim();
            const price = this.priceInput.value;
            if (name && price) {
                handler(name, price);
                this.nameInput.value = '';
                this.priceInput.value = '';
            }
        };

        this.addButton.addEventListener('click', addProduct);
        this.priceInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addProduct();
        });
    }

    bindRemoveProduct(handler) {
        this.productList.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-btn')) {
                const id = parseInt(e.target.closest('.product-item').dataset.id);
                handler(id);
            }
        });
    }

    bindUpdateQuantity(handler) {
        this.productList.addEventListener('change', (e) => {
            if (e.target.classList.contains('quantity-input')) {
                const id = parseInt(e.target.closest('.product-item').dataset.id);
                const quantity = parseInt(e.target.value);
                handler(id, quantity);
            }
        });
    }
}

// CONTROLLER
class ProductController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Callbacks pour les événements de la vue
        this.view.bindAddProduct(this.handleAddProduct.bind(this));
        this.view.bindRemoveProduct(this.handleRemoveProduct.bind(this));
        this.view.bindUpdateQuantity(this.handleUpdateQuantity.bind(this));

        // Callbacks pour les événements du modèle
        this.model.on('change', this.onProductsChanged.bind(this));
        this.model.on('add', this.onProductAdded.bind(this));
        this.model.on('remove', this.onProductRemoved.bind(this));

        // Rendu initial
        this.updateView();
    }

    handleAddProduct(name, price) {
        this.model.addProduct(name, price);
    }

    handleRemoveProduct(id) {
        if (confirm('Supprimer ce produit ?')) {
            this.model.removeProduct(id);
        }
    }

    handleUpdateQuantity(id, quantity) {
        this.model.updateQuantity(id, quantity);
    }

    onProductsChanged(products) {
        this.updateView();
    }

    onProductAdded(product) {
        console.log('Produit ajouté:', product);
        this.showNotification(`${product.name} ajouté au panier`);
    }

    onProductRemoved(product) {
        console.log('Produit supprimé:', product);
        this.showNotification(`${product.name} supprimé du panier`);
    }

    updateView() {
        const products = this.model.getProducts();
        const total = this.model.getTotal();
        this.view.render(products, total);
    }

    showNotification(message) {
        // Notification simple
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }
}

// Initialisation
const app = new ProductController(
    new ProductModel(),
    new ProductView()
);
```

---

## Exercices Pratiques

### Exercice 1 : Classe avec Propriétés Privées
Créer une classe `User` avec des propriétés privées `#email` et `#password`, et des méthodes publiques pour la validation.

### Exercice 2 : MVC Simple
Créer une application de compteur avec architecture MVC et gestion d'événements.

### Exercice 3 : Callbacks et Promises
Convertir une fonction utilisant des callbacks en fonction retournant une Promise.

### Exercice 4 : Event Delegation
Implémenter une liste de tâches avec délégation d'événements pour optimiser les performances.

---

## Bonnes Pratiques pour Développeurs PHP/C#

1. **Utilisez des propriétés privées (`#`)** comme en C# et PHP
2. **Préférez les callbacks nommés** pour la lisibilité
3. **Structurez votre code en MVC** comme vous le feriez en C# ou PHP
4. **Utilisez l'encapsulation** avec getters/setters
5. **Privilégiez les Promises** aux callbacks imbriqués
6. **Organisez votre code en modules** (un fichier par classe)
7. **Documentez vos callbacks** avec JSDoc (similaire à PHPDoc)

---

## Comparaison avec PHP et C#

| Concept          | JavaScript ES6     | C#                      | PHP              |
|------------------|--------------------|-------------------------|------------------|
| Propriété privée | `#prop`            | `private Type prop`     | `private $prop`  |
| Callback         | `(param) => {}`    | `Action<T>` / `Func<T>` | `callable`       |
| Promise          | `Promise`          | `Task`                  | Promise (8.0+)   |
| Événement        | `addEventListener` | `event` / `delegate`    | Observer pattern |
| Classe           | `class MyClass`    | `class MyClass`         | `class MyClass`  |

---

## Conclusion

ES6 offre toutes les fonctionnalités que vous connaissez en PHP et C# : encapsulation, callbacks, architecture MVC et gestion d'événements. La principale différence réside dans la syntaxe et le modèle asynchrone natif de JavaScript.

Continuez à pratiquer ces concepts pour maîtriser le développement JavaScript moderne !
