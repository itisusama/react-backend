require("dotenv").config();
const express = require('express');
const connectDB = require("./db/db");
const app = express();
const port = process.env.PORT || 8000;

connectDB();
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});