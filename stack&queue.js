class Stack {
    constructor(){
        this.items = []
        this.count = 0
    }


    push(element) {
        this.items[this.count] = element
        this.count += 1
        return this.count - 1
    }

    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        return deleteItem
    }

    //Check top element in Stack
    peek(){
        return this.items[this.count - 1]
    }

    //Check if stack is empty
    isEmpty(){
        console.log(this.count == 0 ? "Stack is empty" : "Stack is not empty")
        return this.count == 0
    }

    //Check size of stack
    size(){
        console.log(`${this.count} in stack`)
        return this.count
    }

    //Print elements in stack
    print(){
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items + ''
        }
        return str;
    }
    
    //Clear stack
    clear() {
        this.items = []
        this.count = 0
        return this.items
    }
}
