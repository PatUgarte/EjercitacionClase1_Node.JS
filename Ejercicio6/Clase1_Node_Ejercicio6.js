/*
6.  Dados los datos en el código de inicio, use los templates strings 
para producir la siguiente cadena. Asegúrese de que los números, los 
nombres y el nombre del equipo realmente provengan de los datos.

    Sabiendo que:
        * Hay 4 personas en el equipo de Tooling.
        * Sus nombres son Sofía, Ricky, Martin, Gonzalo.
        * 2 de ellos tienen un papel de alto nivel.
*/
const nombreEquipo = "Tooling"
const gente = [{nombre: "Sofía", rol: "senior"},
                {nombre: "Ricky", rol: "junior"},
                {nombre: "Martin", rol: "senior"},
                {nombre: "Gonzalo", rol: "junior"},]

//Construyo un string que concatena los nombres de todo el equipo con los separadores correspondientes, utilizando reduce().
let nombres = gente.reduce((init,persona,i) => {
    let separador = (i == gente.length - 1) ? "." : (i == gente.length - 2) ? " y " : ", ";
    return init + persona.nombre + separador;
},"");

//Calculo la cantidad de miembros del equipo con senioritis, utilizando filter().
let cantidadSeniors = (gente.filter( a => a.rol=="senior")).length;

//Con lo anterior armado ahora sí armo un mensaje que siempre se va a adaptar a los elementos del objeto gente.
let mensaje = 
`Hay ${gente.length} personas en el equipo de ${nombreEquipo}.
Sus nombres son: ${nombres}
${cantidadSeniors} de ellas/os tienen un papel de alto nivel.`.trim();

console.log(mensaje);