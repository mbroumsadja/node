import express from 'express';
// import './models/synchronisation.js'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/date', (req, res) => {

    res.send(`Current date: ${format(now, 'yyyy-MM-dd HH:mm:ss')}, Future date: ${format(futureDate, 'yyyy-MM-dd')}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});