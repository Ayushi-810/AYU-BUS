const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");

const app = express();
const dbConfig = require("./config/DBconfig");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());

const usersRoute = require("./routes/usersRoute");
const busesRoute = require("./routes/busesRoute");

app.use("/api/users", usersRoute);
app.use("/api/buses", busesRoute);
app.listen(port, () => console.log(`Node server Listening on port ${port}`));
