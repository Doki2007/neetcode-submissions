class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        const leftOutput = [];
        leftOutput[0] = 1;
        const rightOutput = [];
        rightOutput[nums.length-1] = 1;

        for ( let i = 1; i < nums.length; i++ ) {
            leftOutput[i] = leftOutput[i-1] * nums[i-1]
        }
        console.log( leftOutput )

        for ( let i = nums.length - 2; i >= 0; i-- ){
            rightOutput[i] = rightOutput[i + 1] * nums[i + 1];
        }
        console.log( rightOutput )

        for ( let i = 0; i < leftOutput.length; i++ ){
            output[i] = leftOutput[i] * rightOutput[i]
        }
        console.log( output )
        return output


    }
}
