class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         
        let store = {}
        for ( let i = 0; i < strs.length; i++ ) {
            let sortedWord = strs[i].split('').sort().join('');

            if ( store[sortedWord] !== undefined ){
                store[sortedWord].push(strs[i]) 
            } else {
                store[sortedWord] = [strs[i]]

            }
        }
        console.log(Object.values(store))
        return Object.values(store);
    }
}
