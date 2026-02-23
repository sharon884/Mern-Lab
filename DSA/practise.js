class Binary {
    constructor ( value ) {
        this.value = value;
        this.left  = null;
        this.right = null;
    };

    insert ( value ) {
         
        if ( this.value > value ) {
             if ( this.left == null ) {
                 this.left = new Binary ( value);
             }else  {
                 this.left.insert(value);
             }
        }else {
            if ( this.right == null ) {
                 this.right = new Binary(value);
            }else {
                this.right.insert(value);
            }
        }
    }
};

