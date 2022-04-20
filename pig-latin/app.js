function translatePigLatin(str) {
    function doesTheWordBeginWithVowel(char){
        let regex = /a|e|u|i|o/i;
        let result = regex.test(char);
        return result;
    }
    if(doesTheWordBeginWithVowel(str.split('')[0])){
        return str + 'way'
    }else{
        let regexForAnyVowel = /a|e|u|i|o/i;
        if(!regexForAnyVowel.test(str)){
            return str + 'ay'
        }else{
            //here the word has some vowels but does not start with one and can have some in the middle
            let regexForConsonants = /[^aeuio]+/i;
            let initialGroup = str.match(regexForConsonants);
            let match = str.replace(regexForConsonants, '');
            return match + initialGroup + 'ay';
        }
    }
}
  
console.log(translatePigLatin("rhythm"));