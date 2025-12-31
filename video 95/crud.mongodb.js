use("CrudDB")
console.log(db);

// //create
// db.createCollection("cources")
// db.cources.insertOne(
//     {Name: "Data Science",
//     Price: 25000,
//     Instructor: "Sara"})
//     db.cources.insertMany([
//   {
//     Name: "Machine Learning",
//     Price: 30000,
//     Instructor: "Dr. Smith"
//   },
//   {
//     Name: "React JS",
//     Price: 16000,
//     Instructor: "Emily"
//   },
//   {
//     Name: "Node.js",
//     Price: 17000,
//     Instructor: "Chris"
//   },
//   {
//     Name: "Angular",
//     Price: 15000,
//     Instructor: "Karen"
//   },
//   {
//     Name: "Flutter",
//     Price: 19000,
//     Instructor: "James"
//   },
//   {
//     Name: "Kotlin",
//     Price: 14000,
//     Instructor: "Rachel"
//   },
//   {
//     Name: "Swift",
//     Price: 21000,
//     Instructor: "David"
//   },
//   {
//     Name: "DevOps",
//     Price: 22000,
//     Instructor: "Samantha"
//   },
//   {
//     Name: "UI/UX Design",
//     Price: 13000,
//     Instructor: "Leo"
//   },
//   {
//     Name: "Cybersecurity",
//     Price: 28000,
//     Instructor: "Nina"
//   }
// ])
// //read
// let a =db.cources.find({Price:22000})
// let c =db.cources.findOne({Price:22000})
// console.log(c);
// console.log(a.count());
// console.log(a.toArray());

//update
// db.cources.updateOne({Price:25000},{$set:{Price:100}} )
db.cources.updateMany({Price:25000},{$set:{Price:100}} )


//delete
// db.cources.deleteOne({Price:100})
db.cources.deleteMany({Price:100})


//KNOWLEDGE:   https://www.mongodb.com/docs/manual/reference/operator/query/