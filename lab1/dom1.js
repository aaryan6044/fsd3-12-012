
import { EventEmitter } from "events";
// emiitter kaa kaam event generatte krna 
const button = new EventEmitter();
button.on("click",()=>{
    console.log("Button clicked");

})

button.emit("click");