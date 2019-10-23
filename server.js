const express = require('express');
const app = express();
const ConnectDB = require('./config/db');
const path = require('path')

const PORT = process.env.PORT || 5001;

// Connect to Database
ConnectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));

// // Create a Route
// app.get('/', (req, res) => res.json({ msg: 'Welcome to Developers Network' }));

// Define Router
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


// Serve static asset in production
if(process.env.NODE_ENV === 'production') {
    // Set static Folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}