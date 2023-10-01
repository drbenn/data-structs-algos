// MY SOLUTION
// function bubble_sort(nums: number[]): number[] {

//   for (let i = 0; i < nums.length; i++) {

//     if ( i + 1 <= nums.length && nums[i+1] <= nums[i]) {
//       let temp = nums[i];
//       nums[i] = nums[i + 1];
//       nums[i + 1] = temp;
//     }
//   }

//   return nums
// }


// PRIME SOLUTION
// Note: mysolution works with small data sets, however, with larger it becomes apparent the nested loop is necessary as it iterates over the remaining items in the nums array as i is iterated and will sort based on all remaining indexes, not just i + 1
function bubble_sort(nums: number[]): number[] {

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      
      if (nums[j] > nums[j + 1]) {
        const tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
  
    }
  }
  return nums
}





const t6 = performance.now()


const result3 = bubble_sort([1,3,10,5,8, 22, 12, 99, 16, 1, 5 ,8 ,55, 66, 99, 47, 320, 290 ,10000, 52984, 1 ,6, 8150, 81, 2185])

const t7 = performance.now()

console.log(result3);
console.log(`Call took ${t7 - t6} milliseconds. \n t0 = ${t6} \n t1 = ${t7}`)