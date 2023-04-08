let a=require('fs');
// let b=a.createReadStream('writefile.txt');
// b.on('data',(chunk)=>{
//     console.log(chunk)
// })
let b=a.createReadStream('writefile.txt');
b.on('data',(chunk)=>{
    console.log(chunk.toString());
})
a.writeFile('writefile.txt','gaureav fupta',(err)=>{
    if(err){
        console.log('unable to open file successfully');
    }
    else{
        console.log('file opened successfully');
    }
})
a.readFile('writefile.txt',(err,data)=>{
    if(err){
        console.log('cannot read file successfully');
    }
    else{
        console.log('file opened successfully');
        console.log(data.toString());
    }
})
