// https://leetcode.com/problems/peeking-iterator

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
    iterator: Iterator;
    currentNumber: number;

    constructor(iterator: Iterator) {
        this.iterator = iterator;
        this.currentNumber = this.iterator.next();
    }

    peek(): number {
        return this.currentNumber;
    }

    next(): number {
        const prevNumber = this.currentNumber;
        this.currentNumber = this.iterator.next();

        return prevNumber;
    }

    hasNext(): boolean {
        return this.currentNumber > 0 || this.iterator?.hasNext() || false;
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */