function abc(){
    console.log('abc called');
}
function def(abc){
    
    console.log('def called');
    abc()
    
}
def(abc);