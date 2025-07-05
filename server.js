const express = require('express')
const fs   = require('fs');
const mongoose = require('mongoose')
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const docRoutes = require('./routes/docRoute');

dotenv.config({ path: path.join(__dirname, '.env') });
const app = express()


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser());
app.use(cors({
  origin: 'https://document-signature-app-frontend-green.vercel.app',
  credentials: true,
}));



mongoose.connect(process.env.MONGO_URI, {
    }).then(() => {
    console.log('Connected to MongoDB')
    }).catch(err => {
    console.error('Error connecting to MongoDB:', err)
    })

app.use('/api/auth', authRoutes);
app.use('/api/docs', docRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
