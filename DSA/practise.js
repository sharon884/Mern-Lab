class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
};


class CircularLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    };

    append( data ) {
         let newNode = new Node(data);

         if ( !this.head ) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
         }else {
           
            this.tail.next = newNode;
             newNode.next = this.head;
             this.tail = newNode;

         }
    };


    
}