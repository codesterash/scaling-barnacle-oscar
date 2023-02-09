// app will initialize express and use express to communicate via port number to local server
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
// app is used as a a way to send a message to the localhost server on the same port
// sending Hello World in this case
app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log('in the node console')
// app is listening for the server response using node
app.listen(PORT, () => {
  console.log('Example node listening at 3000')
})