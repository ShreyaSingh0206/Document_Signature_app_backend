const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
  originalName: String,
  cloudinaryUrl: String,
  publicId: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
},
 { timestamps: true }
);

module.exports = mongoose.model('Document', docSchema);