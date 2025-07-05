const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const { protect } = require("../middlewares/auth");
const { uploadDoc, getAllDocs  } = require('../controllers/docController');
const Document = require('../models/docModel');
const cloudinary = require('cloudinary').v2;

router.use(protect);

router.post('/upload', upload.single('pdf'), uploadDoc);
router.get('/', async (req, res) => {
  const docs = await Document.find({ user: req.user._id }).sort("-uploadedAt");
  res.json(docs);
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { publicId } = req.body;             // sent from client

  try {
    // 1. Remove file from Cloudinary
    await cloudinary.uploader.destroy(publicId, { resource_type: 'raw' });

    // 2. Delete MongoDB record
    await Document.findByIdAndDelete(id);

    res.json({ message: 'Document deleted' });
  } catch (err) {
    console.error('Delete failed:', err);
    res.status(500).json({ error: 'Failed to delete document' });
  }
});

module.exports = router;
