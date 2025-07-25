const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'documents', // optional folder name in Cloudinary
    resource_type: 'raw', // handles PDFs, images, etc.
    format: async (req, file) => 'pdf', // force pdf (optional)
    // public_id: (req, file) => file.originalname.split('.')[0],
     public_id: (req, file) =>
     `${Date.now()}-${file.originalname.replace(/\s+/g, '_')}`,
  },
});

module.exports = {
  cloudinary,
  storage,
};
