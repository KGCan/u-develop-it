const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app. use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username,
        user: 'Kgcan',
        //your mysql password
        password: 'BootcampMySQL88!',
        database: 'election'
    },
    console.log('connected to the election database.')
);

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});