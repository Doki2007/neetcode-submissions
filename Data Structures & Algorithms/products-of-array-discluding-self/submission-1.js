class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arrSize = nums.length; //4
        const output = new Array(arrSize).fill(1); 
        // output [1,1,1,1]
        // nums=[1,2,4,6]
        // left output = [1, 1, 2, 8]
        // right output = [48, 24, 6, 1]
        // final output = [48, 24, 12, 8] 
        
        //PREFIX
        let leftProduct = 1;
        //Traversing the array with i
        for(let i=0; i < arrSize; i++){
            //Assigning the number to our Array
            output[i] = leftProduct;
            //Then we obtain the product of all we have in the left.
            leftProduct *= nums[i]
        }


        //POSTFIX
        let rightProduct = 1;
        //Traversing the array from the end to the begining
        for(let i = arrSize - 1; i >= 0 ; i--){
             //Assigning the number to our Array
            output[i] *= rightProduct;
            //Then we obtain the product of all we have in the left.
            rightProduct *= nums[i]
        }

        return output   
    }
}