const express = require('express');

const app = express();

const fetch = (...args) => import('node-fetch').then(({
    default: fetch
  }) => fetch(...args));

  const URL = 'https://jeugdzorg.api.fdnd.nl/';
  console.log(URL);

//parses user data
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({
  extended: false
})
// app.use(bodyParser.urlencoded({extended: true}))

// Serve public files
app.use(express.static('public'))

// Hook up a template engine
app.set('view engine', 'ejs')
app.set('views', './views')







app.get('/', async (req, res) => {
    competentie = await fetchJson(`${URL}v1/competentie`).then(json => json.data)
     console.log(competentie)
     res.render('index'), {
   
       competentie
   
     }
   })







   app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => {
  console.log(`Application started on port: ${app.get('port')}`)
  console.log('http://localhost:3000');
})










async function fetchJson(url, data = {}) {
    return await fetch(url, data)
      .then((response) => response.json())
      .catch((error) => error)
  }