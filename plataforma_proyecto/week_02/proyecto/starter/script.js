// ============================================
// FICHA DE DATOS - PARTICIPACIÓN CIUDADANA
// Este script usa variables, tipos de datos,
// typeof y conversiones
// ============================================

// Datos principales de la propuesta
const proposalName = "Recuperación de Espacios Públicos";
const totalVotes = 2_500; // número con separador para mejor lectura
const isApproved = false; // boolean con prefijo semántico
const assignedTechnician = null; // valor aún no asignado

// Encabezado
console.log("===============================");
console.log("FICHA DE DATOS: PROPUESTA");
console.log("===============================\n");

// Mostrar datos principales
console.log("Nombre:     " + proposalName);
console.log("Votos:      " + totalVotes);
console.log("Aprobada:   " + isApproved);

// Tipos de datos
console.log("\n--- Tipos de datos ---");
console.log("typeof proposalName: " + typeof proposalName);
console.log("typeof totalVotes:  " + typeof totalVotes);
console.log("typeof isApproved:  " + typeof isApproved);

// Conversión explícita (number → string)
const votesAsString = String(totalVotes);

console.log("\n--- Conversiones ---");
console.log("Votos como texto: " + votesAsString);
console.log("typeof votesAsString: " + typeof votesAsString);

// Sección de valor null
console.log("\n--- Valor nulo ---");
console.log("Técnico asignado: " + assignedTechnician);
console.log("¿Es null?: " + (assignedTechnician === null));

// Final
console.log("\n===============================");
console.log("FIN DE FICHA");
console.log("===============================");