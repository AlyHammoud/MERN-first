BackEnd:

1. npm install express
2.npm install nodemon
    package.json
        in scripts:{
            "dev": "nodemon server.js"
        } // so now we can write npm run dev, to run the server with nodemon

3. install dotenv:
    require("dotenv").config();

    then we have access to .env file:
        proccess.env.PORT

4. add middleware in server.js :
    app.use((req, res, next) => {
        log(req.path, req.method)
        next(); access the page
    })

5. create folder for routes: fileRoutes.js  
    first make instance for express: const express = require('express');

    second: add express router: const router = express.Router();

    third: make the routes:
        router.get('/', () => {});

        router.get('/:id', (req,res)=>{return res.json(msg)})

        router.post('/', ..)

        router.delete('/:id', ...)

        router.patch('/:id', ...) //update
        
    fourth: export the module of the router:
        module.exports = router;

    
    then in server.js:
        1. require the router file
        2. add it as use: app.use(routerfile);
        3. can give it prefix: app.use('/api/workout/', routerFile);


6. in server.js : add a middleware: app.use(express.json())
    to get access to req.body when using post request

    