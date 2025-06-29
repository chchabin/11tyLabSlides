---
title: "Droits"
date: 2022-12-27T20:23:39+01:00

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
</style>

# Langage de contrôle de données SQL (LCD)

---

## Définition
Le LCD permet de créer les utilisateurs et de définir leurs droits sur les objets de la BD de façon déclarative. 
Il permet notamment l'attribution et la révocation de droits à des utilisateurs, sur l'ensemble des bases du SGBD, sur une BD en particulier, sur des relations d'une BD, voire sur certains attributs seulement d'une relation.

---

## Créer un utilisateur dans SQL Express

Exemple 1

```sql
CREATE LOGIN AbolrousHazem WITH PASSWORD = '340$Uuxwp7Mcxo7Khy';

CREATE USER AbolrousHazem FOR LOGIN AbolrousHazem;
```

---

## Créer un utilisateur dans SQL Express

Exemple 2

```sql
CREATE LOGIN NomUtilisateur WITH PASSWORD = 'MotDePasse123!', DEFAULT_DATABASE = MaBaseDeDonnees

-- Puis créer l'utilisateur dans la base de données
USE MaBaseDeDonnees
CREATE USER NomUtilisateur FOR LOGIN NomUtilisateur
```

---

### Créer un utilisateur nommé "dupuid" avec le mot de passe "titi" et restreint au domaine "lycee"
### Pour SQL Server

```sql
- 1. Créer la connexion
CREATE LOGIN dupuid WITH PASSWORD = 'titi',DEFAULT_DATABASE = MaBaseDeDonnees

-- 2. Créer l'utilisateur dans la base de données
USE MaBaseDeDonnees CREATE USER dupuid FOR LOGIN dupuid

-- 3. Configuration des permissions Limiter aux tables du schéma 'lycee'
USE MaBaseDeDonnees
GRANT SELECT, INSERT, UPDATE ON SCHEMA::lycee TO dupuid
```

---

### Créer un utilisateur nommé "dupuid" avec le mot de passe "titi" et restreint au domaine "lycee"
### Pour MYSQL

```sql
--1. Créer l'utilisateur avec un mot de passe
CREATE USER 'dupuid'@'lycee.local' IDENTIFIED BY 'titi';
-- 2. Donner des permissions spécifiques
GRANT SELECT, INSERT, UPDATE ON ma_base_lycee.* TO 'dupuid'@'lycee.local';
```

---

## Attribution de droits

SQL propose une commande pour attribuer des droits à des utilisateurs sur des tables.

```sql
GRANT <liste de droits> ON <nom table> TO <utilisateur> [WITH GRANT OPTION]
```

---

Les droits disponibles renvoient directement aux instructions SQL que l'utilisateur peut exécuter :

- SELECT

- INSERT

- DELETE

- UPDATE

- ALTER

De plus il est possible de spécifier le droit <mark>ALL PRIVILEGES</mark> qui donne tous les droits à l'utilisateur (sauf celui de transmettre ses droits).

---

## Exemple


1. Autoriser l’utilisateur Util1 à afficher les données de la table CLIENTS :
```sql
GRANT SELECT ON CLIENTS TO Util1;
```
2. Autoriser l’utilisateur Util3 à afficher et mettre à jour les données de la table CLIENTS
```sql
GRANT SELECT,UPDATE ON CLIENTS TO Util3;
```

---
La clause <mark>WITH GRANT OPTION</mark> est optionnelle, elle permet de préciser que l'utilisateur a le droit de transférer ses propres droits sur la table à d'autres utilisateurs. 
Une telle clause permet une gestion décentralisée de l'attribution des droits et non reposant uniquement dans les mains d'un administrateur unique.

La spécification <mark>PUBLIC</mark> à la place d'un nom d'utilisateur permet de donner les droits spécifiés à tous les utilisateurs de la BD.

---

## Exemple

3. Autoriser l’utilisateur Util1 à mettre à jour les données de la table CLIENTS. Il pourra distribuer son privilège :
```sql
GRANT INSERT,UPDATE,DELETE ON CLIENTS TO Util1 WITH GRANT OPTION;
```
4. L'utilisateur Util1 donne à l'utilisateur Util2 le droit de mettre à jour la table Client
```sql
GRANT UPDATE ON Client TO Util2;
```
5. Autorise les utilisateurs à lire la table EMPLOYES
```sql
GRANT UPDATE ON EMPLOYES TO PUBLIC;
```
---
## Révocation de droits
```sql
REVOKE <liste de droits> ON <nom table> FROM <utilisateur>
```

---

## Exemple

```sql
REVOKE SELECT, UPDATE ON Personne FROM Pierre;
REVOKE ALL PRIVILEGES ON Adresse FROM PUBLIC;
```
1. Supprimer à Util1 le privilège de sélection de la table CLIENTS
```sql
REVOKE SELECT ON CLIENTS FROM Util1
```

---
## Révocation du droit de donner les droits

Pour retirer les droits de donner les droits à un utilisateur (qui l'a donc obtenu par la clause <mark>WITH GRANT OPTION</mark>), il
faut utiliser la valeur <mark>GRANT OPTION</mark> dans la liste des droits révoqués.

---

## Exemple
2. Supprimer à Util1 la possibilité de transmettre la sélection de la table COMPTEUR
```sql
REVOKE GRANT OPTION FOR SELECT ON COMPTEUR FROM Util1;
```

---

## Révocation en <mark>cascade</mark>
Lorsque qu'un droit est supprimé pour un utilisateur, il l'est également pour tous les utilisateurs qui avaient obtenu ce même droit par l'utilisateur en question.

---

## Exemple

3. Supprimer à Util1 le privilège de sélection de la table CLIENTS ainsi qu'à ceux qu’il a distribués
```sql
REVOKE SELECT ON CLIENTS FROM Util1 cascade;
```

---

Vous avez effectué cet ordre
```sql
GRANT SELECT ON CLIENTS TO PUBLIC;
```
quel sera le résultat de celui-ci ? `
```sql
REVOKE SELECT ON CLIENTS FROM Util1;
```
---

# Les Rôles

---

Créer des rôles dans la base de données permet de gérer l'accès aux resources de manière plus structurée et sécurisée.
Nous verrons le cas de SqlServer, les instructions sont parfois différentes dans d'autres bases de données.

---

## Créer un rôle dans une base de données
```sql
CREATE  ROLE <nom du rôle>;
```

---

## Ajouter un utilisateur au rôle
```sql
ALTER ROLE <nom du rôle> ADD MEMBER <nom utilisateur>;
```
---
## Accorder des privilèges au rôle
Accorder des privilèges Lecture à la table CLIENTS au rôle gestionnaire
```sql
GRANT SELECT ON CLIENTS TO gestionnaire;
```
---
## Révoquer des privilèges ou supprimer des utilisateurs d'un rôle
Révoquer un privilège d'un rôle
```sql
REVOKE SELECT ON CLIENTS FROM gestionnaire;;
```

Supprimer un utilisateur d'un rôle
```sql
ALTER ROLE gestionnaire DROP MEMBER util1;
```
Supprimer un rôle
```sql
DROP ROLE gestionnaire;
```
---

# ↩️

#### [Start over](/index)