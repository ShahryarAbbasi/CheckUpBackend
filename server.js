const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config();
require('./config/db.connection');

app.use(cors()); 
app.use(morgan("dev"));

const { PORT , MONGODB_URI } = process.env;
const gamesController = require('./controllers/games-controller')
const playersController = require('./controllers/players-controller')
const userController = require('./controllers/auth-controllers')
app.use(express.json())

app.use('/games', gamesController)
app.use('/players', playersController)
app.use('/auth', userController)
            
app.get('/', (req, res) => {
    res.send('CheckUp API')
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));