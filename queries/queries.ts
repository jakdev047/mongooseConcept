/*

  database list => show database
  
  database select => use node_crud

  all data => db.getCollection('users').find().limit(1)
              db.users.find({}).limit(1) 
              
  Oparator
    - Comparison: $eq $ne $gt $gte $lt $lte $in $nin

    - Logical: $and $or $not

    - Element: $exists $type

    - Array: $size, $elemMatch, $all

    - Update: $set $unset $addToSet $push $pop $pull $pullAll

    - Delete: $remove $deleteOne

  same property check => explicit
  others property check => implicit
*/

/*
  Collection
  =============

  01. createCollection  => Create a collection

        db.createCollection("testCollection")

  02. insertOne  => insert a data in collection

        db.test.insertOne({name: "Jubayer"})

  03. drop  => remove all data in collection

        db.test.drop()

  04. dropCollection  => remove a collection

        db.dropCollection("test")
*/

/*
  Comparison Query Operator
  ===========================

  01. $eq Specifies equality condition

        db.practice.find({ age: { $eq: 40  } }, {age: 1} )

  02. $ne selects the documents where the value of the field is not equal to the specified value

        db.practice
        .find({ gender: { $ne: "Male"} })
        .project({gender: 1, name: 1 })
  
  03. $gt & $gte  selects those documents where the value of the field is greater than (i.e. >) the specified value.

        db.practice
          .find({ age: { $gt: 40} })
          .project({age: 1, name: 1 })
          .sort({age: 1})

  04. $lt & $lte selects those documents where the value of the field is less than (i.e. <) the specified value.

        db.practice
          .find({ age: { $lt: 40} })
          .project({age: 1, name: 1 })
          .sort({age: 1})

        // example of implicit and
        
        db.practice
          .find({ gender: "Female", age: { $gte: 18, $lte: 30} })    18<= x <= 30
          .project({age: 1, name: 1 })
          .sort({age: 1})

  05. $in any of the values specified in array

        db.practice
          .find({ age: { $in: [3,7]} })
          .project({age: 1, name: 1 })
          .sort({age: 1})

  06. $nin none of the values specified in array

        db.practice
          .find({ age: { $nin: [3,7]} })
          .project({age: 1, name: 1 })
          .sort({age: 1})

*/

/*
  Logical Query Operator
  =======================

  01. $and

        db.practice
          .find({
              $and: [
                  { gender: "Female" },
                  { age: { $lt: 30 } },
                  { "skills.name": "JAVASCRIPT" }
              ]
          })
          .project({ age: 1, name: 1, gender: 1, "skills.name": 1 })
          .sort({ age: 1 })

  02. $or

        db.practice
          .find({
              $or: [
                  { country: "France" },
                  { age: { $lt: 10 } }
              ]
          })
          .project({ age: 1, name: 1, gender: 1, country: 1 })
          .sort({ age: 1 })

  03. $not  

        db.practice
          .find({
              gender: { $not: { $regex: / ^ Male * / } },
              age: { $lte: 18}
          })
          .project({ age: 1, name: 1, gender: 1 })
          .sort({ age: 1 })
*/

/*
  Element Query Operator
  =======================

  01. $exists

        db.practice
          .find({
              age: { $exists: true }
          })
          .project({ age: 1, name: 1, gender: 1 })
          .sort({ age: 1 })
  
  02. $type

        // data type
        db.practice
          .find({
              age: { $type: 'string' }
          })
          .project({ age: 1, name: 1, phone: 1 })
          .sort({ age: 1 })

        // array length check
        db.practice
          .find({
              skills: { $size: 0 }
          })
          .project({ age: 1, name: 1, skills: 1 })
          .sort({ age: 1 })
*/

/*
  Array Query Operator
  =======================

  01. $size

        db.practice
          .find({
              skills: { $size: 0 }
          })
          .project({ age: 1, name: 1, skills: 1 })
          .sort({ age: 1 })

  02. element position, $all & $and

        db.practice
          .find({
              // interests: "Travelling"
              // "interests.0": "Travelling"
              // interests: ["Cooking", "Travelling", "Reading"]
              // interests: { $all: ["Cooking", "Travelling", "Reading"] }
              $and: [
                  { "interests": "Cooking" },
                  { "interests": "Travelling" },
                  { "interests": "Reading" },
              ]
          })
          .project({ name: 1, interests: 1 })
          .sort({ age: 1 })

    03. $elemMatch

        db.practice
          .find({
              // skills: {
              //     name: 'JAVASCRIPT',
              //     level: "Expert",
              //     isLearning: true
              // }

              skills: {
                  $elemMatch: {
                      name: 'JAVASCRIPT',
                      level: "Expert"
                  }
              }
          })
*/

/*
  Update
  ========

  01. $set => Sets the value of a field in a document.

        db.practice
          .updateOne(
              { _id : ObjectId("6406ad65fc13ae5a400000c7") },
              {
                  $set: { country: "Bangladesh"}
              }
          )

  02. $addToSet => add elements to an array only if they do not already exist in the set

        db.practice
          .updateOne(
              { _id : ObjectId("6406ad65fc13ae5a400000c7") },
              {
                  $addToSet:  { interests: "Cooking"}
              }
          )

        db.practice
          .updateOne(
              { _id : ObjectId("6406ad65fc13ae5a400000c7") },
              {
                  $addToSet:  { interests: {$each: ["Travelling", "Swimming"] } }
              }
          )

  03. $push => Adds an item to an array.

        db.practice
          .updateOne(
              { _id : ObjectId("6406ad65fc13ae5a400000c7") },
              {
                  $push:  { interests: {$each: ["Travelling", "Swimming"] } }
              }
          )

  04. $unset => Removes the specified field from a document.

        db.practice
          .updateOne(
              { _id : ObjectId("6406ad65fc13ae5a400000c7") },
              {
                  // $unset:  { occupation: 1 }
                  $unset:  { occupation: "" }
              }
          )
  
  05. $pop => Removes the first or last item of an array.

        db.practice
          .updateOne(
              { _id : ObjectId("6406ad65fc13ae5a400000c7") },
              {
                  $pop:  { languages: 1 } // 1 = last remove & -1 = first remove
              }
          )
  06. $pull => Removes all array elements that match a specified query.

        db.practice
          .updateOne(
              { _id : ObjectId("6406ad65fc13ae5a400000c7") },
              {
                  $pull:  { friends: "Rasel Ahmed" }
              }
          )

  07. $pullAll => Removes all matching values from an array.

        db.practice
          .updateOne(
              { _id : ObjectId("6406ad65fc13ae5a400000c7") },
              {
                  $pullAll:  { interests: ["Travelling", "Swimming"] }
              }
          )

  08. $updateMany => all item update

        db.practice
          .updateMany(
              { },
              {
                  $pullAll:  { interests: ["Travelling", "Swimming"] }
              }
          )

*/

/*
  Delete
  ==========

  01. $deleteOne / $remove => Removes a single document from a collection

        db.practice
          .deleteOne(
              { _id : ObjectId("6406ad65fc13ae5a400000c7") }
          )
*/

/*
  formate => alt shift f

  run => ctrl Enter
*/
