import express from 'express';

import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/Auth.js";
import id from "./routes/Id.js"
import cors from "cors";
import multer from 'multer';

import path from 'path';

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


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'C:/Users/ayush/Downloads/stachar-main/Uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // Change the file extension to '.jpg'
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
  }
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

// Route for file upload
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  try {
    // If the file was uploaded successfully, respond with a success message
    res.status(201).send('File uploaded successfully');
  } catch (error) {
    // If an error occurred during file upload, respond with an error message
    console.error('Error uploading file:', error);
    res.status(500).send('Internal Server Error');
  }
});











app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api/mvc/auth", authRoutes);
app.use("/api/mvc/ids", id);

//PORT
const port  =  5000;

//run listen
app.listen(port, () => {
  console.log(`STACHAR  listening at http://localhost:${port}`)
})