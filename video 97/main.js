// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

// import express from 'express'
// import mongoose from 'mongoose'
// import { Employee } from './models/employee.js';
// import path from 'path';
// import { fileURLToPath } from 'url';

// let conn = await mongoose.connect("mongodb://localhost:27017/company");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app = express()
// const port = 3000

// app.use(express.static(path.join(__dirname, 'views')));

// const names = ["Garry", "Aally", "Jom", "Merry", "Lina"];
// const languages = ["JavaScript", "Python", "Java", "C++"];
// const cities = ["New York", "London", "Paris", "Berlin", "Tokyo"];

// app.get('/generate', async (req, res) => {
//   await Employee.deleteMany({});

//   const newEmployees = Array.from({ length: 10 }).map(() => ({
//     name: names[Math.floor(Math.random() * names.length)],
//     salary: Math.floor(Math.random() * 1000000) + 50000,
//     language: languages[Math.floor(Math.random() * languages.length)],
//     city: cities[Math.floor(Math.random() * cities.length)],
//     isManager: Math.random() > 0.5
//   }));

//   await Employee.insertMany(newEmployees);
//   res.send('10 Employees generated and inserted!');
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


import express from 'express';
import mongoose from 'mongoose';
import { Employee } from './models/employee.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;   

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

let conn = await mongoose.connect("mongodb://localhost:27017/company");

const names = ["Garry", "Aally", "Jom", "Merry", "Lina"];
const languages = ["JavaScript", "Python", "Java", "C++"];
const cities = ["New York", "London", "Paris", "Berlin", "Tokyo"];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/generate', async (req, res) => {
  await Employee.deleteMany({});

  const newEmployees = Array.from({ length: 10 }).map(() => ({
    name: getRandom(names),
    salary: Math.floor(Math.random() * 1000000) + 50000,
    language: getRandom(languages),
    city: getRandom(cities),
    isManager: Math.random() > 0.5
  }));

  await Employee.insertMany(newEmployees);
  res.render('index', { message: '10 Employees generated and inserted!' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
