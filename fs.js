let a=require('fs');
// a.writeFile('write.txt',(err)=>{
//     if(err){
//         console.log('error while writing in a file')
//     }
//     else{
//         console.log('file opened successfully');
//     }
// })
a.writeFile('writefile.txt','hello how are you',(err)=>{
    if(err){
        console.log('error occured while opening the file');
    }
    else{
        console.log('file opened successfully');
    }
})
