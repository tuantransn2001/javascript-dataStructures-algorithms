class MyQueue {
  constructor() {
    this.collection = [];
  }

  static print() {
    console.log(this.collection);
  }

  static enqueue(value) {
    collection.push(value);
  }

  static decode() {
    return this.collection.shift();
  }

  static font() {
    return this.collection[0];
  }

  static size() {
    return this.collection.length;
  }

  static isEmpty() {
    return this.collection.length === 0;
  }
}

module.exports = MyQueue;
