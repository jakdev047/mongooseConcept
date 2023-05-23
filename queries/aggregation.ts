/*
    MongoDB Aggregation

    input => $match => $group => $sort => output 

    1. Add Field < Find < Define column < New Column Merge
    2. Group
*/

/*

  Add Field < Find < Define column < New Column Merge
  ====================================================

    db.practice.aggregate([
      // stage $addFields
      {
          $addFields: {
              salary: {
                  $toInt: {
                      $floor: {
                          $multiply: [{ $rand: {} }, 100]
                      }
                  }
              }
          }
      },

      // statge $match
      { $match: { gender: "Male", age: { $lte: 20 } } },

      // statge $project
      { $project: { name: 1, gender: 1, age: 1, salary: 1 } },
      
      // stage merge ( new collection add )
      // { $out: "salaryWithPractice"},
      
      // stage merge
      { $merge: "practice"}

  ])
*/

/*

  Group
  =======

    db.practice.aggregate([
      // stage $group ( get distict wise data )
      // { $group: { _id: "$gender" } }
      
      { $group: { _id: {
          age: "$age",
          gender: "$gender"
      } } }

  ])
*/
