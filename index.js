const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const server = express();

// the __dirname is the current directory from where the script is running
server.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

server.listen(PORT, () => console.log(`Listening on ${ PORT }`))