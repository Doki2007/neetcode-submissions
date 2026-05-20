class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const storedData = new Map();

        for (const num of nums) {
            storedData.set(num, (storedData.get(num) || 0) + 1);
            console.log(storedData.get(num))
        }
        
        const ending = [...storedData.entries()]
        
        return ending.sort((a, b) => b[1] - a[1]).slice(0, k).map(x => x[0]);
    }
}