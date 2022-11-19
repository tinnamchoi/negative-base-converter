function convertBase() {
  var num = document.getElementById('num').value;
  var neg = document.getElementById('neg').checked
  var base = document.getElementById('base').value;
  
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
  
  var quotient = num;
  
  if (quotient < 0 && !neg) {
    quotient = -quotient;
  }

  while (quotient != 0) {
    remainder = quotient % base;
    if (remainder < 0) {
      remainder -= base;
    }
    result = digits[remainder] + result;
    if (neg) {
      quotient = Math.ceil(quotient / base);
    } else {
      quotient = Math.floor(quotient / base);
    }
  }
  
  if (num < 0 && !neg) {
    num = -num;
    result = "-" + result;
  }
  
  document.getElementById('resultnum').innerHTML = result;
}
