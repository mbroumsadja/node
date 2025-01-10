import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import route from './route/routeAuthentification.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';


dotenv.config();
const port = process.env.PORT;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(route);

app.listen(port,(req,res)=>{console.log(`le serveur tourne sur le http://localhost:${port}`)})