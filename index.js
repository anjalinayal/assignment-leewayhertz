const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer')
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://anjali:anjali1234@cluster0.lj9m0.mongodb.net/anjali?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true});
require('./models/User');


const app = express();
app.use(bodyParser.json());
app.use(cors());

require('./routes/userRoutes')(app);




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});