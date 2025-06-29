---
title: "Rgpd Fonctionnel"
date: 2022-12-21T22:37:14+01:00

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
# RGPD
### Les fonctionnalités

---
<section>

## Les principes et droits des utilisateurs
Les droits de l'utilisateur/du client (mentionné en tant que « sujet de données » dans la réglementation), 
qui relèvent du développeur sont :

---

1. <mark>le droit à l'effacement</mark> (le droit d'être oublié/supprimé du système) ;
2. <mark>le droit à la restriction du traitement</mark> (vous gardez toujours les données, mais les marquez comme « limitées » et ne les touchez pas sans un consentement supplémentaire de l'utilisateur) ;
3. <mark>le droit à la portabilité des données</mark> (la possibilité de les exporter dans un format lisible informatiquement) ;
4. <mark>le droit à la rectification</mark> (la possibilité d'avoir ses données personnelles corrigées) ;

---

5. <mark>le droit d'être informé</mark> (avoir des informations humainement lisibles, plutôt que de longues conditions) ;
6. <mark>le droit d'accès</mark> (l'utilisateur devrait pouvoir voir toutes les données que vous avez sur lui).

</section>


---

## Les principes de base pertinents sont :
- <mark>la minimisation des données</mark> (ne pas collecter plus de données que nécessaire) ;
- <mark>l'intégrité et la confidentialité</mark> (toutes les mesures de sécurité que vous pouvez imaginer pour protéger les données et des mesures pour garantir que les données ne seront pas modifiées de manière inappropriée).

---

## Les 6 pratiques de l'entreprise
1. ne <mark>collecter</mark> que les données vraiment nécessaires pour atteindre l'objectif,
2. etre transparent vis à vis des individus,
3. organiser et faciliter l'exercice des droits des personnes,
4. fixer des <mark>durées</mark> de conservation,
5. <mark>sécuriser</mark> les données et identifier les risques,
6. inscrire la mise en conformité dans une démarche continue.

---

<section>

# Les choses à faire

---

## Chiffrage des données en transit

- Cela signifie, que la communication entre votre couche applicative et votre base de données (ou votre queue de message, 
ou tout composant que vous avez) devrait se faire à travers [TLS](https://fr.wikipedia.org/wiki/Transport_Layer_Security). 
- Les certificats pourraient être autosignés (et éventuellement épinglés), ou vous pourriez avoir une autorité de 
certification interne.

---

## TLS
- La `Transport Layer Security` (TLS) ou « Sécurité de la couche de transport », et son prédécesseur la Secure Sockets Layer (SSL) ou « Couche de sockets sécurisée » sont des protocoles de sécurisation des échanges par réseau 
informatique ;

---

- Le protocole est très largement utilisé et sa mise en œuvre est facilitée par le fait que les protocoles de la couche application, comme le HTTP, n'ont pas à être profondément modifiés pour utiliser une connexion sécurisée, mais seulement implémentés au-dessus de la SSL/TLS, ce qui pour le HTTP a donné le protocole HTTPS.

---

## Chiffrer les données au repos

Cela dépend encore de la base de données (certaines offrent un chiffrement au niveau des tables), mais peut aussi être au niveau machine.

---

## Chiffrer vos sauvegardes

Un peu évident.

---

## Implémentation de la pseudomisation

- Le cas d'utilisation le plus évident est quand vous voulez utiliser des données en production pour des serveurs de tests/mises en scène. 
- Vous devrez changer les données personnelles en « pseudonymes », de façon à ce que les gens ne puissent pas être identifiés.

---

## Protéger l’intégrité des données

- C'est une chose très large et peut simplement signifier « avoir un système d'authentification pour modifier les données ». 
- Mais vous pouvez faire plus, même aussi simple qu'un checksum, ou un jeton.
- Cela dépend des enjeux, de la façon dont les données sont accédées, d'un système particulier, etc... 

---

- Le checksum peut être de la forme d'un hash de toutes les données d'un enregistrement de la base, qui devra être mis à jour à chaque fois que l'enregistrement est modifié via l'application. 
- Ce n'est pas une garantie forte, mais c'est au moins quelque chose.

---

## Activités de traitement dans autre chose qu'Excel
- L'article 30 stipule que vous devriez garder un enregistrement de tous les types d'activités où vous utilisez des données personnelles. 
- Cela sonne comme de la bureaucratie, mais peut être utile. 
- Vous serez capable de lier certains aspects de votre application avec ce registre (ex. les cases à cocher de consentement ou votre trace d'enregistrement d'audit).

---

## Loguer les accès aux données personnelles
- Chaque opération de lecture d'un enregistrement de données personnelles devrait être loguée, pour que vous sachiez qui y a accédé et pour quel usage. 
- Cela ne découle pas directement de la réglementation, mais c'est implicite concernant les responsabilités.

---

## Répertorier toutes les API clients

- Vous ne devriez pas autoriser les API anonymes à accéder aux données personnelles. 
- Vous devez demander le nom de l'entreprise et le nom du contact pour chaque utilisateur de l'API lors de l'inscription, et les ajouter au registre de traitement des données.
  </section>

---
<section>

# Les choses à ne pas faire

---

## N'utilisez pas les données pour d'autres buts que ceux acceptés par l'utilisateur
- Ceci est supposé être l'esprit de la réglementation. 
- Si vous voulez exposer une nouvelle API à un nouveau type de clients, ou utiliser les données pour de l'apprentissage automatique, ou décidez d'ajouter des publicités à votre site basé sur le comportement des utilisateurs, ou encore vendre votre base de données à un tiers, réfléchissez à deux fois.

---

## Ne pas loguer les données personnelles
- Se débarrasser des données personnelles depuis des fichiers de log (spécialement si elles sont fournies par un service tiers) peut être fastidieux ou même impossible. 
- Loguez donc juste les identifiants si nécessaire, et assurez-vous que les anciens fichiers de log sont nettoyés, juste au cas où.

---

## Ne mettez pas de champs sur l'enregistrement/le formulaire de profil dont vous n'avez pas besoin
Il est toujours tentant de placer autant de champs que le designer le souhaite, mais sauf si vous avez absolument besoin des données pour fournir votre service, vous ne devriez pas les collecter.

---

## Ne supposez pas que les tiers sont conformes
- Vous êtes responsable s'il y a une fuite de données chez un tiers (c’est-à-dire le tiers effectuant le traitement) à qui vous avez envoyé des données personnelles. 
- Donc avant d'envoyer des données à un autre service via une API, assurez-vous d'au moins un niveau de protection basique. 
- Si ce n'est pas le cas, signalez-le à la direction.
  </section>

---

# ↩️

#### [Start over]({{ "/index" | url }})