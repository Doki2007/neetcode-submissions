class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashIndex = new Map();
        let i;

        for( i = 0; i < nums.length; i++ ){
            const complement = target - nums[i];

            if( hashIndex.has(complement) ){
                return [ hashIndex.get(complement), i];
            }else {
                hashIndex.set(nums[i], i)
            }

        }

    }
}
