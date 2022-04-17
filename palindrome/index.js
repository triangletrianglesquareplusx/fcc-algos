function palindrome(str) {
    let myregex = /[a-zA-Z0-9]+/g;
    let result = str.match(myregex);
    let myStr = '';
    
    //console.log(result[0]);
    for(let i=0;i<result.length;i++){
      myStr+= result[i];
      
    }
    let reversedString = myStr
    .split('')
    .reverse()
    .join('');
    
    return myStr.toLowerCase() == reversedString.toLowerCase();
  
  
  }
  
  console.log(palindrome("My age is 0, 0 si ega ym."));
