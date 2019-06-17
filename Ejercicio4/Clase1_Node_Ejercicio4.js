/*
4.  La función detectarColision busca en un array de rectángulos y devuelve el primer 
    rectángulo en el que se encuentra el punto dado. Use la desestructuración y una 
    función de orden superior para hacer que este código sea más limpio. Es posible 
    que desee utilizar el método de array find, que toma una función como argumento y 
    devuelve el primer elemento del array (el elemento, no su índice) para el que la 
    función devuelve verdadero.
*/

    function detectarColision(objetos, punto) {
        let {x:xPunto , y:yPunto} = punto;  //Destructuración del punto recibido
        return objetos.find(objeto => {
            let {x , y , ancho , alto} = objeto;    //Destructuración de los elementos de cada rectángulo dentro del objeto iterable
            return xPunto >= x && xPunto <= x + ancho && yPunto >= y && yPunto <= y + alto
        })
        //return objetos.find(objeto => xPunto >= objeto.x && xPunto <= objeto.x + objeto.ancho && yPunto >= objeto.y && yPunto <= objeto.y + objeto.alto)  //Alternativa, sin destructuración del rectángulo, pero en una sola línea de arrow function.
    }
    
    const misObjetos = [
      {x:  10, y: 20, ancho: 30, alto: 30},
      {x: -40, y: 20, ancho: 30, alto: 30},
      {x:   0, y:  0, ancho: 10, alto:  5}
    ]
    
    console.log(detectarColision(misObjetos, {x: 4, y: 2}))