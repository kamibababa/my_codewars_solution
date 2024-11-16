function queueTime(customers, n) {
  let arr = new Array(n)
  arr.fill(0)
  for(let c of customers){
    arr.sort((a,b)=>a);
    arr[0] += c;
    console.log(arr);
  }
  return Math.max(...arr)
}

console.log(queueTime([10,2,3,3], 2)); 