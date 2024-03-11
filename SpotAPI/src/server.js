require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const setupPassport = require('./config/passport-setup');
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));

setupPassport();

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', authRoutes);
app.use('/', apiRoutes);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
