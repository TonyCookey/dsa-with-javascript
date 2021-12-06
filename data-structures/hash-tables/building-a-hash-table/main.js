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
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
const result = myHashTable.get('grapes')
result
