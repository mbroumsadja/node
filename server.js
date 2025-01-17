import express from 'express';
import dotenv from 'dotenv';
import principale from './routes/pricipale.js';
import auth from './routes/authRoute.js';
import admin from './routes/admin.js';

dotenv.config();

const port = process.env.PORT || 5000
const app = express();

app.set('view engine','ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(principale);
app.use(auth);
app.use(admin);
app.listen(port,(req, res)=>{console.log(`le serveur tourne sur  le port ${port}`)});
