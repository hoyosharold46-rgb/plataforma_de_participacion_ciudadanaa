# 🗳️ Semana 08: Arrays — Plataforma de Participación Ciudadana

> **Etapa 0 — Fundamentos de Programación** | Semana 8 de 10

---

## 📌 Descripción general

En esta semana se implementa el uso de **arrays en JavaScript** dentro de una **Plataforma de Participación Ciudadana**, permitiendo gestionar listas de propuestas, usuarios y votos.

El sistema pasa de trabajar con datos individuales a trabajar con **colecciones completas**, facilitando el análisis y procesamiento de información.

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana serás capaz de:

1. Crear arrays de propuestas y acceder a sus elementos
2. Modificar listas con `push`, `pop`, `shift`, `unshift`, `splice`
3. Buscar propuestas con `includes`, `find`, `findIndex`
4. Iterar datos con `forEach`, `map`, `filter`
5. Usar el operador spread `...` para copiar y expandir listas
6. Gestionar datos de participación ciudadana usando arrays

---

## 📚 Requisitos Previos

- Semana 06: Bucles (`for`, `for...of`)
- Semana 07: Funciones (`function`, `=>`)
- Variables `const`, `let` y operadores

---

## 🗂️ Estructura del proyecto


---

## 🧠 Contexto del dominio

Sistema de:

### 🏛️ Plataforma de Participación Ciudadana

Donde:

- Se almacenan propuestas en listas
- Se gestionan votos
- Se filtran propuestas populares
- Se generan estadísticas

---

## ⚙️ Funcionalidades del sistema

### 📦 Creación y acceso de arrays
Se almacenan propuestas con título y votos.

### 🔄 Métodos de mutación
- `push` → agregar propuesta  
- `pop` → eliminar última  
- `shift` → eliminar primera  
- `unshift` → agregar al inicio  
- `splice` → modificar elementos  

### 🔍 Métodos de búsqueda
- `includes` → verificar existencia  
- `find` → encontrar propuesta  
- `findIndex` → obtener posición  
- `slice` → extraer subconjunto  

### 🔁 Iteración de datos
- `forEach` → recorrer propuestas  
- `map` → transformar datos  
- `filter` → filtrar propuestas populares  

### ⚡ Spread operator
Permite copiar y crear nuevas listas de propuestas.

---

## 💻 Ejecución

```bash
node script.js

=== SISTEMA DE PARTICIPACIÓN CIUDADANA ===

Primera propuesta: Salud
Última propuesta: Medio ambiente

Propuesta: Salud | Votos: 15
Propuesta: Educación | Votos: 8

Total de votos: 60
