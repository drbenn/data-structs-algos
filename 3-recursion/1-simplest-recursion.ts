function recurse(n: number): number {
  // Base Case
  if (n === 1) {
    return 1
  }
  console.log(n);
  
  // Recursive Case
  return n + recurse(n - 1);
}


const r1 = performance.now()
recurse(2001)
const r2 = performance.now()
console.log(` Time: ${r2 - r1}ms`);



