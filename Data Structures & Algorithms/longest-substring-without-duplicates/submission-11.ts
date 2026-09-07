class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const window = new Map<string, number>();
        let left = 0;
        let maxLength = 0;

      
        for ( let right = 0; right < s.length; right++ ) {
            const char = s[right];
            
            if ( window.has(char) ){
               left = Math.max(left, window.get(char)! + 1);
            }

            window.set(char, right);
            maxLength = Math.max(maxLength, right-left+1);      

        }

        return maxLength;
   }
}