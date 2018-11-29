// Linked List

function createNode(value) {
  return {
    value,
    next: null
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = createNode(value);
      // head is null, list is empty
      if (this.head === null) {
        // set head and tail to new node, return new node
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }

      // when list has length, set the next property of current tail to new node
      this.tail.next = node;
      // reset tail
      this.tail = node;
      // increment length
      this.length++;

      return node;
    },
    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }

      let current = this.head;
      let penultimate;
      while (current) {
        // if next property is equal to tail we're at penultimate node
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }

        // not penultimate item, keep going down list
        current = current.next;
      }

      // now we have our penultimate node
      // set next property to null (it's going to be the new tail)
      penultimate.next = null;
      this.tail = penultimate;
      this.length--;

      return node;
    },
    get(index) {
      if (index < 0 || index > this.length) {
        return null;
      }

      if (index === 0) {
        return this.head;
      }

      let current = this.head;
      let i = 0;
      while (i < index) {
        i++;
        current = current.next;

        return current;
      }
    },
    delete(index) {
      if (index === 0) {
        // save node to return later
        const deleted = this.head;
        // set head to next node (it is the new head)
        this.head = this.head.next;
        this.length--;

        return deleted;
      }

      let current = this.head;
      let prev;
      let i = 0;

      while (i < index) {
        i++;
        prev = current;
        current = current.next;
      }

      // at this point current is the node we want to delete
      const deleted = current;
      // set next property of previous node to next property of next node
      // effectively slicing out the current node
      prev.next = current.next;
      this.length--;

      return deleted;
    },
    print() {
      const values = [];
      let current = this.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }

      return values.join(" => ");
    },
    isEmpty() {
      return this.length === 0;
    }
  };
}

const list = createLinkedList();
const values = ["a", "b", "c", "d", "e"];
const nodes = values.map(val => list.push(val));

list.pop();
console.log(list.delete(1));
console.log(list.print());
