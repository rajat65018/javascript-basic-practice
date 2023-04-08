async function abc(){
    return 3;
}
console.log(abc())
async function def(){
    await new Promise((res,rej)=>{
        res('successful');
    }).then((val)=>{
        console.log(val);
    })
}
def();
