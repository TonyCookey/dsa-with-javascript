class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    set(key, value) {
        let bucket = []
        // push the key and value into the bucket
        let hashedKey = this.hash(key)
        bucket.push(key, value)

        // save the bucket in the data Array
        this.data[hashedKey] = bucket
    }
    get(key) {
        let hashedKey = this.hash(key)
        return this.data[hashedKey][1]
    }
    keys() {
        let keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0])
            }
        }
        return keysArray
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 56)
const result = myHashTable.get('grapes')
const result2 = myHashTable.keys()
result
result2

