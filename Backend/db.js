const mongoose = require("mongoose");
const colors = require("colors");
const MONGO_URI = 'mongodb://localhost:27017';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = connectDB;
