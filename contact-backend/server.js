require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/validationMiddleware');

const app = express();

// Add this line to parse JSON requests
app.use(express.json());

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: 'https://ahmadraza-ashy.vercel.app/'|| 'http://localhost:3000',
  methods: ['POST'],
  credentials: true
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: 'Too many contact attempts. Please try again later.'
});

// Routes
app.use('/api/contact', limiter, contactRoutes);

// Error Handling
//app.use(errorHandler());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));