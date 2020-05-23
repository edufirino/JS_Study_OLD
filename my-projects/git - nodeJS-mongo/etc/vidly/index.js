const express = require('express');
const Joi = require('joi');
const app = express();

const genres = require('./routes/genres');

app.use(express.json());
app.use('/api/genres',genres);

const port = process.env.PORT || 3000; app.listen(port, () => {
    var time = new Date(); console.log(`Port ${port}-${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}); 