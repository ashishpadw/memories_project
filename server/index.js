import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import postRoutes from './routes/posts.js'

const app=express();

app.use('/posts',postRoutes);

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//https://www.mongodb.com/atlas
const CONNECTION_URL='mongodb+srv://ashishpadw:ashishpadw123@memoriesdb.4pzxxr2.mongodb.net/?retryWrites=true&w=majority'
const PORT=process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true}).then(()=>app.listen(PORT, ()=>console.log(`Server running on port : ${PORT}`)))
    .catch((error)=>console.log(error.message));
mongoose.set('strictQuery', true);
