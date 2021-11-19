const express = require('express')
const mongoose = require('mongoose')
const { createServer } = require('http')
const app = express()
const port = 3000

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

const Users = mongoose.model('Users', UsersSchema)

app.get('/', (req, res) => {
  // console.log("req", req);
  // res.send("asd");
  res.download(__dirname, './dist/sdf.png')
  // Users.find()
  //   .then((users) => res.send(users))
  //   .catch((err) => res.send(err));
})

const server = createServer(app)

server.listen(port, () => console.log('server in up'))

app.use(express.static('./'))

app.use((req, res, next) => {
  res.sendFile(__dirname, './dist/sdf.png')
})
