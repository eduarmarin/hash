
class HashMap {
    constructor(tableSize = 16) {
      this.table = new Array(tableSize);
      this.tableSize = tableSize;
    }
  
    hash(key) {
      let hashValue = 0;
      for (let i = 0; i < key.length; i++) {
        hashValue = (hashValue + key.charCodeAt(i) * i) % this.tableSize;
      }
      console.log("inside " + hashValue);
      return hashValue;
    }
  
    set(key, value) {
      const index = this.hash(key);
      this.table[index] = value;
    }
  
    remove(key) {
      const index = this.hash(key);
      delete this.table[index];
    }
  
    get(key) {
      const index = this.hash(key);
      return this.table[index];
    }
/* 
    has(key) { 
        if (mylist.hasOwnProperty('key')){return true}; 
    }
 */
  }

  const mylist = new HashMap();
  mylist.set("eduar", 1985);
  mylist.set("Viky", 2018 );
  console.log(mylist.get("Viky"));
  console.log(mylist.hasOwnProperty('Viky'));
  //console.log(mylist.tableSize);
  //console.table(mylist);

  /* mylist.forEach((values, keys) => {
    console.log(values, keys);
    }); */


//----------------------------------------------------------------------------------------------------------example 1
//if (index < 0 || index >= buckets.length) {throw new Error("Trying to access index out of bound");}

/* function hash(key) {
let hashCode = 0;
    
const primeNumber = 31;
for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
}

return hashCode;
} 

console.log(hash("odin"));
console.log(hash[odin]);
 */

//----------------------------------------------------------------------------------------------------------example 2
/* hashCode = function(s) {
    return s.split("").reduce(function(a, b) {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
  }
   
   // testing
   console.log(hashCode("hello"));
   //console.log(hashCode("this is a text."));
   //console.log(hashCode("Despacito by Luis Fonsi"));
   console.log(typeof hashCode) */