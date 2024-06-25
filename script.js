function convertBase() {
  var num = document.getElementById('num').value;
  var neg = document.getElementById('neg').checked
  var base = document.getElementById('base').value;
  
  var psuccess = document.getElementById("success");
  var perror = document.getElementById("error");
  
  if (!Number.isInteger(Number(num))) {
    psuccess.style.display = "none";
    perror.innerHTML = "Error: Number must be an integer";
    perror.style.display = "block";
    return null;
  }
  
  if (base < 2 || base > 36) {
    psuccess.style.display = "none";
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
  psuccess.style.display = "block";
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

function nary() {
  var base = document.getElementById('base').value;
  var neg = document.getElementById('neg').checked;
  
  // array of strings for names of bases
  var bases = ["binary", "ternary", "quaternary", "quinary", "senary", "septenary", "octal", "nonary", "decimal", "undecimal", "duodecimal", "tridecimal", "tetradecimal", "pentadecimal", "hexadecimal"];
  
  if (base >= 2 && base <= 16) {
    document.getElementById('nary').innerHTML = (neg ? "nega-" : "") + bases[base - 2] + " places: ";
    return null;
  }
  
  document.getElementById('nary').innerHTML = (neg - 0.5) * -2 * base + "-ary places: ";
}
