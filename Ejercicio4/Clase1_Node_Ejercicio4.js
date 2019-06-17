/*
5.  La función detectarColision busca en un array de rectángulos y devuelve el primer 
    rectángulo en el que se encuentra el punto dado. Use la desestructuración y una 
    función de orden superior para hacer que este código sea más limpio. Es posible 
    que desee utilizar el método de array find, que toma una función como argumento y 
    devuelve el primer elemento del array (el elemento, no su índice) para el que la 
    función devuelve verdadero.
*/

    function detectarColision(objetos, punto) {
      for (let i = 0; i < objetos.length; i++) {
        let objeto = objetos[i]
        let {x , y , ancho , alto} = objeto;
        let {x:xPunto , y:yPunto} = punto;
        /* console.log(`x: ${x}\ny: ${y}\nancho: ${ancho}\nalto: ${alto}\n`)
        console.log(`xPunto: ${xPunto}\nyPunto: ${yPunto}\n`) */
        if (xPunto >= x && xPunto <= x + ancho && 
            yPunto >= y && yPunto <= y + alto)
          return objeto;
      }
    }
    
    const misObjetos = [
      {x:  10, y: 20, ancho: 30, alto: 30},
      {x: -40, y: 20, ancho: 30, alto: 30},
      {x:   0, y:  0, ancho: 10, alto:  5}
    ]
    
    console.log(detectarColision(misObjetos, {x: 4, y: 2}))