// ============================================
// CALCULADORA - PARTICIPACIÓN CIUDADANA
// Uso de operadores aritméticos, asignación,
// comparación estricta y operadores lógicos
// ============================================

// Datos iniciales de la propuesta
let votesInFavor = 1_800;
let votesAgainst = 250;
const voteGoal = 3_000;

// Encabezado
console.log("===============================");
console.log("CALCULADORA CIUDADANA");
console.log("===============================\n");

// Operaciones aritméticas básicas
let totalVotes = votesInFavor + votesAgainst;
console.log("Votos a favor:   " + votesInFavor);
console.log("Votos en contra: " + votesAgainst);
console.log("Total votos:     " + totalVotes);

// Cálculo de porcentaje de aprobación
let approvalPercentage = (votesInFavor / totalVotes) * 100;
console.log("\nPorcentaje aprobación: " + approvalPercentage + "%");

// Uso de asignación compuesta (simula nuevos votos)
votesInFavor += 300;
votesAgainst += 50;

console.log("\n--- Actualización de votos ---");
console.log("Nuevos votos a favor:   " + votesInFavor);
console.log("Nuevos votos en contra: " + votesAgainst);

// Recalcular total
totalVotes = votesInFavor + votesAgainst;

// Cálculo de votos restantes para la meta
let remainingVotes = voteGoal - totalVotes;
console.log("\nMeta de votos:   " + voteGoal);
console.log("Faltan votos:    " + remainingVotes);

// Uso del operador módulo (%)
console.log("\nResto de votos / 100: " + (totalVotes % 100));

// Comparaciones estrictas
let reachesGoal = totalVotes >= voteGoal;
let isExactGoal = totalVotes === voteGoal;

// Operadores lógicos
let isApproved = (votesInFavor > votesAgainst) && reachesGoal;
let needsVotes = !reachesGoal || (votesInFavor <= votesAgainst);

// Resultados finales
console.log("\n--- Validaciones ---");
console.log("¿Alcanza la meta?: " + reachesGoal);
console.log("¿Es exactamente la meta?: " + isExactGoal);
console.log("¿Propuesta aprobada?: " + isApproved);
console.log("¿Necesita más votos?: " + needsVotes);

// Final
console.log("\n===============================");
console.log("FIN DE CÁLCULO");
console.log("===============================");