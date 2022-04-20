function telephoneCheck(str) {
    //let myRegex = /^[1]?[\s]?[\(|\s]?[0-9]{3}[\-|\)]?[\s]?[0-9]{3}[\-|\s]?[0-9]{3,4}$/gm;
    //let myRegex = /^[1{1}]?\s?([0-9]{3}|\([0-9]{3}\))[\-|\s]?[0-9]{3}[\-]?[0-9]{4}$/gm;
    let myRegex = /^[1{1}]?\s?([0-9]{3}|\([0-9]{3}\))[\-|\s]?[0-9]{3}[\-|\s]?[0-9]{4}$/gm;
    let myStr = str;
    return myRegex.test(myStr);
}

console.log(telephoneCheck("1 555 555 5555"));