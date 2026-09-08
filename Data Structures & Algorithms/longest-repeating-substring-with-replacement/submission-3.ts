class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
         const window = new Map<string, number>();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        window.set(char, (window.get(char) ?? 0)+1);
        const maxFreq = Math.max(...window.values());

        while ((right-left+1) - maxFreq > k ){
            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar)! -1);
            left++
        }

        maxLength = Math.max(maxLength, (right-left+1))

    }
    return maxLength;
}

}