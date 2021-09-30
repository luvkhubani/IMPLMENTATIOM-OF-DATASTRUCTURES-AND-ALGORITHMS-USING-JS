class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this;
    }
    else{
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
    }
  }
  pop(){
    if(!this.top){
      return null;
    }
    if(this.top === this.bottom){
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
  printList()
  {
    const array = [];
    let currentNode = this.top;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(11);
myStack.push(12);
myStack.peek();
myStack.printList();





//Discord
//Udemy
//google
