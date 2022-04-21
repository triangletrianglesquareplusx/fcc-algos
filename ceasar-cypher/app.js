function rot13(str) {
    const alphabetLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decodedStr = '';
    for(let i = 0;i<str.length;i++){
        console.log(alphabetLetters.indexOf(str[i]));
        let index = alphabetLetters.indexOf(str[i]);
        if(index == -1){
            decodedStr += str[i];
        }else{
            let decodedCharIndex = (index + 13) % 26;
            decodedStr += alphabetLetters[decodedCharIndex];
        }
    }
    return decodedStr;
}
  
console.log(rot13("SERR PBQR PNZC"));