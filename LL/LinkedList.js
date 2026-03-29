class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    del(data) {
        if (this.head === null) return;
        if (this.head.data == data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next != null && current.next.data !== data) {
            current = current.next;
        }
        if (current.next !== null) {
            current.next = current.next.next;
        }

    }
    pop() {
        if (this.head === null) return null;
        if (this.head.next == null) {
            this.head = null;
            this.size--;
            return;
        }
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
        this.size--;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let LL = new LinkedList();
LL.add(15);
LL.add([{ name: "Keshav", age: 12, rollNum: 12234 }, { name: "KDS", age: 13, rollNum: 12355 }]);
LL.add(123 + "test")
LL.add(23);
LL.print();
console.log("after del function")
LL.del(123 + "test");
LL.print();
console.log("after pop func")
LL.pop();
LL.print();