require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const routes = require('./routes/routes');

require('./config/db')(app);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})



app.listen(port, () => console.log(`Listening on port ${port}`));