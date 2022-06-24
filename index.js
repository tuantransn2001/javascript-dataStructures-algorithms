// ? ======================= JAVASCRIPT STRUCTURES AND ALGORITHMS =======================
// * 1) ==== Stack
const myStack = function () {
  this.count = 0;
  this.storage = [];
  // ? Push
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  // ? Pop
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const LastEl = this.storage[this.count];
    delete this.storage[this.count];
    return LastEl;
  };
  // ? Peek
  this.peek = function () {
    return this.storage[this.count];
  };
  // ? Size
  this.size = function () {
    return this.storage.length;
  };
};
// * 2) ==== Set
const mySet = function () {
  const colection = [];
  // ? Check El is exists on colection or not
  this.has = function (element) {
    return colection.indexOf(element) !== -1 ? true : false;
  };
  // ? View all el of colection
  this.value = function () {
    return colection;
  };
  // ? Add new el into set
  this.add = function (newEl) {
    if (!this.has(newEl)) {
      colection.push(newEl);
      return true;
    } else {
      return false;
    }
  };
  // ? Remove el from set
  this.remove = function (el) {
    if (this.has(el)) {
      const elPos = colection.indexOf(el);
      if (elPos !== -1) {
        colection.splice(elPos, 1);
        return true;
      }
    } else {
      return false;
    }
  };
  // ? View size of colection
  this.size = function () {
    return colection.length;
  };
  // ? Return the union pof two set
  this.union = function (otherSet) {
    const unionSet = new mySet();
    const currentSet = this.value();
    const otherSetArr = otherSet.value();

    currentSet.forEach((el, index) => {
      unionSet.add(el);
    });
    otherSetArr.forEach((el, index) => {
      unionSet.add(el);
    });
    return unionSet.value();
  };
  // ? Return the intersaction of two set
  this.intersaction = (otherSet) => {
    const intersactionSet = new mySet();
    const currentSet = this.value();
    currentSet.forEach((el, index) => {
      if (otherSet.has(el)) {
        intersactionSet.add(el);
      }
    });
    return intersactionSet.value();
  };
  // ? Return the different of two set
  this.different = function (otherSet) {
    const differentSet = new mySet();
    const currentSet = this.value();
    currentSet.forEach((el, index) => {
      if (!otherSet.has(el)) {
        differentSet.add(el);
      }
    });
    return differentSet.value();
  };
  // ? Test if other set is a subset of current set
  this.subset = function (otherSet) {
    const otherSetArr = otherSet.value();
    const otherSetLength = otherSet.size();
    for (let index = 0; index < otherSetLength; index++) {
      if (!this.has(otherSetArr[index])) {
        return false;
      }
    }
    return true;
  };
};

const myQueue = function () {
  const collection = [];

  this.print = function () {
    console.log(colection);
  };

  this.enqueue = function (value) {
    collection.push(value);
  };

  this.decode = function () {
    return colection.shift();
  };

  this.font = function () {
    return colection[0];
  };

  this.size = function () {
    return colection.length;
  };

  this.isEmpty = function () {
    return colection.length === 0;
  };
};
