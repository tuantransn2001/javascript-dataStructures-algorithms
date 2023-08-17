class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  // ? Add new node to the end of linked list
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  // ? Add new node to the first of linked list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // ? console linked list
  printLinkedList() {
    const resultArr = new Array();
    let currentNode = this.head;
    while (currentNode !== null) {
      resultArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return resultArr;
  }
  // [ 0 , 1 , 2 , 3 ]

  // insert(2, 4)
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // ? Insert by target index
  insert(index, value) {
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holder = leader.next;

    leader.next = newNode;
    newNode.next = holder;
    this.length++;
    return this;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unWantedNode = leader.next;
    leader.next = unWantedNode.next;
    this.length--;
    return this;
  }
}

module.exports = MyLinkedList;
