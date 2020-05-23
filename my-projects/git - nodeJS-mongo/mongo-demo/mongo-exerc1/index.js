const mongoose = require('mongoose');
const dbString = "mongodb://localhost/mongo-exercises";
mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to db'))
    .catch(err => console.error('wow! an error!', err));
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});
const Course = mongoose.model('Course', courseSchema);
async function getCourses() {
    return await Course
        //exec 1 .find({tags:"backend",isPublished:true})
        //exec 2 .find({tags: {$in:['backend','frontend']} ,isPublished:true})
        .find({ isPublished: true })
        .or([{ price: { $gte: 15 } }, { name: /.*by.*/ }])
        //.sort({ price: -1 })
        .select('name author price');
}
async function run() {
    const courses = await getCourses();
    console.log(courses);
}
run();