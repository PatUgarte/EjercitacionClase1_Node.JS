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
]

/*  //PRUEBAS CON EL filter
let arrayMaquinas = inventario.filter(inventariado => inventariado.tipo == "maquina")
console.log(arrayMaquinas)

let arraySillas = inventario.filter(inventariado => inventariado.tipo == "silla")
console.log(arraySillas)

let arraySillon = inventario.filter(inventariado => inventariado.tipo == "sillon")
console.log(arraySillon)
*/

let valorTotalMaquina1 = inventario.filter(maquinas => maquinas.tipo == "maquina").reduce(function(a, b) {
    a.valor += b.valor;
    return a;
  })
console.log(valorTotalMaquina1)

console.log()

let valorTotalMaquina2 = inventario.filter(maquinas => maquinas.tipo == "maquina").reduce((a,b)=>({tipo: a.tipo,valor: a.valor + b.valor}))
console.log(valorTotalMaquina2)