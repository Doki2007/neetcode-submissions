class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        // ordenar de menor a mayor!
        const sortedNums = nums.sort((a, b) => a - b);
        const endNum = sortedNums.length - 1;
        const result = [];

        // i es mi pivote
        for ( let i = 0; i < endNum; i++ ) {
            // por lo que empezamos left + 1;
            // righ por otra parte, empieza desde el final;
            let left = i + 1;
            let right = endNum;

            // Si nuestro número pivote es mayor a 0, simplemente salimos del for
            // por que? porque si nuestro pivote es mayor a 0, nuestros punteros 
            //siempre seran numero positivos. Lo que nos haría imposible sumarlos a 0
            if ( sortedNums[i] > 0 ) break;
            // si nuestro pivote actual [i] es igual al que le sigue 
            //[left](que es igual a i + 1), entonces lo saltamos, porque ya hicimos esa secuencia
            if ( i > 0 && sortedNums[i] == sortedNums[i - 1] ) continue;

            // empezamos el proceso del Two Pointers mientras que left sea menor a right
            while ( left < right ) {
                // determinamos la suma de todos los numeros. pivote, pivote + 1 y ultimo numero
                let suma = sortedNums[i] + sortedNums[left] + sortedNums[right]

                if ( suma > 0 ) {
                    right--;
                }else if ( suma < 0) {
                    left++;
                } else {
                    result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                    left++;
                    while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                        left++;
                    }
                }
            }
        }
            return result
    }
}











// const sortedNums = nums.sort((a, b) => a - b);
        // const result = [];

        // for( let i = 0; i < sortedNums.length; i++ ) {
        //     if( sortedNums[i] > 0 ) break;
        //     if( sortedNums[i] === sortedNums[i - 1] ) continue;
        //     let left = i + 1;
        //     let right = sortedNums.length - 1;

        //     while( left < right ) {
        //         const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
        //         if( sum > 0 ){
        //             right--;
        //         } else if ( sum < 0 ){
        //             left++;
        //         } else {
        //             result.push([sortedNums[i], sortedNums[left], sortedNums[right]])
        //             left++;
        //             while (left < right && sortedNums[left] === sortedNums[left - 1]) left++;

        //         }
        //     } 
        // }
        // return result;