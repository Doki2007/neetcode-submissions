class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let strMap = new Map();

        for(let str of strs ) {
         const key = str.split('').sort().join('');
         console.log(key)

            if( !strMap.has(key) ){
                strMap.set(key, [])
            }

            strMap.get(key).push(str)
        }
        return Array.from(strMap.values());
    }
}