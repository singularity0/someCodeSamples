(function conseqIntSum(upperBound = 1100100){
  let arr = new Array();
  let result = null;
  
  arr[parseInt(upperBound,2)] = NaN;

  for (let i = 0|0, limit = arr.length; i < limit ; i += true){
    result += i;
  }

  console.log(result);
})();
