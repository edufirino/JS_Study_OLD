/*
console.log();
console.table();
*/

try {
    const numbers = [1, 2, 3, 1, 1, 2];

    const count = countOccurences(true, 1);

    console.log(count);
    
} catch (error) {
    console.error(error);

}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array)) throw new Error('not an array!');

    /* if (!array.includes(searchElement)) return 0;
    array.forEach(item => item === searchElement ? counter++ : null);
 */
    return array.reduce((accumulator, current) => {
        current === searchElement ? accumulator++ : accumulator;
        return accumulator;
    }, 0);
}






//Notes
/*
-----------Functions-----------

//7.exec 2
const circle = {
    radius: 2,
    get area() {
        return (Math.PI * (this.radius * this.radius));
    }
};
console.table(circle);

//7. exec 1
function sum(...args){
    args=Array.isArray(args[0])?args[0]:args;
    return args.reduce((a,c)=>a+c);
}
console.log(sum(1,2,3,7));

-----------ARRAYS-----------
//6.23 exec
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

const newMovies = movies
    .filter(v => v.year === 2018 && v.rating > 4)
    .sort((a, b) => a.rating - b.rating )
    .reverse()
    .map(movie => movie.title);

console.table(newMovies);


//6.22 exec 6
const numbers = [0,1000,-1,1, 2, 3, 1, 1, 2,50];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
     let max = array[0];
    for (const number of array)
        max = number >= max ? number : max;
    return max;

return array.reduce((a,c)=>a >= c ? a : c);



if (!array.includes(searchElement)) return 0;
array.forEach(item => item === searchElement ? counter++ : null);

 return array.reduce((accumulator, current) => {
    current === searchElement ? accumulator++ : accumulator;
    return accumulator;
}, 0);
}




//6.21 exec 5
const numbers = [1, 2, 3, 1, 1, 2];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement) {

    if (!array.includes(searchElement)) return 0;
    array.forEach(item => item === searchElement ? counter++ : null);

    return array.reduce((accumulator, current) => {
        current === searchElement ? accumulator++ : accumulator;
        return accumulator;
    }, 0);
}

//6.20 exec 4

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const output = move(numbers, 8, -8);

console.table(output);

function move(array, index, offset) {
    if (index + offset < 0 || index + offset >= numbers.length) return console.error('error!');

    const item = array.splice(index, 1);
    array.splice((index + offset), 0, ...item);

    return array;
}

//6.19 exec 3
const numbers = [1, 2, 3,4,5,6];
numbers.includes
const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
    return array.filter(n => !excluded.includes(n));
}

//6.18 exec 2
const numbers = [1,2,3,4];
console.log(includes(numbers,1));


function includes(array,searchElement){
    return array.filter(n=>n===searchElement).length !==0;
}

//6.17 exec 1
const numbers = arrayFromRange(-10,9);

console.log(numbers);

function arrayFromRange(min,max){
    let array =[];
    for (min; min < max; min++)
        array.push(min);
    return array;
}
//6.16 reduce
const numbers = [1, -1, 2, 3];
const sum = (numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue)
    );
    console.log(sum);

//6.15 mapping
const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);


console.log(items);
//6.14 filtering
const numbers = [-1,2,3];

const filtered = numbers.filter(n=>n>=0);
console.log(filtered);
//6.13 testing elements
const allPositive = numbers.every(value=>value>=0);
console.log(allPositive);

const atLeastOnePositive = numbers.some(value=>value>=0);
console.log(atLeastOnePositive);
//6.12 sorting
const numbers = [2,1,3];
numbers.sort();
console.log(numbers);

 numbers.reverse();
 console.log(numbers);


 const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'Node.js' }
];

courses.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.table(courses);
//6.11 joining

const numbers = [1,2,3];
const joined = numbers.join('');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);
//6.10 iterating
const numbers = [1,2,3];

for(let number of numbers)
    console.log(number);

numbers.forEach((number,index)=>console.log(index,number));

//6.9 Spread Operator

const first = [1,2,3];
const second = [4,5,6];

const combined =[...first,'a',...second,'b'];

const copy = [...combined];


//6.8 combining and slicing
const first = [1,2,3];
const second = [4,5,6];

const combined =first.concat(second);

//includes index 2 but not 4
const slice = combined.slice(2,4);
console.log(combined);
console.log(slice);

//6.7 emptying an array

let numbers = [1,2,3,4];
let another = numbers;
//solution 1
//numbers=[];
//solution 2
//numbers.length = 0;
//solution 3
//const a = numbers.splice(0,numbers.length);
//solution 4
while(numbers.length > 0 ) numbers.pop();

console.log(numbers);
console.log(another);
console.log(a);



//6.6 removing elements
const numbers = [1,2,3,4];
const last = numbers.pop();
const first = numbers.shift();
numbers.splice(2,2);
console.log(numbers);

//6.4-5 - find item and index in array
const courses = [
    {id:1,name:'b'},
    {id:2,name:'a'}
];
const course = courses.find(course =>course.name ==='a');
const courseIndex = courses.findIndex(course =>course.name ==='a');

console.log(course);
console.log(courseIndex);

//6.3 finding elements - primitives
const numbers= [1,2,3,1,4];
console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));

//old way of checking if exists
console.log(numbers.indexOf(5)!==-1);
console.log(numbers.includes(5));

//6.2 push unshift splice

const numbers= [3,4];
console.log(numbers);
numbers.push(5,6);
console.log(numbers);
numbers.unshift(1,2);
console.log(numbers);
//add items to an array at a given position
numbers.splice(2,0,'aaa','bbb');
console.log(numbers);

---------OBJECTS-------

exec 5.20

function createPriceRange(cheap,moderate,expensive){
    return {
        cheap,
        moderate,
        expensive
    };
}

let a = createPriceRange(20,40,80);

console.table(Object.entries(a));


exec 5.19

function Post(title,body,author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments=[];
    this.isLive=false;

}

const post = new Post('a','b','c');
console.table(post);


exec 5.18

const post = {
    title:'a',
    body:'b',
    author:'c',
    views:1000000000000000,
    comments:[{
        author:'wow such an author',
        body:'wow mas que body'
    },{
        author:'wow such an author2',
        body:'wow mas que body2'
    }],
    isLive:true
}

console.table(post);


exec 5.17

function Address(street,city,zipCode){
    this.street=street,
    this.city=city,
    this.zipCode=zipCode
}

const address1 = new Address('z','a','q');
const address2 = new Address('z','a','q');

function areEqual(address1,address2){
    return Object.entries(address1).join('') === Object.entries(address2).join('');
}
console.log(areEqual(address1,address2));

exec 5.16

const address = {
    street:'a',
    city:'b',
    zipCode:'c'
}

function createAddress(street,city,zipCode){
    return {
        street,
        city,
        zipCode
    };
}

function Address(street,city,zipCode){
    this.street=street,
    this.city=city,
    this.zipCode=zipCode
}

const address2 = createAddress('q','w','e');
const address3 = new Address('z','a','q');
console.log(address);
console.log(address2);
console.log(address3);





exec 5.15

const address = {
    street:'a',
    city:'b',
    zipCode:'c'
}
function showAddress(address){
    for (const key in address) {
        console.log(key,address[key]);
    }
    console.log();
    for (const key of Object.keys(address)) {
        console.log(key,address[key]);
    }
    console.log();
    for (const key of Object.entries(address)) {
        console.log(key);
    }
}
showAddress(address);


5.9 - cloning objs

const circle = {
    radius: 2,
    draw() { console.log('draw'); }
}


console.log(another);
const another = {};
for (let key in circle) {
    another[key] = circle[key];
}

const another = Object.assign({},circle);

const another = {...circle};


5.8 - iterating through keys in an object

const circle = {
    radius: 2,
    draw() { console.log('draw'); }
}

for (let key in circle)
    console.log('for in ',key, circle[key]);

for (let key of Object.keys(circle))
    console.log('for of Object.keys ',key);

for (let entry of Object.entries(circle))
    console.log('for of Object.entries ',entry);


    if('color' in circle) console.log('yes!!');




*/