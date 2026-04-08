// ==========================================
// SEMANA 07 - FUNCIONES
// PLATAFORMA DE PARTICIPACIÓN CIUDADANA
// ==========================================

console.log("=== SISTEMA DE PARTICIPACIÓN CIUDADANA ===");

// ==========================
// DATOS
// ==========================

const usuarios = [
    { nombre: "Harold", activo: true },
    { nombre: "Maria", activo: false },
    { nombre: "Juan", activo: true }
];

const propuestas = [
    { titulo: "Salud", votos: 15 },
    { titulo: "Educación", votos: 5 },
    { titulo: "Seguridad", votos: 25 }
];

// ==========================
// 1. FUNCIÓN CLÁSICA
// ==========================

function mostrarUsuarios(lista) {
    console.log("\n--- LISTA DE USUARIOS ---");

    for (const usuario of lista) {
        console.log(`Usuario: ${usuario.nombre}`);
    }
}

// ==========================
// 2. FUNCIÓN CON RETURN
// ==========================

function contarActivos(lista) {
    let contador = 0;

    for (const usuario of lista) {
        if (usuario.activo) {
            contador++;
        }
    }

    return contador;
}

// ==========================
// 3. ARROW FUNCTION
// ==========================

const mostrarPropuestas = (lista) => {
    console.log("\n--- PROPUESTAS ---");

    for (const propuesta of lista) {
        console.log(`Propuesta: ${propuesta.titulo} | Votos: ${propuesta.votos}`);
    }
};

// ==========================
// 4. PARÁMETROS POR DEFECTO
// ==========================

const clasificarPropuesta = (votos = 0) => {

    if (votos > 20) return "Aprobada";
    if (votos > 10) return "En revisión";
    return "Rechazada";
};

// ==========================
// 5. CALLBACK (FUNCIÓN COMO PARÁMETRO)
// ==========================

function procesarUsuarios(lista, callback) {
    console.log("\n--- PROCESANDO USUARIOS ---");

    for (const usuario of lista) {
        callback(usuario);
    }
}

// Callback
const mostrarActivo = (usuario) => {
    if (usuario.activo) {
        console.log(`Usuario activo: ${usuario.nombre}`);
    }
};

// ==========================
// 6. FUNCIÓN PURA
// ==========================

function sumarVotos(lista) {
    let total = 0;

    for (const propuesta of lista) {
        total += propuesta.votos;
    }

    return total;
}

// ==========================
// 7. SCOPE (GLOBAL / LOCAL)
// ==========================

let sistema = "Participación Ciudadana";

function mostrarSistema() {
    let mensaje = "Sistema activo";
    console.log(`${mensaje} - ${sistema}`);
}

// ==========================
// EJECUCIÓN
// ==========================

mostrarUsuarios(usuarios);

const activos = contarActivos(usuarios);
console.log("\nUsuarios activos:", activos);

mostrarPropuestas(propuestas);

console.log("\n--- CLASIFICACIÓN ---");

for (const propuesta of propuestas) {
    console.log(
        `${propuesta.titulo}: ${clasificarPropuesta(propuesta.votos)}`
    );
}

// CALLBACK
procesarUsuarios(usuarios, mostrarActivo);

// FUNCIÓN PURA
const totalVotos = sumarVotos(propuestas);
console.log("\nTotal de votos:", totalVotos);

// SCOPE
mostrarSistema();

console.log("\n=== FIN DEL SISTEMA ===");
