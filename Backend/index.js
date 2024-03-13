import express from 'express';

import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/Auth.js";
import id from "./routes/Id.js"
import cors from "cors";

//configure env
dotenv.config();


//databse config
const MONGO_URI = 'mongodb://localhost:27017';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

//rest object
const app = express();

//middelwares
app.use(cors());
import bodyParser from 'body-parser';
// const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api/mvc/auth", authRoutes);
app.use("/api/mvc/ids", id);

//PORT
const port  =  5000;

//run listen
app.listen(port, () => {
  console.log(`shivani saree  listening at http://localhost:${port}`)
})