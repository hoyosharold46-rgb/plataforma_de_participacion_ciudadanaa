# 🗳️ Semana 07 — Funciones | Plataforma de Participación Ciudadana

> **Etapa 0: Fundamentos de Programación** | Semanas 1–10

---

## 📌 Descripción general

En esta semana se implementa el uso de **funciones en JavaScript** dentro de una **Plataforma de Participación Ciudadana**, permitiendo organizar el código, reutilizar lógica y procesar información de usuarios y propuestas.

El sistema pasa de ser lineal a modular, utilizando funciones para manejar acciones como mostrar usuarios, contar votos y clasificar propuestas.

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

1. Declarar y llamar funciones usando `function`
2. Usar `return` para devolver resultados (ej: total de votos)
3. Utilizar arrow functions `=>` en el sistema
4. Aplicar parámetros por defecto (ej: votos = 0)
5. Usar funciones como parámetros (callbacks)
6. Diferenciar scope local y global en el sistema

---

## 📚 Requisitos Previos

- Semana 01: `console.log()`, tipos primitivos  
- Semana 02: `const`/`let`, variables  
- Semana 03: operadores y expresiones  
- Semana 04: strings y template literals  
- Semana 05: condicionales  
- Semana 06: bucles  

---

## 🗂️ Estructura del proyecto


---

## 🧠 Contexto del dominio

Sistema de:

### 🏛️ Plataforma de Participación Ciudadana

Donde:

- Los usuarios participan en propuestas
- Se cuentan votos
- Se clasifican propuestas
- Se procesan datos mediante funciones reutilizables

---

## ⚙️ Funcionalidades del sistema

### 🔧 Declaración de funciones
Funciones para mostrar usuarios y propuestas.

### 🔁 Funciones con return
Permiten obtener resultados como:

- Número de usuarios activos
- Total de votos

### ⚡ Arrow functions
Uso de funciones modernas para simplificar código.

### 🎯 Parámetros por defecto
Permiten manejar valores faltantes (ej: votos = 0).

### 🔗 Callbacks
Funciones que reciben otras funciones como parámetro para procesar usuarios.

### 🌍 Scope (alcance)
Uso de variables globales y locales dentro del sistema.

### 🧪 Funciones puras
Funciones que no modifican datos externos y siempre retornan el mismo resultado.

---

## 💻 Ejecución

```bash
node script.js

=== SISTEMA DE PARTICIPACIÓN CIUDADANA ===

Usuario: Harold
Usuario: Maria
Usuario: Juan

Usuarios activos: 2

Propuesta: Salud - Aprobada
Propuesta: Educación - Rechazada
Propuesta: Seguridad - Aprobada

Total de votos: 45
s