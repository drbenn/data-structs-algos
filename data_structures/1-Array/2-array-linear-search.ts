function linear_search(haystack: number[], needle: number): boolean {

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
}

const t0 = performance.now()
const result = linear_search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 22)
const t1 = performance.now()

console.log(result);
console.log(`Call took ${t1 -t0} milliseconds. \n t0 = ${t0} \n t1 = ${t1}`);
