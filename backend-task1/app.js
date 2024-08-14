const express = require('express');
const {connectDB} = require('./database');

const app = express();
app.use(express.json());

const eventRoutes = require('./routes/events');

app.use('/', eventRoutes);

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch( error =>{
    console.log(error);
})