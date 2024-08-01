// server.js
const express = require("express");
require("dotenv").config();
require("./src/db/connect");
const cors = require('cors');

const AdventureDetailRouter = require("./src/routes/AdventureDetails.router");

const logger = require("./src/middlewares/logger");

const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(express.json());
server.use(logger);

// Use the AdventureDetailRouter for /hos path
server.use('/hos', AdventureDetailRouter);

server.listen(PORT, () => {
    console.log("Express.js server is started on PORT: ", PORT);
});
