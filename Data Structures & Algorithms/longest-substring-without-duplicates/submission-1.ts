class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const window = new Set<string>;
        let left = 0;
        let maxLength = 0;

        for ( let right = 0; right < s.length; right++ ) {
            while ( window.has(s[right])){
                window.delete(s[left]);
                left++;
            }

            window.add(s[right])
            maxLength = Math.max(maxLength, right-left+1);

        }

        return maxLength;
    }
}
