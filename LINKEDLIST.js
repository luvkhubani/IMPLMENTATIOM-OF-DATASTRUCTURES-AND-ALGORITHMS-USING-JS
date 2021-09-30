// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList()
  {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index , value){
    let i = 1;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    if(index === 0){
        this.prepend(value)
        i++;
      }

    const newNode = new Node(value);
    const leader = this.pointatindex(index-1);
    const holder = leader.next;
    leader.next = newNode;
    newNode.next = holder;
    this.length++;
    return this
    
  }
  pointatindex(index){
    let counter = 0;
    let currentnode = this.head;
    while(counter !== index){
      currentnode = currentnode.next;
      counter++;
    }
    return currentnode;
  }

  delete(index){
    const leader = this.pointatindex(index-1);
    const deletepointer = leader.next
    leader.next = deletepointer.next;
    //WE CAN ALSO DO
    // leader.next = leader.next.next;
    this.length--;
    return this;
  }
  
  reverse(){
    let current = this.head;
    let prev = null;
    let next = this.head
    while(next !== null){
      next = next.next;// save next element
      current.next = prev;//first node now have next pointer at null like last node used to have
      prev = current;// prev node is now pointing at which was before first node
      current = next;// now current is at second node like next node and this loop continues until the arrows of linked list are reversed and we return previous node which is now pointing at last node which will act like head.
    }
    this.head = prev;
}
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(9);
myLinkedList.insert(2,8);
myLinkedList.insert(2,20);
myLinkedList.delete(4);
myLinkedList.reverse();
myLinkedList.printList();
