---
title: "Sauvegardes"
date: 2022-12-11T19:36:11+01:00

draft: false
---
<style >
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
    font-size: 17px;
    }
</style>

# Sauvegarde informatique

---
<section>

## 1- Définition

 En informatique, la **sauvegarde** (*backup* en anglais) est l'opération qui consiste à dupliquer et à mettre en sécurité les données contenues dans un système informatique.

 Certains utilisateurs ont pour objectif final de sauvegarder leurs fichiers dès le moment de leur enregistrement comme celui qui vient de saisir un texte de loi dans un traitement de texte.

---

## La sauvegarde n’est pas :

 **L'*enregistrement des données***, qui consiste à écrire des données sur un périphérique, tel qu'un disque dur, une clé USB, des bandes magnétiques, où les informations demeureront même après l'extinction de la machine, contrairement à la mémoire vive.

 **L'*archivage***, qui consiste à enregistrer des données de manière à garantir sur le long terme leur conformité à un état donné, en général leur état au moment où elles ont été validées par leurs auteurs.

---

 La sauvegarde passe forcément par un enregistrement des données, mais pas nécessairement dans un but d'archivage.
 </section>

---

## 2 - Recommandations

 Il est recommandé de communiquer aux utilisateurs la procédure élaborée et écrite concernant la stratégie de sauvegarde et d'archive.

 D'avertir les utilisateurs concernés quand une sauvegarde échoue.

 **De faire régulièrement des tests de récupération de données** aux moments opportuns afin de palier un éventuel problème lors d'une récupération de données souhaitée par un utilisateur.

---
<section>

## 3 - Finalité

 Les copies de sûreté sont utiles principalement à deux choses :

1. La première, et la plus évidente, est de permettre de restaurer un système informatique dans un état de fonctionnement à la suite d'un incident (perte d'un support de stockage tel que disque dur, bande magnétique, etc., ou de tout ou partie des données qu'il contient).

---

2. La seconde, incluse dans la première, mais certainement la plus courante, est de faciliter la restauration d'une partie d'un système informatique (un fichier, un groupe de fichiers, un système d'exploitation, une donnée dans un fichier, etc.) à la suite d'une suppression accidentelle ou d'une modification non désirée.
  
---

## Résultat

 La technique la plus fréquente est la recopie des données sur un support indépendant du système initial (ordinateur local, serveur, etc.).

 L'opération inverse qui consiste à réutiliser des données sauvegardées s'appelle une restauration.
 </section>

---
<section>

## 4 - Critères de choix

 Le choix d'une technique de sauvegarde nécessite de prendre en compte :

- la capacité du support (le volume d'informations à stocker) ;

- la vitesse de transfert des données ;

- la fiabilité du support (notamment après une longue période de stockage) ;

- la simplicité de classement ;

- la facilité à restaurer les données ;

---

- la granularité permise par telle ou telle stratégie, c'est-à-dire la capacité à revenir à un instant donné sur l'état d'une composante du système sauvegardé ;

- les contraintes éventuellement imposées par un PRA ou un PCA ;

 et bien sûr le coût de l'ensemble.

---

 Intervient également la possibilité de sélectionner les données à sauvegarder.  
 Enfin pour les grands systèmes de sauvegarde, il faut tenir compte de critères physiques : 
 - volume physique des supports de stockage, 
 - poids, sensibilité à la température, 
 - à l'humidité, 
 - à la poussière, 
 - à la lumière.
 </section>

---
<section>

## 5 - Méthodes (Types) de sauvegarde les plus courantes

 Il existe trois grands types de sauvegarde :

 La sauvegarde **complète**

 La sauvegarde **incrémentale**

 La sauvegarde **différentielle**

---

## **5.1 - Sauvegarde complète**

 **LA SAUVEGARDE INFORMATIQUE DE TOUS LES FICHIERS PRÉSENTS SUR LE DISQUE DUR.**

 Il s'agit d'une sauvegarde de tous les fichiers, effectuée à l'instant T. Lorsque vous souhaitez effectuer une restauration de vos données, vous prenez la sauvegarde la plus récente (effectuée le jour J) et tous les fichiers sont restaurés dans leur état au jour où ils ont été sauvegardés (jour J).

 Lorsque vous effectuez une sauvegarde complète, un marqueur est placé à 0 sur l'ensemble des fichiers.

---

## 5.2 - **Sauvegarde différentielle**
**SAUVEGARDE DE TOUS LES FICHIERS CRÉÉS OU MODIFIÉS DEPUIS LA DERNIÈRE SAUVEGARDE TOTALE**.

 Une première sauvegarde complète est effectuée le jour J. La sauvegarde différentielle, effectuée par exemple le jour J+1, ne contiendra que les fichiers modifiés par rapport au jour J. Lorsqu'un fichier est modifié, son marqueur passe à 1 et il sera sauvegardé indéfiniment tant qu'une nouvelle sauvegarde complète n'aura pas été effectuée.

---

 Pour restaurer des données au jour J+5 par exemple, il conviendra de disposer de la sauvegarde complète (jour J) et de la sauvegarde du jour J+5, qui contiendra l'ensemble des fichiers ayant été modifiés au moins une fois depuis la sauvegarde complète.

---

## 5.3 - **Sauvegarde incrémentale**
**SAUVEGARDE DES SEULS FICHIERS CRÉÉS OU MODIFIÉS DEPUIS LA DERNIÈRE SAUVEGARDE TOTALE OU INCRÉMENTALE.**  
 La sauvegarde incrémentielle ou incrémentale fonctionne sur un principe différent. Une première sauvegarde complète est effectuée le jour J.

---

- Le jour J+1, on réalise une sauvegarde différentielle par rapport au jour J (comprenant les fichiers modifiés uniquement entre les jours J et J+1).

- Le jour J+2, on réalise une sauvegarde différentielle par rapport au jour J+1 (comprenant les fichiers modifiés uniquement entre les jours J+1 et J+2).

- Et ainsi de suite ... Lorsqu'un fichier est modifié, son marqueur passe à 1. La sauvegarde sauvegardera le fichier modifié, qui aura son marqueur qui passera à 0 jusqu'à la prochaine modification, et ainsi de suite.

---

 L'inconvénient de ce type de sauvegarde provient de la restauration : Pour restaurer des données sauvegardées à J+5 par exemple, il faudra récupérer la sauvegarde du jour J, mais aussi celles des jours J+1, J+2, J+3, J+4 et J+5.
 </section>

---
<section>

## 6 - **Schéma de synthèse**

La sauvegarde (Backup, en anglais) consiste à dupliquer des données stockées dans le Système Informatique (SI) de l'entité, dans le but de les mettre en sécurité.

 Cette mise en sécurité a pour but de répondre à deux éventualités de restauration (l'opération inverse de la sauvegarde) :

---

 La restauration de tout ou partie du SI, suite à une dégradation importante du SI, voire une destruction (disaster recovery) ;

 La restauration de quelques fichiers, suite à une corruption ou une destruction limitée de données.

 La sauvegarde peut être réalisée localement, sur un média (serveur, disque, bande, DVD-ROM) hébergé dans le SI, à des fins de restauration rapide, ou elle peut être archivée, voire externalisée.
 
</section>

---

## On distingue trois types de sauvegardes :

- la sauvegarde totale (T)

- la sauvegarde différentielle (D)

- la sauvegarde incrémentale (I)

---

 ![sauvegardes]({{"/images/sauvegarde/sauvegardes.png" | url }})

---

## Comparaison des types de sauvegardes
<div class="size">

| Type de sauvegarde        | Données sauvegardées                                                     | Temps de sauvegarde | Temps de restauration | Espace disque occupé | Avantages                                                                                              | Inconvénients                                                                                                                                                                                  |
|:--------------------------|:-------------------------------------------------------------------------|---------------------|:----------------------|:---------------------|:-------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sauvegarde complète       | Toutes                                                                   | Lent                | Rapide                | Elevé                | On est sûr de ne rien oublier. <br>La plus fiable                                                      | Très lent.<br>Pas de sauvegarde "jour par jour" des modifications (versions).                                                                                                                  |
| Sauvegarde incrémentale   | Seulement les données modifiées par rapport à la précédente sauvegarde   | Rapide              | Modéré                | Le plus faible       | Rapide. Toutes les évolutions (versions) sont conservées.<br>Économies de temps et de matériel         | La restauration des données est plus complexe qu'avec les autres méthodes car il faudra manipuler plus de versions de sauvegardes pour restaurer une situation.<br>Restauration plutôt longue. |
| Sauvegarde différentielle | Seulement les données modifiées depuis la précédente sauvegarde complète | Modéré              | Rapide                | Généralement modéré  | Rapide. <br>Seules les dernières modifications depuis la dernière sauvegarde complète sont transférées | Pas de sauvegarde "jour par jour" des modifications (versions).<br>Plus de ressources (bandes…)                                                                                                |
</div>

---

<section>

# lES SYNCHRONISATIONS

---

## Les synchronisations automatiques
Un programme fonctionne en arrière-plan sur l’ordinateur. Dès qu'un fichier est modifié (date, taille,
attributs), ce programme répercute la modification sur le système de fichiers distant.

Exemple : Yadis ! Backup, FreeFileSync...

---
## Les synchronisations manuelles
D'autres programmes permettent de synchroniser les données sur demande : c'est notamment le cas
des outils de type GIT !

L'utilisateur vérifie que les documents sur son espace local sont à jour, puis, après modifications, il doit
transmettre celles-ci sur l'espace distant. On utilise le terme dépôt (en anglais, repository) et les
actions sont "tirer" <mark>(pull)</mark> ou "pousser" <mark>(push)</mark> vers le cloud.

</section>

---

## LA GESTION DE VERSIONS
C'est la force des outils GIT ou SVN : ils enregistrent les changements et permettent ainsi de connaître
les différentes révisions d'un document. Chaque fois qu'un utilisateur fait un "commit", il doit remplir
une description des modifications effectuées.

Ce système permet, lors de débogages importants, de retrouver quelle modification a entraîné une
régression dans le code.

---

<section>

# La redondance

Il est utile d'avoir des systèmes fiables, et l'un des moyens sur les serveurs de sauvegarde, est l'usage
des technologies RAID (Redundant Array of Independent Disks).

---

## RAID-0 : rapidité

Cette technique consiste simplement à utiliser deux disques simultanément, pour
gagner en performances. L'astuce consiste à partager l'écriture d'un flux, sur
deux disques, séparément. L'inconvénient, est qu'en cas de panne d'un des
disques, on ne peut récupérer qu'une partie de l'information.

Les disques sont dits "entrelacés".

---

##  RAID-1   : miroir
C'est la technique la plus simple à comprendre : l'information est écrite sur les
deux disques en même temps. En cas de panne de l'un des disques, on peut
récupérer l'information complète sur l'autre.

Les disques sont dits "en miroir".

---

## RAID-5 : redondance partagée
Cette technique est la plus complexe, car elle implique l'usage de trois
disques au minimum. Chaque disque contient un bloc de données ou un
bloc de parité. Si un disque tombe en panne, on perd un bloc de
données (calculable avec un autre disque grâce au bloc de parité) ou un
bloc de parité (contrôle d'erreur, calculé à partir de deux blocs de
données). Les blocs sont en rotation, ce n'est pas toujours le même disque qui contient les blocs de
parité.

Les disques sont dits "agrégés avec parité"

</section>

---

## Règles de sauvegarde 3-2-1
- 3 copies de sauvegarde distinctes,
- 2 copies de sauvegarde sur deux dispositifs de stockage secondaire distincts,
- 1 copie de sauvegarde hors du site de production.

---

## Concrètement :
La première copie reste disponible sur un dispositif de stockage sur disque,  
La deuxième copie générée est disponible et externalisée dans le nuage,  
On crée la troisième copie sur un dispositif de stockage sur bande depuis la première.

---

# ↩️

#### [Start over]({{ "/index" | url }})