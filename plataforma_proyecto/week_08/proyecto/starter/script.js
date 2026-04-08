// ==========================================
// SEMANA 08 - ARRAYS
// PLATAFORMA DE PARTICIPACIÓN CIUDADANA
// ==========================================

console.log("=== SISTEMA DE PARTICIPACIÓN CIUDADANA ===");

// ==========================
// 1. CREAR ARRAY (INVENTARIO)
// ==========================

let propuestas = [
    { titulo: "Salud", votos: 15 },
    { titulo: "Educación", votos: 8 },
    { titulo: "Seguridad", votos: 20 },
    { titulo: "Transporte", votos: 5 },
    { titulo: "Medio ambiente", votos: 12 }
];

// ==========================
// 2. ACCESO A ELEMENTOS
// ==========================

console.log("\n--- ACCESO A DATOS ---");

console.log("Primera propuesta:", propuestas[0].titulo);
console.log("Última propuesta:", propuestas.at(-1).titulo);

// ==========================
// 3. MÉTODOS DE MUTACIÓN
// ==========================

console.log("\n--- MUTACIÓN DE ARRAYS ---");

// push → agregar
propuestas.push({ titulo: "Vivienda", votos: 10 });

// pop → eliminar último
propuestas.pop();

// unshift → agregar al inicio
propuestas.unshift({ titulo: "Empleo", votos: 18 });

// shift → eliminar primero
propuestas.shift();

// splice → modificar en medio
propuestas.splice(2, 1, { titulo: "Cultura", votos: 7 });

console.log("Propuestas actualizadas:", propuestas);

// ==========================
// 4. MÉTODOS DE BÚSQUEDA
// ==========================

console.log("\n--- BÚSQUEDA ---");

// includes
const existe = propuestas.map(p => p.titulo).includes("Salud");
console.log("¿Existe 'Salud'?", existe);

// find
const encontrada = propuestas.find(p => p.titulo === "Seguridad");
console.log("Propuesta encontrada:", encontrada);

// findIndex
const indice = propuestas.findIndex(p => p.titulo === "Educación");
console.log("Índice de Educación:", indice);

// slice
const primeras = propuestas.slice(0, 2);
console.log("Primeras propuestas:", primeras);

// ==========================
// 5. ITERACIÓN
// ==========================

console.log("\n--- ITERACIÓN ---");

// forEach
propuestas.forEach(p => {
    console.log(`Propuesta: ${p.titulo} | Votos: ${p.votos}`);
});

// map (transformar)
const titulos = propuestas.map(p => p.titulo);
console.log("Solo títulos:", titulos);

// filter (filtrar)
const populares = propuestas.filter(p => p.votos > 10);
console.log("Propuestas populares:", populares);

// ==========================
// 6. SPREAD OPERATOR
// ==========================

console.log("\n--- SPREAD OPERATOR ---");

// copiar array
const copia = [...propuestas];

// agregar elemento
const nuevas = [...propuestas, { titulo: "Tecnología", votos: 30 }];

console.log("Copia:", copia);
console.log("Nuevas propuestas:", nuevas);

// ==========================
// 7. ESTADÍSTICAS
// ==========================

console.log("\n--- ESTADÍSTICAS ---");

let totalVotos = 0;

propuestas.forEach(p => {
    totalVotos += p.votos;
});

console.log("Total de votos:", totalVotos);

// ==========================
// FIN
// ==========================

console.log("\n=== FIN DEL SISTEMA ===");
