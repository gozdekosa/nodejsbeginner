const express = require('express');
const app = express();
const usersRoutes = require('./routes/users'); // Importing the users router
app.set("view engine", "ejs"); // Set the view engine to EJS

app.use(express.static('public'));

app.use(usersRoutes); // Use the users routes


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});