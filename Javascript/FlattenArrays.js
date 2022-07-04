function flattenArrays(arrs){
   return  arrs.reduce((flat, arr) => flat.concat(arr) , []);
}

console.log(flattenArrays([[1,2,3], [4, 5, 6]]));