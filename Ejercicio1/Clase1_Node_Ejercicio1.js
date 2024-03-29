/* 
1.Escriba una expresión utilizando métodos de array de ES6 (por ejemplo, filter y reduce)
  para calcular el valor total de las máquinas en la lista de inventario.
*/

const inventario = [
  { tipo: "maquina", valor: 5000 },
  { tipo: "maquina", valor: 650 },
  { tipo: "silla", valor: 10 },
  { tipo: "sillon", valor: 1200 },
  { tipo: "maquina", valor: 77 }
];

let valorTotalMaquina = inventario.filter(maquinas => maquinas.tipo == "maquina").reduce((a,b) => a + b.valor,0);
console.log(`El valor total de las máquinas es: $${valorTotalMaquina}`);
