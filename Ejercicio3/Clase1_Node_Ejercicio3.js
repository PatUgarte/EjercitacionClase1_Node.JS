/*
3.  Sería bueno poder llamar a nuestra función ultimoIndiceDe sin proporcionar el tercer 
    argumento, y tenerlo por defecto para comenzar al final del array. Sería aún mejor 
    si pudiéramos expresar esto con un valor de argumento predeterminado de ES6. 
    ¿Podemos? ¿En qué ámbito se evalúan los argumentos por defecto? 
    (Experimente para averiguarlo).
*/

    function ultimoIndiceDe(arr, elt, inicio=arr.length) {
        for (let i = inicio - 1; i >= 0; i--)
            if (arr[i] === elt) return i
        return -1
    }
    
    console.log(ultimoIndiceDe([1, 2, 1, 2], 2))