---
title: "Transactions"
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
# Les transactions

---

## Définition

Une transaction est une unité logique de travail, c'est-à-dire une séquence d'instructions, dont l'exécution assure le passage de la base de données d'un état cohérent à un autre état cohérent.

Il faut distinguer deux types de transaction :
1. les triggers 
2. les procédures stockées

---

## Les triggers

Ils s'exécutent automatiquement en réponse à des évènements DML (DELETE, UPDATE, INSERT) ou d'autres évènements sur la base de données et sont principalement utilisés pour des actions liées à la gestion des données ou des règles de gestion.

---

## Les procédures stockées
Elles sont exécutées manuellement, elles encapsulent des processus.

---

## Déroulement d'une transaction

1. DEBUT
2. TRAITEMENT
    - Accès aux données en lecture
    - Accès aux données en écriture
3. FIN
   - Correcte : Validation des modifications
   - Incorrecte : Annulation des modifications

---

<section>

# Les triggers

---

Les triggers (ou déclencheurs en français) sont des objets de base de données qui permettent d'automatiser l'exécution de certaines actions lorsqu'un événement spécifique se produit au niveau d'une table ou d'une vue dans une base de données. 
Ces événements peuvent inclure des opérations telles que : INSERT, UPDATE ou DELETE. 

Les triggers sont souvent utilisés pour garantir l'intégrité des données, effectuer des audits, ou encore pour déclencher des actions automatisées.

---
## Structure d'un Trigger
Un trigger se compose généralement de trois éléments principaux :

<mark>Événement déclencheur</mark> : Ce qui déclenche l'exécution du trigger (par exemple, une insertion, une mise à jour ou une suppression).

<mark>Condition (optionnelle)</mark> : Une clause qui détermine si l'action du trigger doit être exécutée.

<mark>Action</mark> : Le code (souvent en SQL) qui sera exécuté lorsque l'événement déclencheur se produit.

---

## Structure
```sql
CREATE TRIGGER nom_trigger BEFORE|AFTER evenement ON nom_table 
FOR EACH ROW 
BEGIN
 Instructions ;
END
```


---
## Types de Triggers

<mark>Before Triggers</mark> : S'exécutent avant que l'opération (INSERT, UPDATE, DELETE) ne soit réalisée sur la table.
 > Utilisés pour valider ou modifier les données avant qu'elles ne soient enregistrées dans la base de données.

---

<mark>After Triggers</mark> : S'exécutent après que l'opération (INSERT, UPDATE, DELETE) a été réalisée.
>Utilisés pour des actions comme l'enregistrement des logs ou la mise à jour de tables liées.

---

<mark>Instead Of Triggers</mark> (uniquement sur certaines bases de données comme SQL Server) : Remplacent l'opération (INSERT, UPDATE, DELETE) standard par une opération définie dans le trigger.
>Utilisés généralement sur des vues pour gérer des opérations qui ne sont pas normalement possibles.

---

## Cas d'Utilisation des Triggers
<div class="size">
<mark>Audit</mark> : Enregistrer automatiquement des logs pour les modifications apportées aux tables (historique des modifications).

<mark>Validation des données</mark> : Empêcher l'insertion ou la mise à jour de données incorrectes.

<mark>Automatisation</mark> : Mise à jour automatique d'une autre table en cas de modification (par exemple, mise à jour d'un stock lors d'une vente).

<mark>Sécurité</mark> : Restreindre ou surveiller l'accès à certaines données sensibles.
</div>

---

## Avantages :
<mark>Automatisation</mark> des tâches répétitives.

<mark>Assurance de l'intégrité des données</mark> en imposant des règles métier directement au niveau de la base de données.

<mark>Audit et historique</mark> des modifications de données.

---

## Inconvénients
<mark>Complexité accrue</mark> du code, surtout si plusieurs triggers interagissent entre eux.

<mark>Impact sur les performances</mark> si les triggers sont utilisés de manière excessive ou inappropriée.

<mark>Débogage difficile</mark>, car les triggers s'exécutent automatiquement en arrière-plan.

---

## Bonnes Pratiques
- Utiliser les triggers avec modération pour éviter de compliquer la logique de la base de données.
- Documenter les triggers pour faciliter leur compréhension et leur maintenance.
- Tester rigoureusement les triggers pour s'assurer qu'ils ne provoquent pas de comportements indésirables.

---



## Remarques

<mark>Deleted</mark> définit la table d'origine (c'est old en mysql)

>le triggers sur INSERT ne peuvent pas faire référence à <mark>Deleted</mark>

<mark>Inserted</mark> définit la table modifiée (c'est new en mysql)

>le triggers sur DELETE ne peuvent pas faire référence à <mark>Inserted</mark>

---

## Les Variables locales

Elles sont déclarées après DECLARE avec leur nom, leur type, et
éventuellement leur valeur par défaut :

DECLARE @MaVariable1 INT DEFAULT 1;

---

## Les Variables de session
Les variables ne sont stockées en mémoire que pour la durée de la session.

### Avec sql server
- SET @var = 'toto';
- SET @'ma var' = 3;
- SET @var = 3 + 1;


---

## Avec Mysql

- SET @var := 'toto';
- SET @'ma var' := 3;
- SET @var := 3 + 1;

- SELECT attr FROM ... WHERE ... INTO @var;
- SELECT @var := attr, ... FROM ... WHERE ...;

Attention l'affectation se fait sur := et non pas sur =, qui teste une égalité booléenne. La
variable stockée est réutilisable partout dans les requêtes (SELECT @var;).

---

## Blocs de contrôle

- IF test THEN ...;
- ELSE ...;
- END IF;

---

## Exemple
```sql
-- Création du trigger d'insertion
CREATE TRIGGER trg_AfterInsertCommandes
    ON Commandes
    AFTER INSERT
AS
BEGIN
    -- Insertion des nouvelles commandes dans la table HistoriqueCommandes
INSERT INTO HistoriqueCommandes (IdCommande, Client, Montant)
SELECT IdCommande, Client, Montant
-- inserted Une table spéciale en mémoire qui contient les nouvelles lignes insérées.
FROM inserted; 

END;

```

---

## Exemple

```sql
-- Trigger pour empêcher la suppression de lignes avec un statut "Actif"
CREATE TRIGGER tr_PreventDeletingActiveRows
ON dbo.MyTable
INSTEAD OF DELETE
AS
BEGIN
SET NOCOUNT ON;

    DELETE FROM dbo.MyTable
    WHERE MyStatus <> 'Actif'
END
GO
```

---

## Exemple
<div class="size">

```sql
CREATE TRIGGER tr_LogUserUpdates
ON dbo.Users
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO dbo.UserUpdateLog
    ( UserID, Username)
    SELECT i.UserID,i.Username
    FROM Inserted i --table à insérer
    WHERE EXISTS (
        SELECT 1 --selectionne une ligne
        FROM Deleted d --table d'origine
        WHERE i.UserID = d.UserID
        AND ( i.Username <> d.Username)
    )
END
GO
```
</div>

---

## Exemple
<div class="size">

```sql
CREATE TRIGGER tr_ApplyDiscountForLoyalCustomers
ON dbo.Orders
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;

    -- Récupérer les informations sur les commandes insérées
    DECLARE @CustomerID INT
    DECLARE @OrderTotal DECIMAL(18,2)

    SELECT @CustomerID = i.CustomerID, @OrderTotal = i.Total
    FROM Inserted i

    -- Vérifier si le client a déjà passé plus de 10 commandes
    DECLARE @OrderCount INT
    SELECT @OrderCount = COUNT(*) 
    FROM dbo.Orders
    WHERE CustomerID = @CustomerID

    IF @OrderCount > 10
    BEGIN
        -- Appliquer la remise de 5% sur le montant de la commande
        UPDATE dbo.Orders
        SET Total = @OrderTotal * 0.95
        WHERE OrderID = (SELECT TOP 1 OrderID FROM Inserted)
    END
END
GO
```

</div>


</section>

---
<section>

# Les procédures stockées


---
<div class="size">
Il s’agit d’une série d’instructions SQL permettant d’automatiser un ensemble d’actions.

Une procédure stockée :
- Utilise un ensemble d’instructions, lié à la programmation procédurale (variable, test, boucle, etc.)

- Est <mark>enregistrée</mark> (et donc nommée) de manière <mark>permanente</mark> au sein de la base de données

- Exécute l’ensemble des instructions qui la compose à chaque appel de l’utilisateur (Administrateur de la base)
- Peut être appelée pas plusieurs applications et elle reste <mark>indépendante de la partie appelante</mark>
</div>

---

## AVANTAGES :
Dans une architecture 3 Tiers (Client, serveur de traitement de données) :
- Centralisation des traitements du serveur de traitements vers   données,
- Réduction des allers-retours entre le client et le serveur MySQL ou SQL Server.
---

## INCONVENIENTS :
- Accentuation de la charge du serveur de données (stockage relégué au second plan),
- Instructions procédurales limitées pour des traitements complexes

---

## Syntaxe d’une procédure stockée
```sql
CREATE PROCEDURE insertemp 
    @v_np INT,
    @v_nomp NVARCHAR(14)
AS
BEGIN
    INSERT INTO pilote (npilote, nompilote)
    VALUES (@v_np, @v_nomp);
END;
GO
```
---

## Appel
```sql
EXEC insertemp @v_np = 1, @v_nomp = 'Jean Dupont';
```
ou
```sql
EXEC insertemp 1, 'Jean Dupont';
```

---
## Syntaxe d’une procédure stockée (mysql)
```sql
delimiter|
create procedure insertemp (IN v_np integer,IN 
v_nomp varchar(14)) 

begin 
 insert into pilote(npilote, nompilote) 
 values (v_np, v_nomp); 
end;
```
---

- <mark>create procedure</mark> permet de créer la procédure
- Comme tout sous-programme, possibilité de passage de paramètre
- Le corps de la procédure défini par le mot clé <mark>begin</mark> et finit par <mark>end ;</mark>
- Dans le corps de la procédure, il peut y avoir des requêtes SQL et utiliser les paramètres de la procédure.
- Avant la création, il faut changer de délimiteur : <mark>delimiter |</mark>.
- On termine la procédure par un délimiteur : <mark>|</mark>
- Après le |, il faut revenir au délimiteur standard : <mark>delimiter ;</mark>
---

## Quelques commandes
<div class="size">
- Appel d’une procédure : CALL nom_procedure([parametre1,… parametreN])

  Ex : <mark>CALL insertpilote (9500, “Durand”, 10) ;</mark>
- Afficher les procédures existantes :

  <mark>Show procedure status ;</mark>
- Afficher le code d’une procédure :

  <mark>Show create procedure nom_procedure;</mark>
- Supprimer une procédure :

  <mark>Drop procedure nom_procedure;</mark>
</div>


---

## Le passage de paramètres

Les différents types de passage de paramètres sont :
- IN : en entrée (par défaut)

- OUT : en sortie

- INOUT : en entrée / sortie

---

## Exemple MYSQL
```sql
delimiter|
create procedure recherche_cli(IN numero int, OUT leNom varchar(20)) 
begin 
SELECT UPPER(nompilote) into leNom from 
 pilote WHERE npilote = numero;
end; 
| delimiter ;
```
Appel
```sql
call recherche_cli (16, @nomPil); 
```
---

## La difference pour sql Server

1. Pas de mot-clé DELIMITER en SQL Server. Il est spécifique à MySQL.
2. Les paramètres en sortie (OUT) sont définis avec le mot-clé OUTPUT dans SQL Server.
3. SQL Server utilise la clause <mark>SELECT ... INTO</mark> uniquement pour créer une nouvelle table, pas pour affecter 
une valeur à une variable. On doit utiliser <mark>SET</mark> ou une assignation directe à un paramètre <mark>OUTPUT</mark>.


---
##  Exemple SQL Server
```sql
CREATE PROCEDURE recherche_cli
   @numero INT,
    @leNom NVARCHAR(20) OUTPUT
AS
BEGIN
SELECT @leNom = UPPER(nompilote)
FROM pilote
WHERE npilote = @numero;
END;
GO
```
---

## Appel
```sql
DECLARE @NomTrouve NVARCHAR(20);

-- Appeler la procédure
EXEC recherche_cli @numero = 1, @leNom = @NomTrouve OUTPUT;

-- Afficher le résultat
PRINT @NomTrouve;

```

</section>

---

# ↩️

#### [Start over]({{ "/index" | url }})