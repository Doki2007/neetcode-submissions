class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const storedLetters = {};
        let sSize = s.length;
        let tSize = t.length;
        if( sSize !== tSize ) return false;

        for ( let i = 0; i < sSize; i++ ) {
            let char = s[i]

            storedLetters[char] = ( storedLetters[char] || 0) + 1; 
        }

        for ( let i = 0; i < tSize; i++ ) {
            let char = t[i];

            // Si la letra NO está en el objeto, o si su contador ya es 0
            if (!storedLetters[char]) {
                return false;
            } else {
                // Si sí está y es mayor a 0, le restamos 1
                storedLetters[char] -= 1;
            }
        }

        // ¡Falta un último detalle fuera del ciclo!
        return true;
    }
}
