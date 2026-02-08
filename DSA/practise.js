class Node {
    constructor ( data ) {
        this.data = data;
        this.next = null;
        this.prev = null;
    };
};


class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };

    append(data) {
        let newNode = new Node(data);

        if ( !this.head ) {
            this.head = this.tail =  newNode;
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        } 
    };


    print() {
        if ( !this.head ) return;

        let current = this.head;
        let result = "";
        while ( current ) {
              result = result + current.data + "< - > ";
              current = current.next;
        };

        result = result + null;
        return  console.log(result);
    }
};

const list = new DoubleLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();
