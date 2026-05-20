class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seenNumbers = new Set();

        for (let i = 0; i < nums.length; i++) {
            let val = nums[i];
            if ( seenNumbers.has(val)) {
                return true
            } else {

                seenNumbers.add (val)
            }
        }
        return false


    }
}
