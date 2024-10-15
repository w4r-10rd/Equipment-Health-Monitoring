require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const DbConnection = require("./config/db").DbConnection;

//import controllers
const mqttControllers = require("./controllers/mqttController");
const userControllers = require("./controllers/userControllers");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("IEMA machinery health monitoring system");
});
app.get("/sensor-data", mqttControllers.sendReadings);
app.get("/users-db", userControllers.getUsersData);
app.post("/sign-up", userControllers.signUp);
app.post("/sign-in", userControllers.signIn);

//error handeling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Something went wrong";
  res.status(statusCode).json({ message: errorMessage });
});

//launcing server
const Port = 3001;
const startServer = async () => {
  const DbConnectionStatus = await DbConnection();
  if (DbConnectionStatus) {
    app.listen(Port, () => {
      console.log(`Server is up at ${Port}`);
    });
  } else {
    setTimeout(startServer, 5000);
  }
};
startServer();
