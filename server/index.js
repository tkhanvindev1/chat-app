const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js")

const app = express();


require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req,res)=> {
    res.send('Hello,World!');
})

app.use('/auth', authRoutes);
const PORT = process.env.PORT || 5040;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
