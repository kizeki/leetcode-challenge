// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const arr: number[] = [];
    let result: ListNode;
    let flag = 0;
    do {
        let digit = (l1?.val || 0) + (l2?.val || 0) + flag;
        const quotient = digit / 10;

        if (quotient > 1) {
            digit = digit % 10;
            flag = 1;
        } else if (quotient == 1) {
            digit = 0;
            flag = 1;
        } else {
            flag = 0;
        }

        arr.push(digit);

        l1 = l1?.next;
        l2 = l2?.next;
    }
    while(l1 || l2)

    if (flag > 0) {
        arr.push(flag);
    }

    arr.reverse();
    arr.forEach(i => {
        result = new ListNode(i, result);
    });

    return result;
};