






// Given: list is already sorted low to high!

// my attempt
function binary_search_alg(haystack: number[], needle: number): boolean {
  // Indexes of list
  let lo = 0;
  let hi = haystack.length;
  

  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2)
    console.log(`lo: ${lo}, hi: ${hi}, mid: ${mid}`);
    
    if (haystack[mid] === needle) {
      return true;
    } 
    else if (haystack[mid] < needle) {
      lo = mid +1;
    } else {
      hi = mid;
    }
  }
  
  return false;
}


// Prime's version
// function binary_search_alg(haystack: number[], needle: number): boolean {

//   let lo: number = 0;
//   let hi: number = haystack.length;

//  do {
//   const m = Math.floor(lo + (hi - lo) / 2);
//   const v = haystack[m];

//   if (v === needle) {
//     return true;
//   }
//   else if (v > needle) {
//     console.log(v);
    
//     hi = m;
//   } else{
//     console.log(v);
//     lo = m + 1;
//   }
//  }
//  while (lo < hi)

//  return false
// };

const t2 = performance.now()

const result1 = binary_search_alg([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 22)

const t3 = performance.now()

console.log(result1);
console.log(`Call took ${t3 - t2} milliseconds. \n t0 = ${t2} \n t1 = ${t3}`);