// to get the dependecies run - npm install express multer path 
// to run the server - node index.js
// to upload the file use as post request and add the file in body from-data with the key file
//* the api urls is - http://localhost:3001/upload

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png|pdf/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      return cb(null, true);
    } else {
      cb(new Error('Only .jpeg, .jpg, .png, or .pdf files are allowed!'));
    }
  }
});

app.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.status(200).send({
      message: 'File uploaded successfully!',
      file: req.file,
    });
  } catch (error) {
    res.status(500).send({ message: 'File upload failed!', error: error.message });
  }
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).send({ message: err.message });
  } else if (err) {
    res.status(400).send({ message: err.message });
  }
});

const fs = require('fs');
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});