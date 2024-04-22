use("CrudDb")

db.createCollection('courses')

db.courses.insertOne({
    name:"Mukti",
    price:1000,
    assignments:12,
    projects:23
})

db.courses.insertMany([{
    "name": "Ram",
    "price": 1200,
    "assignments": 10,
    "projects": 18
},

{
    "name": "Sara",
    "price": 900,
    "assignments": 15,
    "projects": 20
},

{
    "name": "Amit",
    "price": 1100,
    "assignments": 14,
    "projects": 25
},

{
    "name": "Priya",
    "price": 950,
    "assignments": 11,
    "projects": 22
},

{
    "name": "Kiran",
    "price": 1050,
    "assignments": 13,
    "projects": 24
},

{
    "name": "Rahul",
    "price": 1000,
    "assignments": 12,
    "projects": 23
},

{
    "name": "Neha",
    "price": 930,
    "assignments": 16,
    "projects": 19,
},

{
    "name": "Vikram",
    "price": 1150,
    "assignments": 9,
    "projects": 21,
},

{
    "name": "Anjali",
    "price": 980,
    "assignments": 13,
    "projects": 22,
},

{
    "name": "Aditya",
    "price": 1050,
    "assignments": 12,
    "projects": 24
},
])

// let a = db.courses.find({"price":1050});
// console.log(a.count());
// let b = db.courses.findOne({"price":1050,"assignments":12});
// console.log(b);

//update
db.courses.updateOne({price:1050} , {$set:{price:0}});

db.courses.updateMany({price:1000} , {$set:{price:0}});

//delete
db.courses.deleteMany({price:0});


