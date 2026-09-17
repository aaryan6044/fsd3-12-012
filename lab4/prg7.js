import http from "http";
import {addUser,getUsers} from "./users.js";

const server = http.createServer((req, res) => {
  if ((req.url === "/api/users", req.method === "GET")) {
    res.end(JSON.stringify({ msg: "all users" }));
  } 
  else if ((req.url === "/api/users", req.method === "POST")) {
    let body = '';
    req.on('data',(chunk)=>{
      body += chunk;
    });
    req.on('end',()=>{
      const user = JSON.parse(body);
      const userCreated = addUser(user);
      res.end(JSON.stringify({ msg: "add user" , userCreated }));
    });
  } 
  else if ((req.url === "/api/users/1", req.method === "GET")) {

    const userId = Number(req.url.split('/'),pop())
  
    res.end(JSON.stringify({ msg: `single user with id 1 $(userId)`}));
  } 
  else if ((req.url === "/api/users/1", req.method === "PUT")) {
    res.end(JSON.stringify({ msg: "update user 1" }));
  } 
  else if ((req.url === "/api/users/1", req.method === "DELETE")) {
    res.end(JSON.stringify({ msg: "remove 1" }));
  } 
  else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3033, () => console.log("prg7 is running"));