// import { writeFile,appendFile } from "fs/promises" ;
// fs is file system

// await writeFile("hello.txt","Js is very easy");
// hr bar file banata hai  


// await appendFile("hello.txt","\nFS is much easior then others")
// await appendFile("hello.txt","\nMY name is Aakash ")
import { writeFile,appendFile,readFile} from "fs/promises" ;

await appendFile("hello.txt","\nFS is much easior then others 👌")
const content = await readFile("hello.txt","utf-8");

console.log(content);