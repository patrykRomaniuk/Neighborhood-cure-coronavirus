const express = require('express');
const cors = require('cors');
const app = express();
const connectToDatabase = require('./config/connectToDatabase');

app.use(cors());

connectToDatabase();

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/task'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))