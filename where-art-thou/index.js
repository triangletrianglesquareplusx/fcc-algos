function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
   let keysOfSource = Object.keys(source);
   collection.forEach(obj=>{
       
       for(let key of keysOfSource){
                let valOfObjKey = obj[key];
                let valOfSourceKey = source[key];    
        if(!obj.hasOwnProperty(key) || valOfObjKey != valOfSourceKey){
                
            return false;
        }
            
       }
       arr.push(obj);
   })
    
  
    // Only change code above this line
    return arr;
  }
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));