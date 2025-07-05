const Document = require('../models/docModel');

const uploadDoc = async (req, res) => {
  try {
    const file = req.file;
    console.log(" Uploaded file:", file);
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    // const doc = new Document({
    //   originalName: file.originalname,
    //   cloudinaryUrl: file.path,
    //   publicId: file.filename,
    // });

    // await doc.save();
    // res.status(201).json({ message: 'File uploaded successfully', doc });
    const cloudinaryUrl =
     typeof file.path === 'string' ? file.path : file.secure_url;

   const doc = await Document.create({
    originalName: file.originalname,
     cloudinaryUrl,         // ✅ string, never [object Object]
     publicId: file.filename,
     user: req.user._id, 
   });

   // ➋  Return the doc directly – the frontend needs those fields.
   res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllDocs = async (req, res) => {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { uploadDoc, getAllDocs };
