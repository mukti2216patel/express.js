use("CrudDb")

db.createCollection('courses')

db.courses.insertOne({
    name:"Mukti",
    price:1000,
    assignments:12,
    projects:23,
})
