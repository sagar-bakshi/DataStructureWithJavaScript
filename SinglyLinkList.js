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

}

let list = new SinglyLinkList();

list.addNode(23);



console.log(list.pop());
console.log(list.pop());
