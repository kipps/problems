
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class LinkedList {
    head?: null
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

console.log(node1);


// let list = new LinkedList(node1);


// console.log(list);


// const list1: ListNode = {
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// };

// const list2: ListNode = {
//     val: 1,
//     next: {
//         val: 3,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// };

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     if (!list1 || !list2) {
//         return list1 || list2;
//       }
      
//       const [first, hold] = list1.val < list2.val ? [list1, list2] : [list2, list1];
//       first.next = mergeTwoLists(first.next, hold);
//       return first;  
// };


// const result = mergeTwoLists(list1, list2);

// console.log(result);


// const result = mergeTwoLists([1,2,4], [1,3,4]);
// const result = mergeTwoLists([], []);
// const result = mergeTwoLists([], [0]);

// console.log(result);

// mergeTwoLists(null, null);