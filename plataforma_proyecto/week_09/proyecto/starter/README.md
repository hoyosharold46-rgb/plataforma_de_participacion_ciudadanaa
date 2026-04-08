# 🗳️ Semana 09: Objetos — Plataforma de Participación Ciudadana

## 📌 Descripción general

En esta semana se implementa el uso de **objetos en JavaScript** dentro de una **Plataforma de Participación Ciudadana**, permitiendo estructurar datos como usuarios, propuestas y votos de forma organizada.

Se trabaja con objetos individuales y colecciones de objetos (arrays), aplicando métodos modernos para manipular y analizar la información.

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

1. Crear y manipular objetos literales con datos de usuarios y propuestas
2. Acceder a propiedades usando punto (`obj.prop`) y corchetes (`obj["prop"]`)
3. Usar `Object.keys()`, `Object.values()` y `Object.entries()`
4. Verificar propiedades con `Object.hasOwn()` y recorrer con `for...in`
5. Usar spread `{ ...obj }` para copiar y combinar datos
6. Trabajar con arrays de objetos usando `map`, `filter` y `find`

---

## 📚 Requisitos Previos

- Semana 07: Funciones
- Semana 08: Arrays (`map`, `filter`, `forEach`)

---

## 🗂️ Estructura del proyecto


---

## 🧠 Contexto del dominio

Sistema de:

### 🏛️ Plataforma de Participación Ciudadana

Donde:

- Se registran usuarios
- Se gestionan propuestas
- Se analizan votos
- Se procesan datos estructurados

---

## ⚙️ Funcionalidades del sistema

### 🧩 Objetos literales
Representan usuarios con propiedades como nombre, edad, estado y ciudad.

### 🔍 Acceso a propiedades
Uso de:
- `obj.prop`
- `obj["prop"]`

### 🧠 Métodos de Object
- `Object.keys()` → obtener claves  
- `Object.values()` → obtener valores  
- `Object.entries()` → pares clave-valor  

### 🔎 Verificación e iteración
- `Object.hasOwn()` → verificar propiedad  
- `for...in` → recorrer objeto  

### ⚡ Spread operator
- Copiar objetos  
- Fusionar datos  
- Extender información  

### 📊 Arrays de objetos
Gestión de propuestas usando:
- `map` → transformar datos  
- `filter` → filtrar propuestas  
- `find` → buscar una propuesta  

---

## 💻 Ejecución

```bash
node script.js

=== SISTEMA DE PARTICIPACIÓN CIUDADANA ===

Nombre: Harold
Ciudad: Bogotá

Claves: [ 'nombre', 'edad', 'activo', 'ciudad', 'rol' ]

Populares: [ { titulo: 'Salud', votos: 15 } ]

Propuestas ordenadas: [...]

