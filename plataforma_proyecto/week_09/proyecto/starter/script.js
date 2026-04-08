// ==========================================
// SEMANA 09 - OBJETOS
// PLATAFORMA DE PARTICIPACIÓN CIUDADANA
// ==========================================

console.log("=== SISTEMA DE PARTICIPACIÓN CIUDADANA ===");

// ==========================
// 1. OBJETO LITERAL
// ==========================

const usuario = {
    nombre: "Harold",
    edad: 22,
    activo: true,
    ciudad: "Bogotá"
};

// acceso con punto
console.log("\nNombre:", usuario.nombre);

// acceso con corchetes
console.log("Ciudad:", usuario["ciudad"]);

// modificar propiedad
usuario.activo = false;

// agregar propiedad
usuario.rol = "Ciudadano";

console.log("Usuario actualizado:", usuario);

// ==========================
// 2. MÉTODOS DE OBJETO
// ==========================

console.log("\n--- MÉTODOS DE OBJETO ---");

console.log("Claves:", Object.keys(usuario));
console.log("Valores:", Object.values(usuario));
console.log("Entradas:", Object.entries(usuario));

// ==========================
// 3. VERIFICAR E ITERAR
// ==========================

console.log("\n--- VERIFICAR E ITERAR ---");

// verificar propiedad
console.log("¿Tiene edad?", Object.hasOwn(usuario, "edad"));

// for...in
for (const key in usuario) {
    console.log(`${key}: ${usuario[key]}`);
}

// ==========================
// 4. SPREAD DE OBJETOS
// ==========================

console.log("\n--- SPREAD ---");

// copiar objeto
const copiaUsuario = { ...usuario };

// fusionar objetos
const datosExtra = { pais: "Colombia", puntos: 100 };

const usuarioCompleto = { ...usuario, ...datosExtra };

console.log("Copia:", copiaUsuario);
console.log("Usuario completo:", usuarioCompleto);

// ==========================
// 5. ARRAY DE OBJETOS
// ==========================

console.log("\n--- PROPUESTAS ---");

const propuestas = [
    { titulo: "Salud", votos: 15 },
    { titulo: "Educación", votos: 8 },
    { titulo: "Seguridad", votos: 25 },
    { titulo: "Transporte", votos: 5 },
    { titulo: "Medio ambiente", votos: 12 }
];

// map
const titulos = propuestas.map(p => p.titulo);
console.log("Títulos:", titulos);

// filter
const populares = propuestas.filter(p => p.votos > 10);
console.log("Populares:", populares);

// find
const buscada = propuestas.find(p => p.titulo === "Salud");
console.log("Encontrada:", buscada);

// ==========================
// 6. ORDENAR
// ==========================

console.log("\n--- ORDENAR ---");

const ordenadas = [...propuestas].sort((a, b) => b.votos - a.votos);

console.log("Propuestas ordenadas:", ordenadas);

// ==========================
// FIN
// ==========================

console.log("\n=== FIN DEL SISTEMA ===");
