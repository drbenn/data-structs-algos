# Queue

## The first data structure formed on top of a linked list (also, a very common data structure)

- A Queue is FIFO ( First In First Out), so if you want to add to a queue it goes to the back of the line/extends off the tail of the queue.

- A Queue is performant because it does not traverse the list(for loop/O(n) time) it only deals will pushing to the tail of the list, and popping items off the head of the list. So adding/removing from the tail/head and reassigning tail from previous tail and head from previous head are the only manipulations the queue can take.