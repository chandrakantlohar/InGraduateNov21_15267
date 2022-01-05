const express = require("express");
const server = express();
const port = 5000;
const cors = require("cors");

const CORS_OPTIONS = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};
const USERS =[
  {
    id:1,
    user_name:"Chandrakant",
  },
  {
    id:2,
    user_name:"Arun",
  },
  {
    id:3,
    user_name:"Vaishnavi",
  },
]
server.use(cors(CORS_OPTIONS));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("", (req, resp) => {
  resp.send("Express is working");
});

server.get("/users/", (req, resp) => {
  resp.setHeader("Content-Type", "application/json");
  resp.send(USERS);
});

server.listen(port, () => {
  console.log("http://localhost:5000 started ");
});
