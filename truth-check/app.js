function truthCheck(collection, pre) {
    let myCollection = collection.slice();
    let valueToCheck = pre;
    for(let i =0;i<myCollection.length;i++){
        if(!myCollection[i][valueToCheck]){
            return false;
        }
    }
    return true;
    
}
  
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));