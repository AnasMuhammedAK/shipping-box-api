const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dbConnect = require('./config/db/dbConnect')
const orderRoute = require('./route/orderRoute')
const { notFound, errorHandler } = require('./middleware/errorHandler')

const app = express()

//CONNECT DATABASE
dbConnect()

app.use(morgan('dev'))

//PARSE DATA
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//CORS_OPTIONS
app.use(cors());

//CONNECT ROUTES
app.use('/api/order', orderRoute)

//ERROR HANDLER
app.use(notFound)
app.use(errorHandler)

//Server configuration 
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT}`))