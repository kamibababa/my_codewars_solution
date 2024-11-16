function parse(data) {
  let tmp = 0;
  let arr = [];
  for (let c of data) {
    switch (c) {
      case 'i':
        {
          tmp++;
          break;
        }
      case 'd':
        {
          tmp--;
          break;
        }
      case 's':{
        tmp = tmp * tmp;
        break;
      }
      case 'o':{
        arr.push(tmp);
        break;
      }
      default:{
        break;
      }
    }
  }
  return arr; // your code here  
}

