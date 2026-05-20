class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Para cada string: <longitud>:<string>
        return strs.map(s => `${s.length}:${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            // Buscar el primer ':' para saber la longitud
            const colon = str.indexOf(':', i);
            const len   = Number(str.slice(i, colon));
            const s     = str.slice(colon + 1, colon + 1 + len);
            res.push(s);
            i = colon + 1 + len;
        }
        return res;
    }
}