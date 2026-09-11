

import { readFile, writeFile, appendFile } from "fs/promises";

const readData = async (filename) => {
    try{
  const content =  await readFile(filename, 'utf-8');
  return content;
}  catch (e){
    console.log(e.message);
    console.log("File not found");

}
finally{
    console.log("Read data finished")
}
};
const writeData = async (filename, content) => {
   try {
    await writeFile(filename, content);
   } catch (error) {
    console.log(error.message);    
   }
};
const appendData = async (filename, content) => {
  await appendFile(filename, content);


};
const deleteFile=async(filename)=>{
    try{
        await unlink(filename);
    } catch (error){
        console.log("file not found");

    }
};

// note => if a fn uses await keyword then the fn must be async 

const data=await readData("fie1.js");

console.log(data);

// keyword
// 1. try
// 2. catch
// 3.finally
// 4.thron