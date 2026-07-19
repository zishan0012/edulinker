const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const path = require('path');

// Load env vars
dotenv.config({ path: path.join(__dirname, '.env') });

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
// app.use('/api/courses', require('./routes/courseRoutes'));
// app.use('/api/categories', require('./routes/categoryRoutes'));
// app.use('/api/teachers', require('./routes/teacherRoutes'));
// app.use('/api/blogs', require('./routes/blogRoutes'));

// Basic route
app.get('/', (req, res) => {
  res.send('Edulinker API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
