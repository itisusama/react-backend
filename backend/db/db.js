const mongoose = require('mongoose');
const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URL).then((server)=>{
        console.log(`DB Connected with the server ${server.connection.host}`);
    }).catch((err)=>{
        console.log(`error occured ${err}`)
    })
};
module.exports = connectDB;