const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 4000;

// Body Parser Middleware
app.use(express.json({ extended: false }));

// Connect to MongoDB
connectDB();


// Set up routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));



app.listen(PORT, () => {
    console.log('Server started on PORT: ' + PORT);
})