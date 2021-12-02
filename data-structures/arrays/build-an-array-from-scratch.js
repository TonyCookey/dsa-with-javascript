class arrayFromScratch {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }
    pop() {
        delete this.data[this.length - 1]
        this.length--
    }
    delete(index) {
        const item = this.data[index]
        this.shiftItems()
        return item
    }
    shiftItems() { }


}

let arr1 = new arrayFromScratch()

arr1.push('item1')
arr1.push('item2')
let result = arr1.get(0)
result
arr1
arr1.pop()
arr1