function dropElements(arr, func) {
    let myArr = arr.slice();
    for(let i=0;i<myArr.length;i++){
        if(!func(myArr[i])){
            i--;
            myArr.shift();
            
        }else{
            break;
        }
    }
    return myArr;
    
    
}
  
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));