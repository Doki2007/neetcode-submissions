class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0];
        let maxProfit = 0; 

        for ( let i = 0; i < prices.length; i++ ){
            const profitHoy = prices[i] - minPrice;
            maxProfit = Math.max( maxProfit, profitHoy);

            if ( prices[i] < minPrice ){
                minPrice = prices[i];
            }
        }

        return maxProfit;
    }
}
