function pairElement(str) {
    const pairs = {
        'A':'T',
        'T':'A',
        'G':'C',
        'c':'G'
    }
    
    let dnaMainArr = str
    .split('')
    .map(element => [element, pairs[element]])
    
    return dnaMainArr;
    
    
    
}
  
console.log(pairElement('AT'));