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

  Others
  ========

    01. basic group

        db.practice.aggregate([
            // stage $group ( get distict wise data )
            // { $group: { _id: "$gender" } }
            
            { $group: { _id: {
                age: "$age",
                gender: "$gender"
            } } }

        ])

    02. find < group < specific view column < sort < limit

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


    03. aggregation group oparations
    
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

    04. $unwind => friends= ["Najmus Sakib", "Jhankar Mahbub"]  => Jhankar Mahbub 42

        db.practice.aggregate([
            // statge $unwind
            {
                $unwind: "$friends"
            },
            
            // stage $group
            {
                $group: {
                    _id: "$friends",
                    count:  {$sum: 1}
                }
            }
        ])  

    05. Sub Pipeline
        
        db.practice.aggregate([
            // stage $match
            {$match: { _id : ObjectId("6406ad65fc13ae5a400000c7") } },
            
            // stage $facet
            {
                $facet: {
                    // sub pipeline
                    "friendsCount": [
                        // stage 
                        { $project: { friendsCount: { $size: "$friends" } } }
                    ],
                    
                    // sub pipeline
                    "interestCount": [
                        // stage 
                        { $project: { interestCount: { $size: "$interests" } } }
                    ]
                }
            }        
        ])
    
    06. Join 
        
        db.practice.aggregate([
            // stage $match
            {$match: { email : "omirfin2@i2i.jp" } },
            
            // stage $lookup
            {
                $lookup: {
                    from: "additionalInfo",
                    localField: "email",
                    foreignField: "userEmail",
                    as: "additionalInformation"
                }
            },
            
            //statge $project
            {
                $project: {
                    name: 1,
                    additionalInformation: 1
                }
            }
            
        ])

*/
