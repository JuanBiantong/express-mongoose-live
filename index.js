const express = require('express');
const app = express();

const { PORT } = require('./config');
const localPort = PORT || 5000;
const { db } = require('./config');

app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome to mongoose demo');
});
app.use('/api/movies', require('./routes/movies'));

if (db) {
    console.log(`Connected to database`);
    app.listen(localPort, () => {
        console.log(`Server runs on port ${localPort}`);
    });
}
