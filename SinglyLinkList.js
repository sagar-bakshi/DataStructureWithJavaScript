class Node {
    constructor(n) {
        this.value = n;
        this.next = null;
    }
}

class SinglyLinkList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    addNode(value){
            let tempNode = new Node(value);
        if (!this.head){
            this.head = tempNode;
            this.tail = this.head;
        }else{
            this.tail.next = tempNode;
            this.tail = tempNode;
        }

        this.length++;
        return this;
    }
    traverse(){
        let current = this.head;
        while (current){
            console.log(current.value);
            current = current.next;
        }
    }

    pop(){
        if (!this.head){
            return undefined;
        }
            let current = this.head;
            let pre = current;

            while (current.next){
                pre = current;
                current = current.next;
            }

            this.tail = pre;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
    }
    shift(){
        if (this.head && this.length > 0){
            let temp = this.head;
            this.head = this.head.next;
            this.length--;
            return temp;
        }else {
            return undefined;
        }
    }
    print(){
        let arr = []
        let temp = this.head;
        while (temp.next){
            arr.push(temp.value);
            temp = temp.next;
        }
        return arr;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    return this;
    }
}

let list = new SinglyLinkList();


list.addNode(23);
list.addNode(40);
list.addNode(50);
list.addNode(20);
list.addNode(80);




list.reverse();


