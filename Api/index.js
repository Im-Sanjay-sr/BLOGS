const express = require('express')
const app = express()
const dotenv = require('dotenv');
const bodyparser = require('body-parser')
const connectDB = require('./connection/connection')
const cors = require('cors')

//load env variables
dotenv.config({path:'.env'}) // merges them into the "process.env" object
const PORT = process.env.PORT || 8080

// mongodb connection
connectDB()

app.use(cors()); // one domain to interact with resources in a different domain

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))  //Parse incoming request bodies
app.use(bodyparser.json())  //used to deal json objects

// load route
app.use('/', require('./routers/router'));

app.listen(PORT,() => console.log(`server is running on http://localhost:${PORT}`))