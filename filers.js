// The usecases of filters and foreach is similar but foreach doesn't
// return value back so we use filter for returning values...

const numbs = [0,1,2,3,4,5,6,7,8,9,20]
const newnumbs = numbs.filter( (num) =>{
    return num < 20

})
console.log(newnumbs)

// Here is the example

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
// This is how we hunt values from arrays in objects from database 

// First way
  const user = books.filter( (bks) =>{
    return bks.genre === 'Science'

  })
  console.log(user)
// // Second way
  const nr = books.filter((bks) => bks.genre === 'Fiction')
  console.log(newUser)ewUse


  