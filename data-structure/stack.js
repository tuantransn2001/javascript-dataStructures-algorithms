class MyStack {
  constructor() {
    this.count = 0;
    this.storage = [];
  }
  // ? Push
  static push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  // ? Pop
  static pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const LastEl = this.storage[this.count];
    delete this.storage[this.count];
    return LastEl;
  }
  // ? Peek
  static peek() {
    return this.storage[this.count];
  }
  // ? Size
  static size() {
    return this.storage.length;
  }
}
module.exports = MyStack;
