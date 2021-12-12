// Just call log() wherever and it will print current fn name and line number
function log(){
    try{
        let err = new Error();
        let caller_line = err.stack.split("\n")[2];
        let index = caller_line.indexOf("at ");
        let clean = caller_line.slice(index+2, caller_line.length)
        let fileNameLong = clean.split('/')
        let fileName = fileNameLong[fileNameLong.length -1].split(':',1)
        let fnName = clean.split('(')[0].trim()
        if(fnName.length > 20) { fnName = 'IFFE fn'}
        if(fileNameLong.length === ' ') { fnName = 'IFFE fn'}
        let lineNr =  + clean.split(':')[1].trim()
        console.log('[logPoint] ' + fnName + ' in '+ fileName + ' @ line: '  +  lineNr)
    } catch(e){ 
        console.log(e )
         }
}

function foo(){ log() }
let bar = () =>{ 
    log() }

foo()
bar()

let IFFE = ( () =>{
    // let err = new Error()
    // console.log(err.stack)
    log()
})();

(() =>{
    log()
})();

     
function log2(){
    return console.log(arguments.callee.name)
}

function log3(){
    let err = new Error()
    let caller_line = err.stack.split("\n")[2]
    let index = caller_line.indexOf("at ")
    let clean = caller_line.slice(index+2, caller_line.length)
    console.log(clean)
}

log2()
log3()