const express = require("express");
const app = express();
const mongoose = require("mongoose");
const prizmRoute = require("./Routes/prizmRoute");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://uglymallu:123@cluster0.jonxpqi.mongodb.net/Prizm?retryWrites=true&w=majority"
);

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cors());

app.use(express.json());

app.use("/", prizmRoute);

app.listen(8080, (err) => {
  if (err) {
    console.log("There is an error!!");
  } else {
    console.log("You made it");
  }
});
