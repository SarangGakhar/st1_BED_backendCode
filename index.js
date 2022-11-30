require('dotenv').config();
const  express = require('express');
const  mongoose = require('mongoose');
const cors=require('cors');



const dbString = process.env.DATABASE_URL;

mongoose.connect(dbString);

const routes = require('./routes/routes')
const db = mongoose.connection

db.on('error',(error)=>{
    console.log(error);
})

db.once('connected',()=>{
    console.log("connected");
})

const app = express();
app.use(
    cors(
        {
            origin:"*"
        }
    )
)
app.use(express.json());
app.use('/massbunk',routes);
app.listen(3001,()=>{
    console.log(`server is started at localhost ${3001}`);
})