const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config(); // استدعاء dotenv

const app = express();
const PORT = process.env.PORT || 3000;

// قراءة رابط قاعدة البيانات من ملف .env
const mongoURI = process.env.MONGODB_URI;

// الاتصال بقاعدة البيانات
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// تعريف نموذج Mongoose إذا كنت تستخدمه
// const YourModel = mongoose.model('YourModel', yourSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let uploadedLinksCount = 0;

app.get('/api/links/count', (req, res) => {
    res.json({ count: uploadedLinksCount });
});

app.post('/api/upload/link', (req, res) => {
    const { link } = req.body;
    if (link) {
        // يمكنك هنا إضافة رابط إلى قاعدة البيانات
        uploadedLinksCount++;
        res.status(200).json({ message: 'Link uploaded successfully.' });
    } else {
        res.status(400).json({ error: 'Invalid link.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
