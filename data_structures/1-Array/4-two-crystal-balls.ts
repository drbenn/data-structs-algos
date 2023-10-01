
// given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot where it will break in the most
// optimized way - ANSWER = SQRT break 1 ball, then go back to the last index where
// the ball did not break then increment 1 at a time.

// Solution 1
// function two_crystal_balls(breaks: boolean[], floors: number, breakFloor: number) {
//   let floorsArray = new Array(floors).fill(0);

//   // populate array with appropriate floors
//   let floor: number = 1;
//   for (let i = 0; i < floorsArray.length; i++) {
//     floorsArray[i] = floor;
//     floor++;
//   }
  
//   // 1. break the first ball and find the last non-break index

//   let floorSqrt: number = Math.floor(Math.sqrt(floors))

//   console.log(floorSqrt);
//   let lastUnbrokenFloor:number = 0;
//   for (let i = 0; i < breakFloor; i += floorSqrt) {
//     console.log('sqrt test floor: ',i);
//     lastUnbrokenFloor = i; 
//     breaks[0] = true;
//   }

//   // 2. first ball is broken, increment linearly until second ball breaks to find exact floor
//   let foundBrokenFloor: number = 1;
//   let remainingFloors = floorsArray.slice(lastUnbrokenFloor,floorsArray.length)
  
//   for (let i = 0; i < remainingFloors.length ; i++) {
//     if (remainingFloors[i] === breakFloor) {
//       foundBrokenFloor = remainingFloors[i];
//       breaks[1] = true;
//       return foundBrokenFloor;
//     } 
//   } 

// }

// Solution 2
// function two_crystal_balls(floors: number) {

//   const balls: boolean[] = [true, true]

//   // 1. generate random break floor to use
//   let breakFloor = Math.floor((Math.random() * floors));
//   let breakIndex: number = breakFloor - 1;
//   console.log('random floor that breaks: ', breakFloor, 'index of : ', breakIndex);

//   // 2. generate an array of break floor results
//   const floorBools: boolean[] = new Array(floors).fill(false);
//   console.log('floorArray length: ', floorBools.length);
  
//   for (let i = 0; i < floorBools.length ; i++) {
//     if ( breakIndex <= i) {
//       floorBools[i] = true; // true === ball will break
//       }
//   }

//   console.log('floorArrayBools: ',floorBools);
    
//   // 3. increment by sqrt to get first broken ball
//   const sqrt = Math.floor(Math.sqrt(floors))
//   console.log('sqrt increment: ', sqrt);

//   let ballBreak1FloorIndex: number = 0;

//   while (floorBools[ballBreak1FloorIndex] !== true) {
//     ballBreak1FloorIndex += sqrt;
//     balls[0] = false;
//   }
  
//   console.log('1st break floor index:', ballBreak1FloorIndex);
//   const lastSafeBreakFloorIndex = ballBreak1FloorIndex - sqrt;
//   console.log('last safe break floor index:', lastSafeBreakFloorIndex);
  
//   // 4. assign last safe floor ball dropped from
//   let brokenFloor: number = 0;
//   for (let i = lastSafeBreakFloorIndex; i < floorBools.length ; i++) {

//     if (floorBools[i] === true) {
//       balls[1] = false;
//       brokenFloor =  i + 1;
//       break
//     }
//   }
//   return brokenFloor;
// }



// PRIME SOLUTION

function prime_balls_breaks(floors: number): number {

  // 1. generate random break floor to use
  let breakFloor = Math.floor((Math.random() * floors));
  let breakIndex: number = breakFloor - 1;
  console.log('random floor that breaks: ', breakFloor, 'index of : ', breakIndex);

  // 2. generate an array of break floor results
  const floorBools: boolean[] = new Array(floors).fill(false);
  console.log('floorArray length: ', floorBools.length);
  
  for (let i = 0; i < floorBools.length ; i++) {
    if ( breakIndex <= i) {
      floorBools[i] = true; // true === ball will break
      }
  }

  const jmpAmount = Math.floor(Math.sqrt(floorBools.length))

  let i = jmpAmount;
  for (; i < floorBools.length; i+= jmpAmount) {
    if (floorBools[i]) {
      break;
    }
  }

  i -= jmpAmount;

  for (let j = 0; j < jmpAmount && i < floorBools.length; ++j, ++i) {
    if (floorBools[i]) {
      return i
    }
  }

  return -1;

}

const t4 = performance.now()

// Solution 1
// const result2 = two_crystal_balls([false, false], 9999999, 8888888);

// Solution 2
// const result2 = two_crystal_balls(20);

// PRIME SOLUTION
const result2 = prime_balls_breaks(20);

const t5 = performance.now()

console.log(result2);
console.log(`Call took ${t5 - t4} milliseconds. \n t0 = ${t4} \n t1 = ${t5}`)

