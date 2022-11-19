function convertBase(num, neg, base) {
  console.log("num: " + num + ", neg: " + neg + ", base: " + base);
  var digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  
  if (neg) {
    base = -base
  }
  
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
