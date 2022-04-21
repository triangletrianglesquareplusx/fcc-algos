function steamrollArray(arr) {
    let pureArr = [].concat(...arr);
    return pureArr.some(Array.isArray) ? steamrollArray(pureArr): pureArr;
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));