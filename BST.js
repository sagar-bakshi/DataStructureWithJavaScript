class Node{
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if (!this.root){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while (true){
                if (value == current.value) return undefined;
                if (value < current.value){
                    if (current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }else{
                    if (current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    find(value){
     if (this.root.value === null) return false
        let current = this.root;
        let found = false;
        while (current && !found){
            if (current.value > value){
                current = current.left;
            }else if (current.value < value){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }
    BFS(){
        let queue = [],
            data = [],
            node = this.root;
        queue.push(node);
        while (queue.length){
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(9);
tree.insert(15);
tree.insert(8);
tree.insert(5);

//      10
//     9    15
//  8
//5


