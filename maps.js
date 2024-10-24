// Here is the usage of map //
const numbers = [0,2,3,4,5,6,77,88]
const marks = numbers.map( (num) => num*10 ).map( (num) => num -2 *20)
.filter( (num)=> num - 600)
console.log(marks)

// // now the usage of reduce functions

const courses = [
    {
        course : "javascript",
        price : "5999"
    },
    {
        course : "Python",
        price : "1999"
    },
    {
        course : "Java",
        price : "3999"
    },
    {
        course : "Swift",
        price : "2999"
    },
    {
        course : "GoLang",
        price : "9999"
    },
    {
        course : "Ruby",
        price : "7999"
    },
    {
      
        course : "C++",
        price : "2999"
    },
    {
        course : "Go",
        price : "19999"
    },
    {
        course : "C",
        price : "15999"
    },
]
 const total = courses.filter( (item) => item.course == "C" )
 console.log(total)
 // Reduce is used to total the previous and next prices e.g = 20,then 30, 40 just like in shopping malls
 // There are 2 values in reduce : accumalator & current Value in function

 const totalShopping = courses.reduce( (acc, values) => acc + values.course, 0 ) 
 console.log(totalShopping)


 let arr = [1,2,3,4,5]
 let real = arr.reduce( (acc, item) => acc + item, 0 ) 
 console.log(real)