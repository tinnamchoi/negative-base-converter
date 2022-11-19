function convertBase(num, neg, base) {
  var presult = document.getElementById("result");
  var perror = document.getElementById("error");
  
  if (base < 2 || base > 36) {
    presult.style.display = "none";
    perror.innerHTML = "Error: Base must be between 2 and 36";
    perror.style.display = "block";
    return null;
  }
  
  var digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  
  if (neg) {
    base = -base
  }
  
  perror.style.display = "none";
  presult.style.display = "block";
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
