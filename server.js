const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config();
require('./config/db.connection');

app.use(cors()); 
app.use(morgan("dev"));

const { PORT } = process.env;

app.get('/', (req, res) => {
    res.send('CheckUp API')
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));