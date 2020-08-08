// project endpoint 
let projectData = {};
const dataBase = {completeDataHistory:[]};


var path = require('path')
const express = require('express')


const app = express()

// dependencies
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());


// setup server
app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
const server = app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
})


app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})

// a POST route to store app data
app.post('/post-data', updateDatabase)

function updateDatabase(req,res) {

  const dataFromApp = req.body;
  // data this time
  Object.assign(projectData,dataFromApp);
  
  // the whole submit history
  dataBase.completeDataHistory.push(dataFromApp);
  console.log(dataBase);
  // you have to send something back, otherwise the promise will keep pending
  res.send(dataBase);

}


// a GET route to get key
app.get('/get-key', sendApiKeyToClient)


function sendApiKeyToClient(req,res){

  const apiKeys = {
      geo:"hannahwu_udacity",
      weatherbit:"02c8bac25839400b9bf8d4123ed95e4a",
      pixabay:"17787821-4d3744040f2fa6d250f43b57d"

  }
  console.log(apiKeys);
  res.send(apiKeys);

}

module.exports = server