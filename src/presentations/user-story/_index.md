---
title: "User Story"
date: 2022-12-28T10:49:06+01:00

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
  .font{
    font-size: xx-large;
  }
</style>

# Récit utilisateur

user story

---
<section>

## Définition

Une user story est une explication non formelle, générale d'une fonctionnalité logicielle écrite du point de vue de 
l'utilisateur final.  
Son but est d'expliquer comment une fonctionnalité logicielle apportera de la valeur au client.  
Il est tentant de croire que les user stories sont, en termes simples, des exigences système du logiciel. Mais ce n'est
pas le cas.

---

Donner la priorité aux personnes est une valeur clé du développement Agile, et une user story met les utilisateurs
finaux
au centre de la discussion.  
Les stories utilisent un langage non technique pour fournir un contexte à l'équipe de développement et à ses efforts.  
Après avoir lu une user story, l'équipe sait pourquoi elle développe ce qu'elle développe et quelle valeur elle crée.
</section>

---

## Critères

[D] Disponibilité : la fonctionnalité peut être utilisée au moment voulu ;  
[I] Intégrité : les données sont exactes et complètes ;  
[C] Confidentialité : les informations ne sont divulguées qu’aux personnes autorisées ;  
[P] Preuve : les traces de l’activité du système sont opposables en cas de contestation.


---

Exemple : Le Taxi
<div class="font">

| user stories                                                               | [D] | [I] | [C] | [P] |
|----------------------------------------------------------------------------|-----|-----|-----|-----|
| Un client transmet son identifiant, sa position et son numéro de téléphone | *   | **  | **  ||
| Un client peut émettre une demande («héler virtuellement» un taxi)         | *   | **  | *   | *   |
| Un client peut évaluer une course effectuée ou déclarer un incident        || *   || *   |
| Un administrateur peut enregistrer ou radier un taxi                       || *   || *   |

* Besoin important   ** Besoin très important
</div>

---

##  Abuse story

---

##  Définition
Tandis qu'une User Story décrit une fonctionnalité ou une fonctionnalité utile qui fera éventuellement partie de l'application 
étonnante que vous créez.  
Une Abuse Story est tout l’inverse. En termes simples, une Abuse Story est une description simple de la façon dont 
l'histoire d'utilisateur (fonctionnalité) peut être abusée par un acteur malveillant.  
Attention ! Un Abuse Case n’est pas un Misuse Case (mauvaise utilisation)

---

<section>

##  Exemple
En tant qu'utilisateur, je ne peux télécharger que les dépenses qui se situent dans un budget prédéfini, je ne peux donc pas dépasser les centimes de l'entreprise.

<mark>Exemple d'abus</mark> : en tant qu'employé malveillant, je peux élever les privilèges et augmenter le budget qui m'est alloué/à un employé spécifique, afin que je puisse obtenir des paiements pour de fausses dépenses au-delà du budget prédéfini précédemment.


---

## Exemple
En tant qu'utilisateur, je ne peux recevoir de remboursement que pour les factures approuvées par mon responsable, je ne peux donc être remboursé que pour les dépenses approuvées

<mark>Exemple d'abus</mark> : en tant qu'employé malveillant, je peux accéder au compte de mon responsable afin de pouvoir approuver les dépenses au nom de mon responsable.


---

## Exemple  d'abus
En tant que client authentifié, je vois à quoi ressemble mon numéro de compte dans l'URL, donc je le remplace par un autre numéro pour voir ce qui va se passer.  
En tant que client authentifié, je colle du code HTML qui inclut JavaScript dans tous les champs possibles pour voir ce qui se passe.
</section>

---

Exemple : Le Taxi
<div class="font">

| Événements redoutés                              | Impacts métier                                                                                             | Gravité  | 
|--------------------------------------------------|------------------------------------------------------------------------------------------------------------|:--------:|
| Le système ne répond pas                         | Expérience utilisateur dégradée - Perte de clients                                                         |    *     |
| Un opérateur de taxis émet de fausses positions  | Qualité de service dégradée - Perte de clients                                                             |    *     |
| Un taxi fait une course d’approche en pure perte | Perte de confiance et d’adhésion des taxis - Désengagement aboutissant à une réduction de l’offre de taxis |    **    |


* Modérée   ** Très élevée
</div>

---

![abuse]({{"/images/user-story/abuse.png" | url }})
<div class="font">
threaten : menacer -  
mitigate : atténuer
</div>

---

# ↩️

#### [Start over]({{ "/index" | url }})
