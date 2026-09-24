import http from "http";
import { addUser, getUsers } from "./users.js";

const server = http.createServer((req, res) => {

  // Home page
  if (req.url === "/" && req.method === "GET") {

    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
      <html>
        <head>
          <title>My Node Server</title>
        </head>

        <body>
          <h1>Hello from Node.js!</h1>
          <p>My server is working successfully.</p>
          <p>This page is being served from port 2000.</p>
        </body>
      </html>
    `);

  }

  // Get all users
  else if (req.url === "/api/users" && req.method === "GET") {

    const users = getUsers();

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify(users));

  }

  // Add a new user
  else if (req.url === "/api/users" && req.method === "POST") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      const user = JSON.parse(body);

      const userCreated = addUser(user);

      res.writeHead(201, { "Content-Type": "application/json" });

      res.end(
        JSON.stringify({
          msg: "user added",
          userCreated
        })
      );

    });

  }

  // Get user with ID 2
  else if (req.url === "/api/users/2" && req.method === "GET") {

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        msg: "single user with id 2"
      })
    );

  }

  // Update user with ID 1
  else if (req.url === "/api/users/1" && req.method === "PUT") {

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        msg: "update user 1"
      })
    );

  }

  // Delete user with ID 1
  else if (req.url === "/api/users/1" && req.method === "DELETE") {

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        msg: "remove 1"
      })
    );

  }

  // Invalid route
  else {

    res.writeHead(404, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        msg: "Route not found"
      })
    );

  }

});

server.listen(2000, () => {
  console.log("Server is running on port 2000");
});