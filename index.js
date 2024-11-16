function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

function chain(input, fs) {
  // implement the "chain" function
    let result = input;
    for(let fun of fs){
      result = fun(result)
    }
    return result
  }
  
  console.log(chain(2, [add, mult])); 