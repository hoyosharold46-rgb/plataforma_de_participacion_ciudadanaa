// Plataforma de Participación Ciudadana

console.log("=== SISTEMA DE PARTICIPACIÓN CIUDADANA ===");

// Datos del usuario
const usuario = {
    nombre: "Harold",
    rol: "ciudadano", // ciudadano, admin, moderador
    edad: 20,
    activo: true,
    direccion: {
        ciudad: "Bogotá"
    }
};

// ==============================
// 1. IF / ELSE IF / ELSE
// ==============================

if (usuario.edad < 18) {
    console.log("No puede participar, es menor de edad");
} else if (usuario.activo === false) {
    console.log("El usuario está inactivo");
} else {
    console.log("El usuario puede participar en la plataforma");
}

// ==============================
// 2. OPERADOR TERNARIO
// ==============================

const estado = usuario.activo ? "Activo" : "Inactivo";
console.log("Estado del usuario:", estado);

// ==============================
// 3. SWITCH (ROLES)
// ==============================

switch (usuario.rol) {
    case "admin":
        console.log("Acceso total al sistema");
        break;
    case "moderador":
        console.log("Puede moderar comentarios");
        break;
    case "ciudadano":
        console.log("Puede crear propuestas y votar");
        break;
    default:
        console.log("Rol no reconocido");
}

// ==============================
// 4. NULLISH COALESCING (??)
// ==============================

const puntos = null; // puede venir vacío

const puntosUsuario = puntos ?? 0;
console.log("Puntos del usuario:", puntosUsuario);

// ==============================
// 5. OPTIONAL CHAINING (?.)
// ==============================

const ciudad = usuario.direccion?.ciudad;
console.log("Ciudad:", ciudad);

// ==============================
// 6. TRUTHY / FALSY + OPERADORES LÓGICOS
// ==============================

const comentario = "";

if (comentario) {
    console.log("Comentario publicado:", comentario);
} else {
    console.log("No hay comentario para publicar");
}

// Uso de && y ||
const mensaje = usuario.activo && "Usuario activo en la plataforma";
console.log(mensaje);

const nombreUsuario = usuario.nombre || "Usuario anónimo";
console.log("Nombre:", nombreUsuario);

// ==============================
// 7. SIMULACIÓN DE PROPUESTA
// ==============================

const votos = 15;

// Clasificación de propuesta
if (votos > 50) {
    console.log("Propuesta aprobada");
} else if (votos > 10) {
    console.log("Propuesta en revisión");
} else {
    console.log("Propuesta rechazada");
}

console.log("=== FIN DEL SISTEMA ===");
