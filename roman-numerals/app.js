function convertToRoman(num) {
    const numeralsAsRomans = {
      M: '1000',
      CM: '900',
      DCCC: '800',
      DCC: '700',
      DC: '600',
      D: '500',
      CD: '400',
      CCC: '300',
      CC: '200',
      C: '100',
      XC: '90',
      LXXX: '80',
      LXX: '70',
      LX: '60',
      L: '50',
      XL: '40',
      XXX: '30',
      XX: '20',
      X: '10',
      IX: '9',
      VIII: '8',
      VII: '7',
      VI: '6',
      V: '5',
      IV: '4',
      III: '3',
      II: '2',
      I: '1'
    }
    let decoded = '';
    for(let numeral in numeralsAsRomans){
      while(num >= numeralsAsRomans[numeral]){
        decoded += numeral;
        num -= numeralsAsRomans[numeral];
      }
    }
    return decoded;
}