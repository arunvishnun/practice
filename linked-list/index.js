/**
 * References 
 * - https://apps2.mdp.ac.id/perpustakaan/ebook/Karya%20Umum/Dsa.pdf
 */

class Node {

    constructor(value) {
        this.data = value;
        this.next = null;
    }

}

class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }


    // Appends a new node to the end of linked linkedList.
    // Some implementatins traverse through the linked List before addition of new node. 
    // However, that is some times misleading as the Time Complexity for LinkedList Insertion/addition is O(1).
    // Algithm followed is as per https://apps2.mdp.ac.id/perpustakaan/ebook/Karya%20Umum/Dsa.pdf
    add(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }


    // O(n) - visiting each node until we find. returns false if not found.
    search(value) {
        let current = this.head;
        while(current !== null) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }

        return false
    }


    /**
     * 
     * Deleting a node from a linked list is straightforward but there are a few cases
        we need to account for:
        1. the list is empty; or
        2. the node to remove is the only node in the linked list; or
        3. we are removing the head node; or
        4. we are removing the tail node; or
        5. the node to remove is somewhere in between the head and tail; or
        6. the item to remove doesn’t exist in the linked list} value 
     */
    delete(value) {
        // TODO
    }

    // This method is worried only about pretty printing. Should not be considered for time or space compexities of Linked List
    print() {
        let current = this.head;
        const array = []
        while(current !== null) {
            array.push(current.data);
            current = current.next;
        }
        array.push('null')
        return array.join(' --- > ');
    }
}

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

console.log(linkedList.print())
console.log(linkedList.search(0))

