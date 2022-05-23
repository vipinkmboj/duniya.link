import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import env from 'dotenv';
import postRoutes from './routes/posts.js'


const app = express();

//require('dotenv').config(); use import instead of require
env.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

//app.use('/posts', postRoutes); must be after or below(not above) app.use(cors()); otherwise it will create error in client side.
app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.CONNECTIONURL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


//mongoose.set('useFindAndModify', false);




