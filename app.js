const express = require('express');
const app = express();
const tasks = require('./router/tasks');
const notFound = require('./middleware/not-found')
require('dotenv').config();

//password 98iCnW1gKoSJL6da for mongo connect
const connectDB = require('../starter/db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.static('./public'))
app.use(express.json());

//ROUTSE

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

//port and connect to server

const pORT = process.env.PORT || 3003 ;

const  start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(pORT , console.log(`THE APP LISTEN TO PORT ${pORT}....`));

    } catch (error) {
        console.log(error);
    }
}
start();