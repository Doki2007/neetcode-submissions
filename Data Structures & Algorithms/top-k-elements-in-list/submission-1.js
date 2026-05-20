class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let arr = {};
            // Sirve para poder tener un objeto 'clave-valor'
            for(let num of nums ) {
                if( !arr[num]){
                    arr[num] = 1;
                }else{
                    arr[num] += 1;
                }
            }

        const freqArray = Object.entries(arr);
        //transformamos el objeto en un array clave-valor

        freqArray.sort((a, b) => b[1] - a[1]);
        //Ordenamos los elementos del array clave-valor de 
        //mayor a menor por la frecuencia en la que se repite
        //cada elemento.

        return freqArray.slice(0, k).map(entry => Number(entry[0]));
        //Hacemos un slice para devolver los elemento que se repiten 
        //segun la frecuencia otorgada a K. Luego hacemos un map
        // en el que pasamos las claves de string a numero
        // para poder retornarlas.


    }
}
