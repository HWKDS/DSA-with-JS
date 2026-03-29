// create a LL from given array values

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
}

// main coding from kds 

let arr = [1,2,3,4,5];
let ll = new LinkedList();
for(let val of arr){
    ll.add(val);
}
console.log(ll);