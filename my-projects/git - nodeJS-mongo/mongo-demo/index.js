const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    //.then(() => )
    //console.log('Connected to MongoDB')
    .catch(err => console.error('Could not connect', err));

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    category: {
        type: String,
        enum: ['web', 'mobile', 'network'],
        required: true,
        lowercase:true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    //Do some beautiful async work
                    const result = v && v.length > 0;
                    callback(result);
                }, 1000);
            },
            message: 'A course should have at least one tag!'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished; },
        min: 10,
        max: 200,
        get: v =>Math.round(v),
        set: v =>Math.round(v)

    }
});
const Course = mongoose.model('Course', courseSchema);
async function createCourse() {
    const course = new Course({
        name: 'Basic Programming Course',
        author: 'Ed3',
        category: 'Web',
        tags: ['FrontEnd'],
        isPublished: true,
        price: 10.9343
    });
    try {
        displayCourse(course);
        const result = await course.save();
        console.log(result);
        console.log("Success!");
    } catch (ex) {
        for(field in ex.errors)
            console.log(ex.errors[field].message)
        //console.log(error.message);
        
    }
}
function displayCourse(course) {
    console.log(`\nCourse Info:`);
    console.log(`Name: ${course.name}`);
    console.log(`Category: ${course.category}`);
    console.log(`Author: ${course.author}`);
    console.log(`Tags: ${course.tags}`);
    console.log(`Date: ${course.date}`);
    console.log(`IsPublished: ${course.isPublished}`);
    console.log(`Price: ${course.price}\n`);
}
async function getCourses() {
    return await Course
        // .find({author:'Mosh',isPublished:true})
        .find()
        .or([{ author: 'Mosh' }, { isPublished: false }])
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
}
/* 
update document by finding it, modifying and then saving it.
async function updateCourse(id){
    const course = await Course.findById(id);
    if(!course) return;
    course.isPublished=false;
    course.author="anooooooother";
    const result = await course.save();
    console.log(result);
} */
//update without returning anything
/* async function updateCourse(id){
    const result = await Course.update({_id:id},{
        $set:{
            author:"wowwwwwwwwwwwwwwwwwwwwwwwwwww",
            isPublished:true
        }
    });
    console.log(result);
} */
// to update and bring the old doc = const course = await Course.findByIdAndUpdate(id,{

//to update and bring the new doc 
async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            author: "OMG, I love u2",
            isPublished: true
        }
    }, { new: true });
    console.log(course);

}
async function removeCourse(id) {
    //const result = await Course.deleteOne({_id:id});

    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}


async function run() {

    /* const courses = await getCourses();
    console.log(courses); */
    //updateCourse('5ec6e036258a071638562038');
    createCourse();
    //removeCourse('5ec71962621dee2a7ce6c5c6');
}
run();




