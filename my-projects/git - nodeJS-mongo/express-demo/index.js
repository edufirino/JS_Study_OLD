const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const Joi = require('joi');
const app = express();
const logger = require('./middleware/logger.js')

const home = require('./routes/home');
const courses = require('./routes/courses');

app.set('view engine', 'pug');
app.set('views','./views');//default

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));
app.use(logger); 

app.use('/api/courses',courses);
app.use('/',home);
console.log(1);

console.log(`process.env.NODE_ENV -> ${process.env.NODE_ENV}`);
console.log(`app.get('env')-> ${app.get('env')}`);
//Configuration
console.log(`App name-> ${config.get('name')}`);
console.log(`Mail server-> ${config.get('mail.host')}`);
//on cmd type -> set app_password=1234
//console.log(`Mail password-> ${config.get('mail.password')}`);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    var time = new Date();
    console.log(`\n\nPort ${port}-${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
});