const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));