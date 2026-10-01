#Express

## Steps
1. create project folder
2. create two folder (frontend , backend) in root (lab5)
3. open terminal and reach to backend by 

   ```
   cd lab5
   cd backend
   ```

4. type 'npm intit -y'
5. install nodemon 'npm i nodemon -d'
6. install express 'npm i express'
7. update backend/package.json
    - change tpe 'type:"module"'
    - change script

       ```
       script:{
        "start": "node app.js",
            "dev":"nodemon prg1.js"
          }
         ```
8. add `lab5/backend/node_modules` to .gitignore
9. create `prg1.js` in backend
10. write the script below to start express server
     
     ```
     import express from 'express';

      const app = express();

     app.get("/", (req, res) => {
        res.send("Hello Express");
       });

      app.listen(4444, ()=>console.log('prg1 is running at 4444'));

      ```