const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;


// Set up routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));



app.listen(PORT, () => {
    console.log('Server started on PORT: ' + PORT);
})