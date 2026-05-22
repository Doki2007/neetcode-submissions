class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const sortedNums = nums.sort((a, b) => a - b);
        const result = [];

        for( let i = 0; i < sortedNums.length; i++ ) {
            if( sortedNums[i] > 0 ) break;
            if( sortedNums[i] === sortedNums[i - 1] ) continue;
            let left = i + 1;
            let right = sortedNums.length - 1;

            while( left < right ) {
                const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
                if( sum > 0 ){
                    right--;
                } else if ( sum < 0 ){
                    left++;
                } else {
                    result.push([sortedNums[i], sortedNums[left], sortedNums[right]])
                    left++;
                    while (left < right && sortedNums[left] === sortedNums[left - 1]) left++;

                }
            } 
        }
        return result;
    }
}
