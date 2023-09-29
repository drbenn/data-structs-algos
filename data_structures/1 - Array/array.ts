const a = new ArrayBuffer(6); // 1. in JS array buffers are contiguous pieces of data

console.log("1. ",a); // a series of zeroes, and you want to interpret those 0's as something

// unsigned 8 bit numbers(so num between 0 and 255)
const a8 = new Uint8Array(a); // 2. In the array buffer you can create views, this view created is an 8-bit array. So by identifying the size(8), you specify which memory buffer to access or edit by multiplying the size(8) by the offset(ie index), so a8[5] would read/edit the 6th 8bit buffer in the array of memory.

a8[0] = 45;
console.log("2. ",a8)

a8[2] = 45;
console.log("3. ",a8)

const a16 = new Uint16Array(a);
console.log("4. ",a16)

a16[2] = 0x4545
console.log("5. ",a16)
console.log("6. ",a)
// the reason 45 45 is placed at the end of the array buffer is because you walk the array buffer 8 bits/buffer at a time, so a8[0] and a8[2] adjusted the first and 3rd buffer of the array buffer

// HOWEVER, WHEN MIXING AND MATCHING different sized ints(8bit vs 16bit) with the unint16 each buffer is 16 bits, so 2 8 bit buffers at once, so a16[2] would fill the last 2 buffers of the array buffer of 8bit.

a16[2] = 0x45;
console.log("7. ",a)






console.log("------------------------------");




console.log("1. ",a)
console.log("1. ",a)