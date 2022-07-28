export const calculateTotalPrices=function(prices){
   if (typeof prices!=='object')
      return
   let total=0
   for(const price of prices){
      total+=+price.slice(0,price.length-1)
   }
   return total;
}