class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const size = s1.length;
        const size2 = s2.length;

        if (size > size2) return false;

        const need = new Map<string, number>();
        for ( const c of s1 ) need.set(c, (need.get(c) ??0) +1);
        // aca seteo el need{a:1, b:1, c:1} por ejemplo

        const window = new Map<string, number>();

        for( let right = 0; right < size2; right++){
            const charIn = s2[right];
            window.set(charIn, (window.get(charIn) ??0) +1);


            if ( right >= size ) {
                const charOut = s2[right-size];
                window.set(charOut, window.get(charOut)! -1);
                if(window.get(charOut) === 0) window.delete(charOut);
            }

            if ( right >= size - 1 && mapsIguales(window, need)) return true
        }

        return false;

        function mapsIguales(a: Map<string, number>, b: Map<string, number>): boolean {
  if (a.size !== b.size) return false;
  for (const [letra, cantidad] of a) {
    if (b.get(letra) !== cantidad) return false;
  }
  return true;
}
    }

    

}
