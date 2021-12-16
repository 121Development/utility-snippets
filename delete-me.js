// Just call log() wherever and it will print current fn name, filename,  line number and any arguments with type
function log( ...args: any[]): void{
    function printArgs(args: any[]){
        args.forEach((arg: any, i: number) => {
            try{ console.log(`[arg${i+1}] ${typeof arg}: ${JSON.stringify(arg)}`) }catch(e){ console.log(e)}
            })
            console.log('\n')
            return
        }       
try{
    let err: any = new Error()
    let cl = err.stack.split("\n")[2]
    let fnName = cl.slice(cl.indexOf("at ")+2, cl.length).split('(')[0].trim()
    let fileName = cl.slice(cl.lastIndexOf('/')+1, cl.indexOf(':')).trim()
    let lineNr = cl.slice(cl.indexOf(':')+1, cl.lastIndexOf(':')).trim()
    if(fnName.substring(0,1) == '/') { fnName = 'IFFE'}
    console.log(`[logPoint] ${fnName} in ${fileName} @ line: ${lineNr}`)
    if(args.length > 0) {printArgs(args)}
    } catch(e){ console.log(e) }
}
// regular and arrow function examples with args
function foo(): void{ 
    let o = new Object({name: 'Baz'})
    log(o, "Buzz", 2, true, ["foo", "bar"]) }

const bar = () =>{ log() }

foo()
bar()

// IFFE functions examples
let IFFE = ( () =>{ log() })();

(() =>{ log() })();




