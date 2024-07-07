const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.listen(5000, () => console.log("server running on port 5000"));

const users = [{
    username:"aa",
    password:"aa",
    contacts:[{name:"aa",number:"aa"}]
}];

app.get("/getContacts/", (req, res) => {
    const { requestedUser } = req.query;
    console.log(requestedUser)
    if (requestedUser) {
      const user = users.find((user) => user.username === requestedUser);
      if (user) {
        console.log("o"+user.contacts)
        res.json(user.contacts);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } else {
      res.status(400).json({ error: "No user specified" });
    }
  });

  app.post("/addContact", (req, res) => {
    const {username, contactInfo} = req.body
    console.log(`Received request to add contact: ${JSON.stringify(contactInfo)} for user: ${username}`); // Log the request
    const user = users.find((user)=> username === user.username)
    if (user) {
        user.contacts.push(contactInfo)
        res.json(user.contacts);
    } else {
        res.status(404).send({ error: "User not found" });
    }
  })

app.post("/register", (req, res) => {
  const newUser = req.body;
  newUser.contacts = [];
  const message = {
    message: "item added",
    user: newUser,
    valid: true,
  };
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == newUser.username) {
      message.valid = false;
    }
  }
  if (message.valid == true) {
    users.push(newUser);
  }
  console.log(users);
  res.send(JSON.stringify(message));
});

app.post("/login", (req, res) => {
  const loggedUser = req.body;
  const message = {
    message: "logged in",
    username: "",
    valid: false,
  };
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username == loggedUser.username &&
      users[i].password == loggedUser.password
    ) {
      message.valid = true;
      message.username = users[i].username;
    }
  }
  res.send(JSON.stringify(message));
});
