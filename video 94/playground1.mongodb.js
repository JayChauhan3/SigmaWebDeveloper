
use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "Name": "Java",
    "Price": 20000,
    "Instructor": "Harry"
  },
  {
    "Name": "Python",
    "Price": 15000,
    "Instructor": "Alice"
  },
  {
    "Name": "Web Development",
    "Price": 18000,
    "Instructor": "John"
  },
  {
    "Name": "Data Science",
    "Price": 25000,
    "Instructor": "Sara"
  },
  {
    "Name": "C++",
    "Price": 12000,
    "Instructor": "Mike"
  }
]);


// Print a message to the output window.
console.log(`Done inserting data`);
