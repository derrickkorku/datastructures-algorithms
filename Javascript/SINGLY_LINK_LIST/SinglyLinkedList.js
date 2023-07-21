class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Add to tail
     * @param value
     * @returns {SinglyLinkedList}
     */
    push(value){
        let newNode = Node(value);

        if (this.isEmpty()){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
        return this;
    }

    /**
     * Remove from tail
     * @returns {*|null}
     */
    pop(){
        if(this.isEmpty()) return null;

        let current = this.head;
        let beforeLast = null;

        while(current.next){
            beforeLast = current;
            current = current.next;
        }

        beforeLast.next = null;
        this.tail = beforeLast;
        this.size--;

        this.isEmptyResetAction();

        return current;
    }

    /**
     * Remove from head
     * @returns {*}
     */
    shift(){
        let currenthead = this.head;
        this.head = currenthead.next;

        this.size--;

        this.isEmptyResetAction();

        return currenthead;
    }

    /**
     * Add node to the head
     * @param value
     * @returns {SinglyLinkedList}
     */
    unshift(value){
        let newNode = new Node(value);

        if (this.isEmpty()){
            this.head = newNode;
            this.tail = this.head;
        }

        let currentHead = this.head;

        this.head = newNode;
        this.head.next = currentHead;

        this.size++;
        return this;
    }

    /**
     * Get value of node by index
     * @param index
     * @returns {*|null}
     */
    get(index){
        if (index < 0 || index >= this.size) return null;

        let currentNode = this.head;
        let counter = 0;

        if (counter !== index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    /**
     * Update node value by index
     * @param index
     * @param value
     * @returns {boolean}
     */
    set(index, value){
        let node = this.get(index);

        if (node === null) return false;

        node.value = value;

        return true;
    }

    /**
     * Insert new node at any index
     * @param index
     * @param value
     * @returns {boolean}
     */
    insert(index, value){
        if (index < 0 || index > this.size) return false;

        if (index === 0) return !!this.shift(value);

        if (index === this.size) !!this.push(value);

        let newNode = new Node(value);
        let beforeNode = this.get(--index);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.next = afterNode;

        this.size++;

        return true;
    }


    /**
     * Remove node at an index
     * @param index
     * @returns {(function(): (*|null))|*|null}
     */
    remove(index){
        if (index < 0 || index >= this.size) return null;

        if (index === 0) return this.shift();
        if (index === this.size - 1) return this.pop;

        let beforeNode = this.get(--index);
        let afterNode = beforeNode.next;

        beforeNode.next = afterNode.next

        this.size--;
        this.isEmptyResetAction();

        return  afterNode;
    }

    getMiddle(){
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    }

    reverse(){
        let currentNode = this.head;
        let nextNode = null;
        let prevNode = null;

        while(currentNode !== null){
            nextNode = currentNode.next;

            currentNode.next = prevNode;
            prevNode = currentNode;

            currentNode = nextNode;
        }

        this.head = prevNode;

        return this;
    }

    isEmptyResetAction(){
        if(this.isEmpty()){
            this.head = null;
            this.tail = null;
        }
    }
    isEmpty(){
        return this.size === 0;
    }
}