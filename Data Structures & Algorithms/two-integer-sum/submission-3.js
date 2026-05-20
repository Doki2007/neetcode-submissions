class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const pastNumbers = {};

        for ( let i = 0; i < nums.length; i++){
            let rest = target - nums[i];    
            let num = nums[i]


            if ( pastNumbers[rest] !== undefined ) {
                return [ pastNumbers[rest], i ]
            } else {
                pastNumbers[num] = i;
            }
        }
        return true
    }
}
