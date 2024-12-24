const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/motorcycle_website', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Models
const Motorcycle = require('./models/Motorcycle');
const Accessory = require('./models/Accessory');
const Order = require('./models/Order');

// Routes
app.use('/api/motorcycles', require('./routes/motorcycles'));
app.use('/api/accessories', require('./routes/accessories'));
app.use('/api/orders', require('./routes/orders'));

module.exports = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/motorcycle_website',
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key'
};
