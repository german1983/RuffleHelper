const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

const server = express();

// the __dirname is the current directory from where the script is running
server.use(express.static(__dirname + '/dist'));

server.use(
  bodyParser.urlencoded({
    extended: true
  })
)

server.use(bodyParser.json())

// send the user to index html page inspite of the url
server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

const https = require('https')
const url = require('url')

server.post('/send-alert', (req, res) => {
  const message = `New Alert on ${req.body.ticker}. ${req.body.operationType === "B" ? "Bought" : "Sold"} ${req.body.quantity} ${req.body.optionFamily === "C" ? "call" : "put"}${req.body.quantity > 1 ? "s" : "" } strike ${req.body.strike} @ ${req.body.price}. THIS IS NOT A RECOMMENDATION!`;

  const requestUrl = url.parse(url.format({
    protocol: 'https',
    hostname: 'api.telegram.org',
    pathname: '/bot1069133550:AAF0v_-GQRLnsIVeRfch75MlMOLkTMNRt5g/sendMessage',
    query: {
      chat_id: "-1001285613416",
      text: message,
    }
  }));

  const request = https.get(url.format(requestUrl), res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  request.on('error', error => {
    console.error(error)
  })
  
  request.end();
  res.json({
    received: "OK",
    reqBody: req.body,
  })
});

server.listen(PORT, () => console.log(`Listening on ${ PORT }`))