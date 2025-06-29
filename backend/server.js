const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });



const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users');
const searchRoutes = require('./routes/search');


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => console.log('MongoDB connecté'))
.catch(err => console.error('Erreur MongoDB:', err));

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
app.use('/', searchRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
