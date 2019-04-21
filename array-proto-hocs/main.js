"use strict"

function compareArrays(arr1,arr2){
  if(!arr1  || !arr2) return

  let result;

  arr1.forEach((e1,i)=>arr2.forEach(e2=>{

      if(e1.length > 1 && e2.length){
        result = compare(e1,e2);
      }else if(e1 !== e2 ){
        result = false
      }else{
        result = true
      }
    })
  )

  return result

}

compareArrays([8, 9], [8, 9]);
console.log(compareArrays([8, 9], [8, 9]));
const add = (x, y) => (x + y);
console.log(add(3, 4));

const memoize = (fn) => {
  let cache = [{}];
  return (...args) => {
    for (let key in cache) {
      let result = compareArrays(cache[key].args, args)
      if (result) {
        console.log('Fetching from cache');
        return cache[key].result
      }
    }
      console.log('Calculating result');
      let result = fn(...args);
      cache.push({args: args, result: result})
      
      return result;

  }
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(3, 4));  
console.log(memoizedAdd(3, 4));  
console.log(memoizedAdd(3, 6));
console.log(memoizedAdd(3, 6));




