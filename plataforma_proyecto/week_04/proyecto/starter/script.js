// ===============================================
// GENERADOR DE MENSAJES - PLATAFORMA DE PARTICIPACIÓN CIUDADANA
// ===============================================

// Datos de la propuesta ciudadana
const proposalTitle = " Renovación del Parque Central ";
const proposalCategory = "Infraestructura urbana";
const proposalDescription = "Esta propuesta busca modernizar el parque central, agregando áreas verdes, zonas recreativas y mayor iluminación nocturna.";
const proposalCode = "PROP-042";

// -----------------------------------------------
// Aplicando métodos de string
// -----------------------------------------------

// 1. trim() para quitar espacios al inicio y fin
const cleanTitle = proposalTitle.trim();

// 2. toUpperCase() y toLowerCase()
const upperCategory = proposalCategory.toUpperCase();
const lowerCategory = proposalCategory.toLowerCase();

// 3. includes() y startsWith()
const hasKeyword = proposalDescription.includes("áreas verdes");
const codeCheck = proposalCode.startsWith("PROP");

// 4. slice() para extraer parte de la descripción
const shortDescription = proposalDescription.slice(0, 50) + "...";

// 5. replace() para cambiar palabras
const newDescription = proposalDescription.replace("modernizar", "renovar");

// -----------------------------------------------
// Ficha multilínea con template literals
// -----------------------------------------------
console.log("=============================================");
console.log(`  PLATAFORMA DE PARTICIPACIÓN CIUDADANA — FICHA DE PROPUESTA`);
console.log("=============================================");
console.log(`Propuesta:  ${cleanTitle}`);
console.log(`Categoría:  ${upperCategory}`);
console.log(`Código:     ${proposalCode}`);
console.log(`Descripción: ${shortDescription}`);
console.log(`Descripción modificada: ${newDescription}`);
console.log("");
console.log("--- Validaciones ---");
console.log(`¿Código empieza con 'PROP'?: ${codeCheck}`);
console.log(`¿Descripción contiene 'áreas verdes'?: ${hasKeyword}`);
console.log("");

// -----------------------------------------------
// Mensaje corto tipo notificación
// -----------------------------------------------
console.log(`📢 Nueva propuesta registrada: ${cleanTitle} (${proposalCode})`);
console.log("=============================================");