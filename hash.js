class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key1, val){
    let hash1 = this._hash(key1);
    if(!this.data[hash1]){
      this.data[hash1] = [];
    }
    this.data[hash1].push([key1 , val]);
    return this.data
  }

  get(key2){
    let hash2 = this._hash(key2);
    const currentbucket = this.data[hash2];
    for(let i = 0 ; i< currentbucket.length ; i++)
    {
    if(currentbucket[i][0] === key2)
    {
      return currentbucket[i][1];
    }
    }
    return undefined;
  }
}


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)

myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.get('grapes')
