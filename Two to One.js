function longest(s1, s2) {
  let s3 = s1+s2;
  let settmp = new Set(s3)
  let result = Array.from(settmp).sort().join('')
  return result;
}
console.log(longest("aretheyhere", "yestheyarehere"));