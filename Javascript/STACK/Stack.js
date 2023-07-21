class Stack {
    constructor() {
        this.initializeStack();
    }

    push(value){
        let newNode = new Node(value);

        if(this.isEmpty()){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        this.increaseSize();
    }

    pop(){
        if (this.isEmpty()) return null;

        let temp = this.first.value;
        if (this.first === this.last){
            this.initializeStack()
            return temp;
        }

        this.first = this.first.next;
        this.decreaseSize();

        return temp;
    }

    initializeStack(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }

    increaseSize(){
        ++this.size;
    }

    decreaseSize(){
        --this.size;
    }
}