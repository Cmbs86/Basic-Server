import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";

// Managing the .env file
dotenv.config();

// Import the connectDB function
import connectDB from "./config/connectDB.js";
// Connect to the MongoDB
await connectDB();

// Importing the Router
import Router from "./routes/Router.js";

// Importing the Error Handler Middleware
import { errorHandler } from "./middlewares/errorHandler.js";


const app = express();
const { PORT } = process.env;

// Middleware that allows browsers to accept data from this server
app.use(cors());
// Middlewares that accepts urlencoded from data request
app.use(express.urlencoded({ extended: true }));
// Middleware that accepts json format data request
app.use(express.json());
// Middleware that logs the request to the console
app.use(morgan("dev"));

// ROUTERS
app.use("/api/models", Router)


// Error Handler Middleware
app.use(errorHandler);

// Listen
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`.bgBlue.white);
});
