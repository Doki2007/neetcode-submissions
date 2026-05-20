class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        
        for ( const str of strs ){
            let strLength = str.length;
            encodedString += `${strLength}#${str}`
        }
        console.log(encodedString)
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let i = 0; // Arrancamos en la línea de salida
        const decodedString = [];           

        while (i < str.length) {
                let j = i; // El pie derecho se para junto al izquierdo
                // 1. EL BUSCADOR: Movemos el pie derecho hasta tocar el '#'
                while (str[j] !== '#') {
                    j++; 
                }
                // Si la cadena es "5#hazlo":
                // 'i' se quedó en el índice 0 (donde está el '5')
                // 'j' avanzó hasta el índice 1 (donde está el '#')
                // 2. EXTRAER EL NÚMERO
                // Cortamos lo que quedó entre el pie izquierdo y el derecho
                let lengthStr = Number(str.slice(i, j)); // Corta desde 0 hasta 1 -> "5"

                let slicedWord = str.slice(j + 1, j + 1 + lengthStr); 
                // j+1 = indice 2, justo donde empieza la palabra.        
                // j+1+lengthStr = indice 7, el final de la palabra.
                //sliceWord = palabra recortada.
                i = j + 1 + lengthStr; 
                // Asignamos el valor del nuevo numero para i, asi puede seguir 

                decodedString.push(slicedWord)

            }
                return decodedString

        }
}