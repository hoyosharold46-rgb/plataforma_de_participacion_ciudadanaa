# 🗳️ Semana 05: Condicionales - Plataforma de Participación Ciudadana

> **Etapa 0 — Fundamentos de Programación**  
> 📅 Semana 5 de 10

---

## 📌 Descripción general

Este proyecto implementa un sistema básico de una **plataforma de participación ciudadana**, donde se aplican estructuras condicionales en JavaScript para controlar el flujo del programa.

El sistema simula la interacción de usuarios dentro de una plataforma digital, permitiendo validar acceso, gestionar roles, manejar datos opcionales y clasificar propuestas ciudadanas.

---

## 🎯 Objetivos de aprendizaje

Al finalizar este proyecto se aplican los siguientes conceptos:

- ✔ Uso de `if`, `else if`, `else` para controlar decisiones
- ✔ Uso del operador ternario `? :` para simplificar condiciones
- ✔ Implementación de `switch` para gestión de roles
- ✔ Uso de `??` (nullish coalescing) para valores nulos o indefinidos
- ✔ Uso de `?.` (optional chaining) para evitar errores de acceso
- ✔ Identificación de valores **truthy** y **falsy**
- ✔ Aplicación de operadores lógicos `&&` y `||`

---

## 🧠 Contexto del dominio

El sistema está basado en una:

### 🏛️ Plataforma de Participación Ciudadana

Donde los usuarios pueden:

- Registrarse en la plataforma
- Crear propuestas
- Votar propuestas
- Publicar comentarios
- Tener diferentes roles dentro del sistema

---

## 🗂️ Estructura del proyecto


---

## ⚙️ Funcionalidades del sistema

### 👤 Validación de usuario (if / else if / else)

Se verifica si el usuario puede participar:

- Edad mínima requerida
- Estado activo dentro de la plataforma

---

### 🔄 Estado del usuario (Operador ternario)

Permite mostrar si el usuario está:

- Activo
- Inactivo

---

### 🛡️ Gestión de roles (switch)

Dependiendo del rol del usuario:

| Rol        | Permisos                           |
|------------|----------------------------------|
| Admin      | Acceso total                     |
| Moderador  | Modera comentarios               |
| Ciudadano  | Publica y vota propuestas        |

---

### 📊 Manejo de datos nulos (??)

Se asignan valores por defecto cuando no existen datos, por ejemplo:

- Puntos del usuario
- Número de votos

---

### 🔗 Acceso seguro a datos (?.)

Permite acceder a propiedades sin generar errores si no existen.

Ejemplo:

- Dirección del usuario
- Ciudad

---

### 💬 Validación de comentarios (Truthy / Falsy)

Se valida si un comentario:

- Existe → se publica
- No existe → se rechaza

---

### 🧮 Clasificación de propuestas

Según la cantidad de votos:

| Votos       | Resultado            |
|------------|---------------------|
| > 50        | Aprobada            |
| > 10        | En revisión         |
| ≤ 10        | Rechazada           |

---

## 💻 Ejecución del proyecto

### 🔧 Requisitos

- Tener instalado Node.js

### ▶️ Pasos

1. Abrir la terminal
2. Ubicarse en la carpeta del proyecto
3. Ejecutar:

```bash
node script.js

=== SISTEMA DE PARTICIPACIÓN CIUDADANA ===
El usuario puede participar en la plataforma
Estado del usuario: Activo
Puede crear propuestas y votar
Puntos del usuario: 0
Ciudad: Bogotá
No hay comentario para publicar
Usuario activo en la plataforma
Nombre: Harold
Propuesta en revisión
=== FIN DEL SISTEMA ===
