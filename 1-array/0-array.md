# Array

- A contiguous(unbreaking) memory space, which contains a specific amount of bytes

- memory space is all of the same type
  - ex a = int[3]

- arrays do not insert, they overwrite. If you were to insert to replace instead of overwrite, you would temporarily expand the memory space to accept the additional value and then contract, but that expansion would potentially expand(and overwrite/reallocate) into another adjacent memory space/buffer being used.

- so to edit value in array you would...
1. go to 'a' s memory address
2. add in the width of the type(usually referenced in bytes - so 32bit integer would be 4 bytes)
3. Multiply by the offset
4. then write it in

- Deletion isnt really deletion in array buffers, because the buffer is must still be maintained. So a deleted value is just a buffer without a value or in more of a 'null' state. YOU MUST REALLOCATE.

- So also no push or pop, etc on arrays. YOU MUST REALLOCATE.

- **Anytime you access the known value of an array it is O[1] because you know exactly where to go.**


# Bubble Sort

- basic math truism used in bubble sort is x<sub>i</sub> <= x<sub>i</sub> + 1

- Basically, bubble sort works by iterating through array, and if i + 1 is less than i, the two values swithc indexes.

- Another way to think about it is, as you iterate through the array, the largest value of the two values being compared is moved the to highest index.

# Quick Sort

- Divide and conquer

- split array in twine with pivot point. Data is already sorted, so values above pivot have higher value and points below pivot have smaller values. Then keep splitting in half again with new pivot