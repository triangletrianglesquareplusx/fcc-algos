function smallestCommon(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr);
    let array = [];

    for (min; min<=max; min++){
         array.push(min);
    }

    const lowestCommon = (currentValue) => n % currentValue === 0;
    let common = false;
    let n = max* (max-1);

    common = array.every(lowestCommon);

    while (common === false){
        n++
        common =  array.every(lowestCommon);
    }
    return n;
}