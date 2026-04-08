// ==========================================
// PLATAFORMA DE PARTICIPACIÓN CIUDADANA
// SEMANA 06 - BUCLES
// ==========================================

console.log("=== SISTEMA DE PARTICIPACIÓN CIUDADANA ===");

// ==========================
// DATOS
// ==========================

const usuarios = [
    { nombre: "Harold", activo: true, votos: [1, 1, 0] },
    { nombre: "Maria", activo: false, votos: [1, 0, 1] },
    { nombre: "Juan", activo: true, votos: [1, 1, 1] }
];

const propuestas = ["Salud", "Educación", "Seguridad"];

// ==========================
// 1. FOR CLÁSICO
// ==========================

console.log("\n--- LISTA DE USUARIOS ---");

for (let i = 0; i < usuarios.length; i++) {
    console.log("Usuario:", usuarios[i].nombre);
}

// ==========================
// 2. WHILE
// ==========================

console.log("\n--- VALIDACIÓN DE USUARIOS ---");

let i = 0;

while (i < usuarios.length) {
    console.log("Validando:", usuarios[i].nombre);
    i++;
}

// ==========================
// 3. DO...WHILE
// ==========================

console.log("\n--- SISTEMA INICIADO ---");

let sistema = 0;

do {
    console.log("El sistema está funcionando...");
    sistema++;
} while (sistema < 1);

// ==========================
// 4. FOR...OF
// ==========================

console.log("\n--- PROPUESTAS ---");

for (const propuesta of propuestas) {
    console.log("Propuesta:", propuesta);
}

// ==========================
// 5. BREAK Y CONTINUE
// ==========================

console.log("\n--- USUARIOS ACTIVOS ---");

for (const usuario of usuarios) {

    if (!usuario.activo) {
        continue;
    }

    console.log("Activo:", usuario.nombre);

    if (usuario.nombre === "Juan") {
        console.log("Usuario importante encontrado");
        break;
    }
}

// ==========================
// 6. CONTADORES Y ACUMULADORES
// ==========================

console.log("\n--- ESTADÍSTICAS ---");

let totalVotos = 0;
let usuariosActivos = 0;

for (const usuario of usuarios) {

    if (usuario.activo) {
        usuariosActivos++;
    }

    for (const voto of usuario.votos) {
        totalVotos += voto;
    }
}

console.log("Total de votos:", totalVotos);
console.log("Usuarios activos:", usuariosActivos);

// ==========================
// 7. BUCLES ANIDADOS
// ==========================

console.log("\n--- DETALLE DE VOTOS ---");

for (const usuario of usuarios) {

    console.log("Usuario:", usuario.nombre);

    for (const voto of usuario.votos) {
        console.log("  Voto:", voto);
    }
}

console.log("\n=== FIN DEL SISTEMA ===");
