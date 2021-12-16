// Just call log() wherever and it will print current fn name and line number
function log( msg?: string, variable?: string | number): void{
    msg = (!msg) ? '' : `[msg] ${msg}` 
    variable = (!variable) ? '' : `[var] ${variable}` 
try{
    let err: any = new Error()
    let caller_line = err.stack.split("\n")[2]
    let fnName = caller_line.slice(caller_line.indexOf("at ")+2, caller_line.length).split('(')[0].trim()
    let fileName = caller_line.slice(caller_line.lastIndexOf('/')+1, caller_line.indexOf(':')).trim()
    let lineNr = caller_line.slice(caller_line.indexOf(':')+1, caller_line.lastIndexOf(':')).trim()
    if(fnName.substring(0,1) == '/') { fnName = 'IFFE'}
    console.log(`[log] ${fnName} in ${fileName} @ line: ${lineNr} ${msg} ${variable}`)
} catch(e){ console.log(e ) }
}

// regular and arrow function examples
function foo(): void{ log("test of message parameter with variable as a number", 3) }
const  bar = () =>{ log() }

foo()
bar()

// IFFE functions examples
let IFFE = ( () =>{ log() })();
(() =>{ log() })();


// Other method of logging function name
function log2(): void{ console.log(arguments.callee.name) }

//log2()


