class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class ccLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
            newNode.next = this.head;
        }
        else{
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
    }
    print(){
        if(!this.head) return;
        let curr = this.head;
        do{
            console.log(curr.data);
            curr = curr.next;
        }
        while(curr !== this.head);
    }
}

let cll = new ccLL();
cll.add(1);
cll.add(2);
cll.add(3);
cll.add(4);
cll.print();