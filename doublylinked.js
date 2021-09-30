class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList{
  constructor(value){
    this.head = {
    value : value,
    next : null,
    previous : null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
    return this;

  }

  insert(index,value){
    const leader = this.pointatindex(index-1);
    const toaddat = leader.next;
    const newNode = new Node(value);
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = toaddat;
    toaddat.previous = newNode;
    this.length++;
    return this;

  }

  prepend(value){
    const newNode = new Node(value);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  delete(index){
    const leader = this.pointatindex(index-1);
    const deletenode = leader.next;
    deletenode.next.previous = leader;
    leader.next = deletenode.next;
  }

  pointatindex(index){
    let counter = 0;
    let current = this.head;
    while(counter !== index){
      current = current.next;
      counter++
    }
    return current;
  }
  printlist()
  {
    let head1 = this.head;
    const array1 = [];
    while(head1 !== null)
    {
      array1.push(head1.value);
      head1 = head1.next;
    }
    return array1;
  }
}
let myLinkedList = new DoublyLinkedList(2);
myLinkedList.append(3)
myLinkedList.append(5)
myLinkedList.append(8)
myLinkedList.insert(2,9)
myLinkedList.delete(3)
myLinkedList.prepend(10)
myLinkedList.printlist()
