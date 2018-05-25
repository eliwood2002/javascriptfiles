function zipCode(str){
  var zip = (/^[0-9]{5}$/i ); 
  var x = zip.test(str);

  return x;
}
console.log(zipCode("12345a"));

function whiteSpace(str){
  var space = (/\s/i );
  var y = space.test(str);
  
  return y;
}
console.log(whiteSpace("taco bell is great"));

function socialSecurityNumber(str){
  var soc = (/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/i);
  var i = soc.test(str);
  
  return i;
}
console.log(socialSecurityNumber("440-93-1234"));
