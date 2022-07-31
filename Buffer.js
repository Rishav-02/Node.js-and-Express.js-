//A buffer is an area of memory.It represents a fixed-size chunk of memory (can't be resized) allocated outside of the V8 JavaScript engine.You can think of a buffer like an array of integers, which each represent a byte of data.

/* Why do we need a buffer?

Buffers were introduced to help developers deal with binary data, in an ecosystem that traditionally only dealt with strings rather than binaries.

Buffers in Node.js are not related to the concept of buffering data. That is what happens when a stream processor receives data faster than it can digest. */


//Those numbers are the UTF-8 bytes that identify the characters in the buffer (H → 72, e → 101, l → 108, ! -> 33,etc).This happens because Buffer.from() uses UTF-8 by default. Keep in mind that some characters may occupy more than one byte in the buffer (é → 195 169).

const buf = Buffer.from('Hello!');
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf[5]);
console.log(buf.toString());
console.log(buf.length);


//While both alloc and allocUnsafe allocate a Buffer of the specified size in bytes, the Buffer created by alloc will be initialized with zeroes and the one created by allocUnsafe will be uninitialized. This means that while allocUnsafe would be quite fast in comparison to alloc, the allocated segment of memory may contain old data which could potentially be sensitive.
const buf1 = Buffer.alloc(1024);//create 1KB buffer
console.log(buf1);
const buf2 =Buffer.allocUnsafe(1024);
console.log(buf2);

//Chnnging the content of a buffer
//You can write to a buffer a whole string of data by using the write() method:
const buf3=Buffer.alloc(4);
buf3.write("Hey!");//length of "Hey!" is 4 thats why alloc(4) memory allocated if alloc(2) then "He" is printed.
console.log(buf3.toString());

// const buf4 = Buffer.from('Hey!');
// buf[1] = 111; // o in UTF-8
// console.log(buf4.toString()); //Hoy!


//Copy a buffer

// const buf4 = Buffer.from('Hello!');
// const bufcopy = Buffer.alloc(6); // allocate 6 bytes
// bufcopy.set(buf4);


//By default you copy the whole buffer. If you only want to copy a part of the buffer, you can use .subarray() and the 'offset' argument that specifies an offset to write to:
const buf5 = Buffer.from('Hey?');
const bufcopy = Buffer.from('Moo!');
bufcopy.set(buf5.subarray(1, 3), 1);
console.log(bufcopy.toString()); // 'Mey!'
