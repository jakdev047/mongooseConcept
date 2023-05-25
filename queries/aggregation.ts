/*
    MongoDB Aggregation

    input => $match => $group => $sort => output 

    1. Add Field < Find < Define column < New Column Merge
    2. Group ( find < group < specific view column < sort < limit )
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

  // find < group < specific view column < sort < limit
  db.practice.aggregate([
    // stage $match 
    { $match: { age: { $gte: 18 } } },
    
    // stage $group ( get distict wise data )
    { $group: { 
        _id: "$salary",
        noOfPersons: { $sum: 1 }
    } },
    
    // statge $project
    { $project: { noOfPersons: 1, salary: "$_id" } },
    
    // stage $sort
    {$sort: {$id: 1} },
    
    // statge $limit
    { $limit: 5 }
  ])


  db.practice.aggregate([

    // stage $group ( get distict wise data )
    { $group: { 
        _id: null,
        count: { $sum: "$salary" },
        maxSalary: { $max: "$salary" },
        minSalary: { $min: "$salary" },
        avgSalary: { $avg: "$salary" },
    } },
    
    // statge $project
    {
        $project: {
          count: 1,
          maxSalary: 1,
          minSalary: 1,
          avgSalary: 1,
          salaryRange: { $subtract: ["$maxSalary", "$minSalary"] }
        }
    }
    
  ])

*/
