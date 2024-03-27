

1. ## Setup Node.js and npm

- Install ***Node*** and ***npm***
- https://nodejs.org/en (LTS Recommended)

2. ## Initialize the Project

- Open your terminal and run `npm init -y` to create a `package.json` file. 

3. ## Install Dependecies

- Install necessary dependencies using the following commands
  
 ```javascript
npm i express mongoose cors dotenv
```

 ```javascript
 npm i <dependencies> -D 
 ``` 

4. ## Add ES Modules

- In your `package.json` add `"type": "module"` to ensures that you have access to the functionality provided by these modules throughout your application.
- ES Modules (ECMAScript Modules) are a way to organize code into separate files or modules. This method allows you to import/export functionality between these modules.

5. ## Set up Server (Node.js & Express)

- Create a file `server.js` and set up a basic Express server

```javascript
import express from "express";
import cors from "cors";
import dotenv from "dotenv"

// Managing the .env file
dotenv.config()

const app = express();
const {PORT} = process.env;

// Listen
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
```


7. ## Add your basic Middlewares

```javascript
// Middleware that allows browsers to accept data from this server
app.use(cors())
// Middlewares that accepts urlencoded from data request
app.use(express.urlencoded({ extended: true }));
// Middleware that accepts json format data request
app.use(express.json());
```

8. ## Connect to MongoDB

- Use `mongoose` to connect your Express server to MongoDB
- Save your `URI`in the `.env` file
- Create a connection
- Call this connection in your `server.js`

```javascript
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Get the MONGODB_URI from the .env file
const {MONGODB_URI} = process.env;

// Connect to the MongoDB
const connectDB = async () => {
    try {
        // Connect to the MongoDB
        const conn = await mongoose.connect(MONGODB_URI);
        // Log the connection host if the connection is successful
        console.log(`<<MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // Log the error message if the connection is failed
        console.error(":: Database Not Connection");
    }
};

export default connectDB;
```
