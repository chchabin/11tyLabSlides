---
title: "Prompt"
date: 2026-12-27T22:02:14+01:00

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

# Cours : Comment Rédiger un Prompt pour une IA Générative & une IA Locale

---

> Guide pratique — Techniques · Structures · Bonnes pratiques

---

<section>

## 1. Les Fondamentaux d'un Bon Prompt

---

### 1.1 Rôle & Contexte
Définir qui parle et dans quel cadre. Cela cadre le ton, le niveau d'expertise et le registre.

**Exemple :**
```
Tu es un expert en cybersécurité avec 10 ans d'expérience...
```

---

### 1.2 Tâche Précise
Éviter les formulations vagues. Être spécifique sur l'objectif attendu.

| ❌ Mauvais | ✅ Bon |
|---|---|
| "Parle-moi du SEO" | "Liste les 5 erreurs SEO les plus fréquentes pour un site e-commerce, avec des exemples concrets" |

---

### 1.3 Format de Sortie
Spécifier la structure exacte attendue pour la réponse.

**Exemple :**
```
Réponds en JSON / liste à puces / tableau 3 colonnes
```
---

### 1.4 Exemples (Few-shot)
Montrer un exemple concret du résultat attendu.

**Exemple :**
```
Voici un exemple de ce que j'attends : [exemple]
```
</section>

---

<section>

## 2. Structure Recommandée

```
[RÔLE]        Tu es un expert en [domaine]...
[CONTEXTE]    Je travaille sur... / Mon public est...
[TÂCHE]       Génère / Rédige / Analyse / Explique...
[FORMAT]      Sous forme de... / En X points / En JSON...
[CONTRAINTES] Sans jargon / En moins de 200 mots / En français...
[EXEMPLE]     Voici un exemple de ce que j'attends : ...
```
</section>

---

## 3. IA Cloud vs IA Locale — Comparaison

<div class="size">

| Aspect               | ☁ IA Cloud (Claude, GPT)   | ⚡ IA Locale (LLaMA, Mistral)   |
|----------------------|----------------------------|--------------------------------|
| Longueur du prompt   | Long et détaillé, OK       | Court et direct préférable     |
| Instructions système | Très bien prises en compte | Utiliser le champ `system`     |
| Chaîne de pensée     | Très efficace              | Peut dégrader les performances |
| Langue               | Multilingue robuste        | Parfois meilleur en anglais    |
| Sortie JSON          | Très fiable                | Spécifier explicitement        |
| Contexte (tokens)    | Jusqu'à 200k+ tokens       | Limité selon le modèle         |

</div>

---
<section>

## 4. Templates Natifs Ollama par Modèle

---

### Mistral / Mixtral
```
<s>[INST] {{ system_prompt }}

{{ user_message }} [/INST]
```

---

### LLaMA 3
```
<|begin_of_text|><|start_header_id|>system<|end_header_id|>
{{ system_prompt }}<|eot_id|>
<|start_header_id|>user<|end_header_id|>
{{ user_message }}<|eot_id|>
<|start_header_id|>assistant<|end_header_id|>
```

---

### LLaMA 2
```
[INST] <<SYS>>
{{ system_prompt }}
<</SYS>>

{{ user_message }} [/INST]
```
---

### Gemma / Phi
```
<start_of_turn>user
{{ user_message }}<end_of_turn>
<start_of_turn>model
```
---

> **Conseil :** Utilisez l'API REST Ollama sur `localhost:11434` — les templates sont gérés automatiquement via le rôle `system`.
</section>

---
<section>

## 5. Personnalisation avec Modelfile

---

### Modelfile
```dockerfile
FROM mistral

# Paramètres
PARAMETER temperature 0.7
PARAMETER top_p       0.9
PARAMETER num_ctx     4096

SYSTEM """
Tu es un assistant en développement web.
- Réponds toujours en français
- Sois concis et direct
- Fournis des exemples de code quand c'est pertinent
"""
```

---

### Commandes
```bash
ollama create mon-assistant -f Modelfile
ollama run mon-assistant
```
---

### API REST Python
```python
import requests

response = requests.post(
  "http://localhost:11434/api/chat",
  json={
    "model": "mistral",
    "messages": [
      {
        "role": "system",
        "content": "Tu es expert Python."
      },
      {
        "role": "user",
        "content": "Explique les décorateurs."
      }
    ],
    "stream": False
  }
)
print(response.json()["message"]["content"])
```
</section>

---

## 6. Choisir le Bon Modèle Ollama

<div class="size">

| Modèle           | Taille | Usage recommandé                             | RAM min  |
|------------------|--------|----------------------------------------------|----------|
| `phi3:mini`      | 3.8B   | Réponses rapides, tâches simples             | ~4 GB    |
| `mistral`        | 7B     | Usage général, bon équilibre vitesse/qualité | ~8 GB    |
| `llama3.1`       | 8B     | Raisonnement complexe, instructions longues  | ~8 GB    |
| `mixtral`        | 47B    | Tâches complexes, si RAM suffisante          | ~32 GB   |
| `codellama`      | 7–34B  | Génération et analyse de code                | ~8–20 GB |
| `deepseek-coder` | 6.7B   | Code, très efficace et rapide                | ~8 GB    |

</div>

---
<section>

## 7. Bonnes Pratiques & Erreurs à Éviter

---
### ✅ À faire
- Spécifier le rôle et le contexte dès le début
- Formuler UNE seule tâche à la fois
- Préciser la langue souhaitée explicitement
- Utiliser le champ `system` d'Ollama
- Itérer et affiner progressivement
- Demander un raisonnement étape par étape

---

### ❌ À éviter
- Formulations vagues sans objectif clair
- Mélanger plusieurs tâches distinctes
- Négliger le format de sortie attendu
- Instructions contradictoires dans le prompt
- Copier sans adapter les prompts cloud vers le local
- Ignorer les limites de contexte du modèle

</section>

---

<section>

## 8. Exemple de Prompt Complet

---

```
# RÔLE
Tu es un expert en cybersécurité avec 10 ans d'expérience.

# CONTEXTE
Je prépare une formation pour des développeurs juniors.

# TÂCHE
Liste les 5 vulnérabilités OWASP les plus critiques en 2024.

# FORMAT
Pour chacune : Nom | Description (1 phrase) | Exemple concret

# CONTRAINTES
Sans jargon excessif. En français. Maximum 5 lignes par entrée.
```
---

### Techniques avancées

| Technique            | Instruction                                           |
|----------------------|-------------------------------------------------------|
| **Chain of Thought** | `"Raisonne étape par étape avant de répondre"`        |
| **Auto-correction**  | `"Vérifie ta réponse avant de la donner"`             |
| **Persona négatif**  | `"Ne sois pas générique, sois direct et synthétique"` |


</section>

---

## 9. Résumé — Les 4 points clés

1. **Rôle + Contexte + Tâche + Format** = la base d'un prompt solide
2. **Ollama** — prompts courts, champ system, templates natifs par modèle
3. **Choisir le bon modèle** selon la RAM disponible et le cas d'usage
4. **Itérer** — commencer simple, affiner progressivement

