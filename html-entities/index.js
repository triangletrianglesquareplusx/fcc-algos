function convertHTML(str) {
    const pairs = {
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        "'":'&apos;',
    }
    let regex = /\&|\<|\>|\"|\'/g;
    let myStr = str.replace(regex, matched => pairs[matched]);
    
    
    return myStr;
}
  
console.log(convertHTML("Schindler's List"));
