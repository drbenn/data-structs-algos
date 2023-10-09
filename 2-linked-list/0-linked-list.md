# Linked List

- cant delete, insert or grow an array, so linked lists are *node based* to grow arrays.

- linked lists are arrays that point to the another array to extend the array. So you can walk the chain of nodes. 

- First node in linked list will have .next to assign the next node, the last node will have .prev to connect to the previous node. All nodes in between first and last will have both .next and .prev to connect all nodes. 

- Deletion and insertion can be fast with linked lists

- getting head and tail of linked list is constant, but deleting in the middle requires O(n) traversal(for loop) of the list of linked list nodes.

- considering you need to transverse the nodes of a linked list - O(n) - there are usually better data structure alternatives to use instead.