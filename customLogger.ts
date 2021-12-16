// Just call log() wherever and it will print current fn name and line number
function log( msg?: string, variable?: string | number, obj?: object | string): void{
    msg = (!msg) ? '' : `[msg] ${msg}` 
    variable = (!variable) ? '' : `[var] ${variable}` 
    obj = (!obj) ? '' : `[obj] ${JSON.stringify(obj)}` 
try{
    let err: any = new Error()
    let cl = err.stack.split("\n")[2]
    let fnName = cl.slice(cl.indexOf("at ")+2, cl.length).split('(')[0].trim()
    let fileName = cl.slice(cl.lastIndexOf('/')+1, cl.indexOf(':')).trim()
    let lineNr = cl.slice(cl.indexOf(':')+1, cl.lastIndexOf(':')).trim()
    if(fnName.substring(0,1) == '/') { fnName = 'IFFE'}
    console.log(`[log] ${fnName} in ${fileName} @ line: ${lineNr} ${msg} ${variable} ${obj}`)
    } catch(e){ console.log(e) }
}
// regular and arrow function examples
function foo(): void{ 
    let o = new Object({name: "Baz"})
    log("test message w variable", 3, o) }
const bar = () =>{ log() }

foo()
bar()

// IFFE functions examples
let IFFE = ( () =>{ log() })();

(() =>{ log() })();




