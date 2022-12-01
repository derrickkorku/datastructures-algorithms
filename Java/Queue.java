/**
 * Implement java Queue data structure
 */
class Queue {
    private int capacity;
    private int size;
    private int front;
    private int rear;
    private int[] queue;


    Queue(int capacity){
        this.capacity = capacity;
        this.queue = new int[capacity];
        this.front = 0;
        this.rear = capacity - 1;
        this.size = 0;
    }

    boolean isFull(Queue queue){
        return this.queue.capacity - 1 == this.queue.size;
    }

    boolean isEmpty(Queue queue){
        return this.queue.size == 0;
    }

    /**
     * Add item to queue Or at the end of this.queue
     */
    void enqueue(int item){
      if isFull(this){
        return;
      }

      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = item;
      this.size++;
    }


    /**
     * Remove item from the front of queue or Dequeue
     */
    int dequeue(){
        if(isEmpty(this)){
            return Integer.MIN_VALUE;
        }

        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return this.queue[this.front];
    }

    /**
     * Peek front item
     */
    int front(){
        if(isEmpty(this)){
            return Integer.MIN_VALUE;
        }

        return this.queue[this.front];
    }

    /**
     * Peek rear item
     */
    int rear(){
        if(isEmpty(this)){
            return Integer.MIN_VALUE;
        }

        return this.queue[this.rear];
    }
}