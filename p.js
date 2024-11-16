function calculateProbability(n){
  let result = n*2/365
  return result < 1 ? result.toFixed(2) : 1
}
console.log(calculateProbability(0));