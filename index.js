const { insurancePolicyRoutes } = require('./routes/insurancePolicyRoutes');

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

//  mongo connection
mongoose.Promise = global.Promise;
const MONGODB_URI = "mongodb+srv://userAdmin:ABCdef!!!@cluster0.mjmzi.mongodb.net/insurancePolicyDB?retryWrites=true&w=majority"
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/userDB';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//  body-parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//  CORS setup
app.use(cors());

insurancePolicyRoutes(app);

app.get('*', (req,res) =>{
  res.send('Insurance policy')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Our application is running on ${PORT}`)
});

