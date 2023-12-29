require("dotenv").config();
const express = require('express');
const connectDB = require("./db/db");
const app = express();
const port = process.env.PORT || 8000;

connectDB();
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

/*
dotenv Configuration:

require("dotenv").config();: This line loads and configures the 'dotenv' package. It allows you to store configuration settings in a file called .env.
Importing Modules:

const express = require('express');: Imports the 'express' module, which helps in creating a web server and handling HTTP requests.
Database Connection:

const connectDB = require("./db/db");: Imports a function (connectDB) from a file located in the 'db' folder. This function is likely responsible for connecting to a database.
Express App Initialization:

const app = express();: Initializes an instance of the Express web application. This 'app' variable is used to configure and run the web server.
Port Configuration:

const port = process.env.PORT || 8000;: Configures the port number for the server. It uses the value stored in the environment variable 'PORT', and if it's not defined, it defaults to port 8000.
Database Connection Execution:

connectDB();: Calls the function to connect to the database. This is important before starting the server to ensure a connection is established.
Server Start:

app.listen(port, () => {...});: Initiates the server to listen for incoming requests on the specified port. When the server starts, it prints a message to the console, indicating the port number it's listening on.
Console Log:

console.log(Server is listening on port ${port});: Outputs a message to the console, letting you know that the server has successfully started and is listening on a specific port.
*/