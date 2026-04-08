# 🗳️ Semana 06: Bucles — Plataforma de Participación Ciudadana

> **Etapa 0 — Fundamentos de Programación** | Semana 6 de 10

---

## 📌 Descripción general

Este proyecto implementa el uso de **bucles en JavaScript** dentro de una **Plataforma de Participación Ciudadana**, permitiendo procesar múltiples usuarios, propuestas y votos de manera automática.

El sistema simula cómo una plataforma digital puede gestionar la participación de los ciudadanos mediante estructuras repetitivas.

---

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana serás capaz de:

- Usar el bucle `for` para recorrer usuarios del sistema
- Aplicar `while` y `do...while` para validar procesos del sistema
- Iterar listas de propuestas con `for...of`
- Controlar el flujo con `break` y `continue`
- Construir bucles anidados para analizar votos
- Implementar contadores y acumuladores para estadísticas

---

## 📚 Requisitos previos

- Semana 01: `console.log()`, tipos primitivos  
- Semana 02: `const`/`let`, conversiones de tipo  
- Semana 03: operadores (`+`, `+=`, `++`, `<`, `>`, `===`)  
- Semana 04: template literals  
- Semana 05: condicionales `if/else`  

---

## 🗂️ Estructura del proyecto


---

## 🧠 Contexto del dominio

El sistema representa una:

### 🏛️ Plataforma de Participación Ciudadana

Donde:

- Los ciudadanos pueden votar propuestas
- Se registran usuarios activos e inactivos
- Se analizan los votos de cada usuario
- Se generan estadísticas de participación

---

## ⚙️ Funcionalidades del sistema

### 🔁 Recorrido de usuarios (`for`)
Se muestra la lista completa de usuarios registrados.

### 🔄 Validación de usuarios (`while`)
Se valida el estado de cada usuario dentro del sistema.

### 🔂 Ejecución del sistema (`do...while`)
Se asegura que el sistema se ejecute al menos una vez.

### 📊 Iteración de propuestas (`for...of`)
Se recorren las propuestas ciudadanas disponibles.

### ⛔ Control de flujo (`break` y `continue`)
- `continue` → ignora usuarios inactivos  
- `break` → detiene el proceso al encontrar un usuario clave  

### 🧮 Estadísticas (contadores y acumuladores)
- Total de votos registrados  
- Cantidad de usuarios activos  

### 🔗 Bucles anidados
Se recorren usuarios y sus votos para mostrar detalles.

---

## 💻 Ejecución del proyecto

```bash
node script.js

=== SISTEMA DE PARTICIPACIÓN CIUDADANA ===

Usuario: Harold
Usuario: Maria
Usuario: Juan

Validando usuario: Harold
Validando usuario: Maria
Validando usuario: Juan

Propuesta: Salud
Propuesta: Educación
Propuesta: Seguridad

Usuario activo: Harold
Usuario activo: Juan

Total de votos: 8
Usuarios activos: 2
