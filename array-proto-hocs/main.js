"use strict"

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let set = {};
  arr1.forEach((i) => {
    if (set[i] !== undefined) {
      set[i]++;
    } else {
      set[i] = 1;
    }
  });
  let difference = arr2.every((i) => {
    if (set[i] === undefined) {
      return false;
    } else {
      set[i]--;
      if (set[i] === 0) {
        delete set[i];
      }
      return true;
    }
  });
  return Object.keys(set) == 0 && difference;
}




// function compareArrays(arr1,arr2){
//   if(!arr1  || !arr2) return

//   let result;

//   arr1.every((e1,i)=>arr2.every(e2=> {

//       if(e1.length > 1 && e2.length){
//         result = compare(e1,e2);
//       }else if(e1 !== e2 ){
//         result = false
//       }else{
//         result = true
//       }
//     })
//   )

//   return result

// }

compareArrays([8, 9], [8, 9]);
console.log(compareArrays([8, 9], [8, 9]));
const add = (x, y) => (x + y);
console.log(add(3, 4));

const memoize = (fn) => {
  let memory = [];
  return (...args) => {
    for (let key in memory) {
      let result = compareArrays(memory[key].args, args)
      if (result) {
        console.log('Fetching from memory');
        return memory[key].result
      }
    }
      console.log('Calculating result');
      let result = fn(...args);
      memory.push({args: args, result: result})
      
      return result;

  }
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(3, 4));  
console.log(memoizedAdd(3, 4));  
console.log(memoizedAdd(3, 6));
console.log(memoizedAdd(3, 6));




