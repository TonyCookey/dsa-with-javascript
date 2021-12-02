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
        this.shiftItems(index)
        return item
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }


}

let arr1 = new arrayFromScratch()

arr1.push('item0')
arr1.push('item1')
arr1.push('item2')
arr1.push('item3')
arr1.push('item4')
let result = arr1.get(0)
result
arr1
// // arr1.pop()
arr1.delete(1)
arr1