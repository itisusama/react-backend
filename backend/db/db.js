const mongoose = require('mongoose');
const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URL).then((server)=>{
        console.log(`DB Connected with the server ${server.connection.host}`);
    }).catch((err)=>{
        console.log(`error occured ${err}`)
    })
};
module.exports = connectDB;

/*
Importing Mongoose:

const mongoose = require('mongoose');: This line imports the Mongoose library, which helps in interacting with MongoDB (a type of database).
Defining a Function:

const connectDB = () => {: This declares a function named connectDB.
Connecting to MongoDB:

mongoose.connect(process.env.MONGO_URL): It attempts to connect to a MongoDB database using the connection URL provided in the environment variable MONGO_URL. This URL typically contains information like the database server location and authentication details.
Handling Connection Success:

.then((server) => { console.log(DB Connected with the server ${server.connection.host}); }): If the connection is successful, this part is executed. It logs a message indicating that the database is connected and mentions the host of the database server.
Handling Connection Failure:

.catch((err) => { console.log(error occurred ${err}); }): If there is an error during the connection attempt, this part is executed. It logs an error message, indicating what went wrong.
Exporting the Function:

module.exports = connectDB;: This makes the connectDB function available for use in other parts of the code. Other files or modules can import and use this function to establish a connection to the MongoDB database.
*/ 
