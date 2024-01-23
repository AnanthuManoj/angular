//import json server
const jsonServer = require('json-server')

//create json server
const employeeServer = jsonServer.create()

//set path for json file
const router = jsonServer.router('db.json')

//middleware
const middleware = jsonServer.defaults()

//middleware and router
employeeServer.use(middleware)
employeeServer.use(router)

//setup
const port = 3000 || process.env.PORT

//listen
employeeServer.listen(port, () => {
    console.log(`Employee Server is running on ${port}`)
})

