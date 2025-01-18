import express from 'express';
import dotenv from 'dotenv';
import principale from './routes/pricipale.js';
import auth from './routes/authRoute.js';
import admin from './routes/admin.js';
import cookieparser  from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';

dotenv.config();

const port = process.env.PORT || 5000
const app = express();

app.set('view engine','ejs');
app.set('views', 'views');

app.use(cookieparser(process.env.ACCESS_TOKEN_SECRET));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(morgan('dev'));

app.use(principale);
app.use(auth);
app.use(admin);

app.use((req, res, next) => {
    console.log('Route appelée:', req.path);
    console.log('Cookies présents:', req.cookies);
    next();
  });

app.listen(port,(req, res)=>{console.log(`le serveur tourne sur  le port ${port}`)});
