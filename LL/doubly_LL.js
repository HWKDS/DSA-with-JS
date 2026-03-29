class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null
    }
}
class doublyLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
        }
        else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    addAtFront(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    delete(data){
        let curr = this.head;
        while(curr){
            if(curr.data === data){
                if(curr.prev) curr.prev.next = curr.next;
                else this.head = curr.next;

                if(curr.next) curr.next.prev = curr.prev;
                else this.tail = curr.prev;

                return true;
            }
            curr = curr.next;
        }
        return false;
    }
    printFromStart(){
        let curr = this.head;
        while(curr){
            console.log(curr.data);
            curr = curr.next;
        }
    }
    printFromEnd(){
        let curr = this.tail;
        while(curr){
            console.log(curr.data);
            curr = curr.prev;
        }
    }
}

let dll = new doublyLL();
console.log("insert at end");
dll.add(15);
// dll.add([{ name: "Keshav", age: 12, rollNum: 12234 }, { name: "KDS", age: 13, rollNum: 12355 }]);
// dll.add(123 + "test")
dll.add(11);
dll.printFromStart();
dll.addAtFront(1);
console.log("from start");
dll.printFromStart();
console.log("from end");
dll.printFromEnd();
console.log("after delete");
dll.delete(15);
dll.printFromStart();

