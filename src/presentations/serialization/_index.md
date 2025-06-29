---
title: "Serialization"
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

# Sérialisation avec C#

---

## Généralités
Pour enregistrer des données, on disposait traditionnellement :
- Dans un premier temps des fichiers textes
- Dans un second temps des bases de données

---

## La sérialisation
Avec la programmation objet, un nouveau mécanisme est utilisé, la sérialisation.  
Elle permet de sauvegarder dans un fichier différents objets valorisés.
![serialization](/images/serialization/serialization01.png)


---

## La désérialisation
C’est l’opération contraire
![deserialization](/images/serialization/deserialization.png)

---

## Une contrainte
On ne peut sérialiser dans un même fichier qu’un seul objet, ce doit être un objet « conteneur »  
Par exemple, on peut sérialiser une banque qui contiendra bien sûr ses objets, des comptes.


---

## Le format des fichiers sérialisés
Ils peuvent être de différents types avec C# :
- Binaires (obsolète)
- XML
- JSON

---

<section>

## Mise en œuvre (fichier JSON)
Vérifiez les namespaces. Il
```csharp
using System.Text.Json;;
using System.IO;
```

---

## Écrire le code de sérialisation 
```csharp
ServiceCommercial sc = new ServiceCommercial();
Commercial c1, c2, c3;
c1 = new Commercial("Dupond", "Jean", 7, 'B');
c2 = new Commercial("Durand", "Dominique", 11, 'C');
c3 = new Commercial("Chamir", "Jéremy", 15, 'A');
sc.AjouterCommercial(c1);
sc.AjouterCommercial(c2);
sc.AjouterCommercial(c3);

DateTime d = new DateTime(2009, 10, 21);
sc.AjouterNote(c1, d, 100);
sc.AjouterNote(c1, d, 15.5);
sc.AjouterNote(c1, d, 75, '3');

 // Sérialiser ServiceCommercial en JSON
string json = JsonSerializer.Serialize(sc, new JsonSerializerOptions { WriteIndented = true });
nomFichier = "ServiceCommercial.json";

using (StreamWriter writer = new StreamWriter(nomFichier))
{
    writer.Write(json);
}
```
</section>

---

## Résultat
Le fichier JSON :  
```json
{
  "LesCommerciaux": [
    {
      "Nom": "Dupond",
      "Prenom": "Jean",
      "PuissanceVoiture": 7,
      "Categorie": "B"
    },
    {
      "Nom": "Durand",
      "Prenom": "Dominique",
      "PuissanceVoiture": 11,
      "Categorie": "C"
    },
    {
      "Nom": "Chamir",
      "Prenom": "J\u00E9remy",
      "PuissanceVoiture": 15,
      "Categorie": "A"
    }
  ],
  "MesNotes": [
    {
      "MontantARembourser": 20,
      "LeCommercial": {
        "Nom": "Dupond",
        "Prenom": "Jean",
        "PuissanceVoiture": 7,
        "Categorie": "B"
      },
      "DateNoteFrais": "2009-10-21T00:00:00",
      "EstRembourse": true
    }
  ]
}
```

---

<section>

## Un format XML
Il est possible de personnaliser des attributs. Il faut toutefois preciser l'héritage et mettre avant la classe mère 
les classes filles héritées sous la forme <mark> [XmlInclude(typeof(FraisTransport))]</mark>
```csharp
// Sérialiser ServiceCommercial en XML dans un fichier
string filePath = "ServiceCommercial.xml";
XmlSerializer serializerF = new XmlSerializer(typeof(ServiceCommercial));

using (FileStream fileStream = new FileStream(filePath, FileMode.Create))
{
    serializerF.Serialize(fileStream, sc);
}
```

---

## Résultat
```xml
<?xml version="1.0" encoding="utf-8"?>
<ServiceCommercial xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <LesCommerciaux>
    <Commercial>
      <Nom>Dupond</Nom>
      <Prenom>Jean</Prenom>
      <PuissanceVoiture>7</PuissanceVoiture>
      <Categorie>66</Categorie>
    </Commercial>
    <Commercial>
      <Nom>Durand</Nom>
      <Prenom>Dominique</Prenom>
      <PuissanceVoiture>11</PuissanceVoiture>
      <Categorie>67</Categorie>
    </Commercial>
    <Commercial>
      <Nom>Chamir</Nom>
      <Prenom>J√©remy</Prenom>
      <PuissanceVoiture>15</PuissanceVoiture>
      <Categorie>65</Categorie>
    </Commercial>
  </LesCommerciaux>
  <MesNotes>
    <NoteFrais xsi:type="FraisTransport">
      <numero>0</numero>
      <MontantARembourser>20</MontantARembourser>
      <LeCommercial>
        <Nom>Dupond</Nom>
        <Prenom>Jean</Prenom>
        <PuissanceVoiture>7</PuissanceVoiture>
        <Categorie>66</Categorie>
      </LeCommercial>
      <DateNoteFrais>2009-10-21T00:00:00</DateNoteFrais>
      <EstRembourse>true</EstRembourse>
    </NoteFrais>
  </MesNotes>
</ServiceCommercial>
```
</section>


---
<section>

## La désérialisation
C’est l’opération inverse  
On reconstruit en mémoire les données des classes à partir d’un fichier

---

Le code ressemble à la sérialisation :
```csharp
ServiceCommercial sc;

 // Lire le contenu du fichier JSON
 string jsonString = File.ReadAllText(nomFichier);

 // Désérialiser le JSON en objet ServiceCommercial
sc = JsonSerializer.Deserialize<ServiceCommercial>(jsonString);
             
 Console.WriteLine("Désérialisation JSON réussie !");
 return sc;
 

//utilisation d'un objet récupéré
Console.WriteLine( sc.AfficherNote());
```


---

Ce qui donne : 
```text
Transport - Numéro : 0 - Date : 21/10/2009 00:00:00 - Montant à rembourser: 20 euros - remboursé - 100 km-
```
</section>

---

## Conclusion
Le mécanisme est simple et pratique  
Ceci permet des échanges (peu volumineux) entre deux clients qui par contre doivent connaître la structure interne des données (classes)  
Ce ne peut être utilisé dans le cas de deux applications « hétérogènes », n’utilisant pas les mêmes standards.

---

# ↩️

#### [Start over](/index)