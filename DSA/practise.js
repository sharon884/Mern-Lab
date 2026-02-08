class Node {
    constructor ( value ) {
        this.data = value;
        this.next = null;
    };
};


class LinkedList {
    constructor() {
        this.head = null;
    };


    append( data ) {
        let newNode = new Node(data);

        if ( !this.head ) {
            this.head = newNode;
            return;
        }else {


              let current = this.head;
              while ( current.next != null ) {
                    current = current.next;
              };

              current.next = newNode;
        }
    };



    print() {
        if ( !this.head ) return;

          let current = this.head;
          let result = "";
          while ( current ) {
            result = result + current.data + "->";
             current = current.next;
          };

          result = result + null;
          console.log(result);
    };
};



const list = new LinkedList();
list.append(10);
list.append(20)
list.append(30);
list.append(40);
list.print();
