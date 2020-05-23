const express = require('express');
const Joi = require('joi');
const router = express.Router();

const genres = null;
//Import DB Libraries
const mongoose = require('mongoose');

//Connect to db
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect', err));

const genreSchema = new mongoose.Schema({
    name:{
        type:String,
        maxlength:15,
        required:true
    }
});

const Genre = mongoose.model('Genre',genreSchema);

async function getGenres(){
    return await Genre.find()
    .select('id name');
}
async function createGenre(genre){
    //return await Genre.find()
    //.select('id name');
    return('post');
}



//create GET service
//returns all Genres
router.get('/', (req, res) => {
    res.send(genres);
});
//returns Genres by id
router.get('/:id', (req, res) => {

    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('No such genre with given id');
    res.send(genre);
});

//create POST service
router.post('/', (req, res) => {
    /* const { error } = validateGenre(req.body);
    //bad request if invalid genre
    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }
    genres.push(genre);
    res.send(genre); */
    const test =createGenre(null);
    res.send({test});
});
//create PUT service
router.put('/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send(`The genre with the id ${req.params.id} was not found`);
    
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    genre.name = req.body.name;
    res.send(genre);
});
//create DELETE service
router.delete('/:id',(req,res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send(`The genre with the id ${req.params.id} was not found`);
    
    const index=genres.indexOf(genre);
    genres.splice(index,1);
    res.send(genre);
});



function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(genre, schema);
}

module.exports=router;