function stringChop(str, size) {
 const chunk=[];
  for(let i=0;i<str.length;i+=size){
         let s=str.slice(i,i+size);
        chunk.push(s);
    }
    return chunk;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
