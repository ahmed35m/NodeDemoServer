const url = require('url')
const  myUrl = new URL('http://labfiz.com/hello.html?id=106&status=active')

//Seralize URL
console.log(myUrl.href)
console.log(myUrl.toString())

//Host (with port)
console.log(myUrl.host)

//Host name
console.log(myUrl.hostname)

//Pathname
console.log(myUrl.pathname)

//Seralized Query
console.log(myUrl.search)
//Param obj
 console.log(myUrl.searchParams)
 //Add Param dynamically
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)
//Loop through params
myUrl.searchParams.forEach((value,name)=> console.log(`${name}: ${value}`))