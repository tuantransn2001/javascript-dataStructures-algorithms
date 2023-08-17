class MySet {
  constructor() {
    this.collection = [];
  }
  // ? Check El is exists on collection or not
  has(element) {
    return this.collection.indexOf(element) !== -1 ? true : false;
  }
  // ? View all el of collection
  value() {
    return this.collection;
  }
  // ? Add new el into set
  add(newEl) {
    if (!this.has(newEl)) {
      this.collection.push(newEl);
      return true;
    } else {
      return false;
    }
  }
  // ? Remove el from set
  remove(el) {
    if (this.has(el)) {
      const elPos = this.collection.indexOf(el);
      if (elPos !== -1) {
        this.collection.splice(elPos, 1);
        return true;
      }
    } else {
      return false;
    }
  }
  // ? View size of collection
  size() {
    return this.collection.length;
  }
  // ? Return the union pof two set
  union(otherSet) {
    const unionSet = new MySet();
    const currentSet = this.value();
    const otherSetArr = otherSet.value();

    currentSet.forEach((el, index) => {
      unionSet.add(el);
    });
    otherSetArr.forEach((el, index) => {
      unionSet.add(el);
    });
    return unionSet.value();
  }
  // ? Return the intersaction of two set
  intersaction(otherSet) {
    const intersactionSet = new MySet();

    const currentSet = this.value();
    currentSet.forEach((el) => {
      if (otherSet.has(el)) {
        intersactionSet.add(el);
      }
    });
    return intersactionSet.value();
  }
  // ? Return the different of two set
  different(otherSet) {
    const differentSet = new MySet();
    const currentSet = this.value();
    currentSet.forEach((el, index) => {
      if (!otherSet.has(el)) {
        differentSet.add(el);
      }
    });
    return differentSet.value();
  }
  // ? Test if other set is a subset of current set
  subset(otherSet) {
    const otherSetArr = otherSet.value();
    const otherSetLength = otherSet.size();
    for (let index = 0; index < otherSetLength; index++) {
      if (!this.has(otherSetArr[index])) {
        return false;
      }
    }
    return true;
  }
}

module.exports = MySet;
