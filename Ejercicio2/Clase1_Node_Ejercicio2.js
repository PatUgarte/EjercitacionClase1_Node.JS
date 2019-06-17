
/*
2.  El código para este ejercicio implementa una wrapper function para trabajar con arrays ordenados. 
    Su constructor toma una función de comparación que compara dos elementos y devuelve un número.
        Este número será:
            * Negativo, si el primer elemento es menor que el segundo.
            * Cero, cuando son iguales. 
            * Positivo, si el primer elemento es mayor que el segundo.
    Reescribir el código para usar una clase ES6. Usar Arrow Functions para todas las expresiones de 
    funciones. Luego, reescriba el loop para usar el métodos de array de ES6 findIndex, que es como 
    indexOf, pero toma una función en lugar de un elemento como argumento, y devuelve el índice del 
    primer elemento para el cual esa función devuelve verdadero (o devuelve -1 si no lo hay).
    
    Por ejemplo:
    [1, 2, 3].findIndex(x => x > 1) dará 1.
*/

    //ES5
    function ArrayOrdenado(comparar) {
      this.comparar = comparar;
      this.contenido = [];
    }
    
    /*//ES6
    var ArrayOrdenado = comparar => {
        this.comparar = comparar;
        this.contenido = [];
    }*/

    ArrayOrdenado.prototype.encontrarPos = function(elt) {
      for (var i = 0; i < this.contenido.length; i++) {
        if (this.comparar(elt, this.contenido[i]) < 0) break;
      }
      return i;
    }

    ArrayOrdenado.prototype.insertar = function(elt) {
      this.contenido.splice(this.encontrarPos(elt), 0, elt);
    }
    
    //var ordenado = new ArrayOrdenado(function(a, b) { return a - b });    //ES5
    var ordenado = new ArrayOrdenado((a, b) => a - b );     //ES6
    ordenado.insertar(5);
    ordenado.insertar(1);
    ordenado.insertar(2);
    ordenado.insertar(4);
    ordenado.insertar(3);
    console.log("array:", ordenado.contenido);
    