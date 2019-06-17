/*
5.  Simplifique estas tres funciones utilizando la sintaxis de spread. remplazar(), recibe un array y forma otro a partir del recibido. 
    El segundo, copiarYRemplazar, hace lo mismo, pero crea un nuevo array en lugar de modificar su argumento. El tercero se utiliza para 
    registrar los avistamientos de un observador de aves. Primero toma una marca de tiempo (por ejemplo, una fecha) y luego cualquier 
    número de cadenas que nombren pájaros. A continuación, almacena estos en el array pajarosVistos.
*/

    function remplazar(array, desde, hasta, elementos) {
        let antes = array.filter((undefined,i) => i < desde);       //Filtro los elementos del array anteriores al desde.
        let despues = array.filter((undefined,i) => i >= hasta);    //Filtro los elementos del array posteriores al hasta.
        array.splice(0,array.length);                               //Vacío el array
        array.push(...antes,...elementos,...despues)                //Le añado los elementos en el orden correspondiente.
    }
    
    let testArray = [1, 2, 100, 100, 6]
    remplazar(testArray, 2, 4, [3, 4, 5])
    console.log(testArray)
 
    function copiarYRemplazar(array, desde, hasta, elementos) {
        let antes = array.filter((undefined,i) => i < desde);       //Filtro los elementos del array anteriores al desde.
        let despues = array.filter((undefined,i) => i >= hasta);    //Filtro los elementos del array posteriores al hasta.
        return [...antes,...elementos,...despues]
    }
    
    console.log(copiarYRemplazar([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))

    let pajarosVistos = []
    function grabarPajaros(tiempo,...pajaros) {     //Utilizo Rest Parameters para agrupar a todos los strings de nombres de aves en un array.
        pajarosVistos.push({tiempo, pajaros})
    }
    
    grabarPajaros(new Date, "sparrow", "robin", "pterodactyl")
    console.log(pajarosVistos)