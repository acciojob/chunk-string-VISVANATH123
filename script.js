function stringChop(str, size) {
    let chunk = [];
    for (let i = 0; i < str.length-1; i += size) {
        let s = str.slice(i, i + size);
        chunk.push(s);
    }
    return chunk;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
