function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);

  console.log(pivotIdx);
  
}

function partition(arr: number[], lo: number, hi: number): number {
  console.log('in partition');
  
  const pivot = arr[hi];

  let idx = lo -1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}




function quick_sort(arr: number[]): void {
  // 2 functions required
  // 1. parition, that create the pivot index and moces the items <= to each side
  // 2. The quick sort, gets pivot and recursion


  qs(arr, 0 , arr.length - 1);


}



const quickArr: number[] = [9,3,7,4,69,420,42]

quick_sort(quickArr);