require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const recordRouter = require('./routes/record_router')();

const db = require('./db_connection');
const { PORT } = require('./config')


db.connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log('Running on port', { PORT });
        });
    }).catch(err => {
        console.log(err.errors.name)
    });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', recordRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome Getir Api",
    })
});

