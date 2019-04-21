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
const add = (a, b) => (a + b);
console.log(add(3, 4));

const memoize = (fn) => {
  let cache = [{}];
  return (...args) => {
    let n = args[0];
    let y = args[1];
    for (let key in cache) {
      let result = compareArrays(cache[key].args, [n, y])
      if (result) {
        console.log('Memory');
        return cache[key].result
      }
    }
      console.log('Calculating result');
      let result = fn(n, y);
      cache.push({args: [n, y], result: result})
      //cache[n] = result;
      return result;

  }
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(3, 4));  
console.log(memoizedAdd(3, 4));  




