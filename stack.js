// Stacks

// LAST IN FIRST OUT

function createStack() {
  const arr = [];
  return {
    push(item) {
      arr.push(item);
    },
    pop() {
      return arr.pop();
    },
    peek() {
      return arr[arr.length - 1];
    },
    get length() {
      return arr.length;
    },
    isEmpty() {
      return arr.length === 0;
    }
  };
}

const lowerBodyStack = createStack();

lowerBodyStack.push("underwear");
lowerBodyStack.push("socks");
lowerBodyStack.push("pants");
lowerBodyStack.push("shoes");

lowerBodyStack.pop();
lowerBodyStack.pop();
console.log(lowerBodyStack.length);
