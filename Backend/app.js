// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define schema and model for images
const imageSchema = new mongoose.Schema({
  imageUrl: String
});
const Image = mongoose.model('Image', imageSchema);

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Handle POST request to upload image
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Image({
      imageUrl: req.file.path
    });
    await newImage.save();
    res.status(201).send('Image uploaded successfully');
  } catch (err) {
    console.error('Error uploading image:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
