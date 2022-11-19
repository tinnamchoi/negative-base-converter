function convertBase(num, neg, base) {
  var presult = document.getElementById("result");
  
  var digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  
  if (neg) {
    base = -base
  }
  
  document.getElementById('orignum').innerHTML = num; 
  document.getElementById('resultbase').innerHTML = base;
  
  console.log("base: " + base);
  while (num != 0) {
    remainder = num % base;
    if (remainder < 0) {
      remainder -= base;
      console.log("remainder: " + remainder);
    }
    result = digits[remainder] + result;
    if (neg) {
      num = Math.ceil(num / base);
    } else {
      num = Math.floor(num / base);
    }
    console.log("num: " + num);
  }
  
  return result;
}
