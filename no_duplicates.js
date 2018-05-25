function noDuplicates(phrase){
  
  dupli = [];
  words = phrase.split(" ").sort();
  console.log(words);
  for(i=0;i<words.length; i++){
    if(words[i] === words[i+1]){
      dupli.push(words[i]);
    }
  }
  if (dupli.length > 0){
    return "no";
  }
  else{
    return "yes";
  }
}

var output = noDuplicates("IN THE RAIN AND THE SNOW");
console.log(output);
