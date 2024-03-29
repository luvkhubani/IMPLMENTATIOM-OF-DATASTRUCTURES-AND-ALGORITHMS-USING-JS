class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
    else {
      let runner = this.root;
      while (true) {

        if (value < runner.value) {
          if (!runner.left) {
            runner.left = newNode;
            return this;
          }
          runner = runner.left;
        }
        else {
          if (value > runner.value) {
            if (!runner.right) {
              runner.right = newNode;
              return this;
            }
            runner = runner.right;
          }
        }
      }
    }

  }
  lookup(value) {
    let currentNode = this.root;
    if(!currentNode){
      return false;
    }

    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      }
      else if(value > currentNode.value){
        currentNode = currentNode.right;
      }
      else if(currentNode.value === value){
        return currentNode;
      }
    }
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.lookup(4)
//JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}