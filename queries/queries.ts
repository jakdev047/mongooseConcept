/*

  database list => show database
  
  database select => use node_crud

  all data => db.getCollection('users').find().limit(1)
              db.users.find({}).limit(1)  

*/

/*
  Operator
  ============

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
  formate => alt shift f
*/
