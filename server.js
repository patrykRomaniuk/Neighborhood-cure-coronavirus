const express = require('express');
const cors = require('cors');
const app = express();
const connectToDatabase = require('./config/connectToDatabase');
const path = require('path');

app.use(cors());

connectToDatabase();

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/task'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))