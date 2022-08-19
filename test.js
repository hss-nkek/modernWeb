/*
var a = 1;
var b = 2;

function add(x, y)  {
    let result = x + y;
    return result;
}

let result = add(a, b);
// var result = a + b;

console.log(result);
*/

// <파일 읽기를 동기 방식으로 호출>
/*
const fs = require('fs');
var data = fs.readFileSync('read.txt','utf-8');

console.log(data);
console.log('Done');
*/

// <파일 읽기를 비동기 방식으로 호출>

const fs = require('fs');
 
fs.readFile('read.txt','utf-8',(err,data)=>{
    if (err) return console.log(err);
 
    console.log(data);
})
console.log('Done');
