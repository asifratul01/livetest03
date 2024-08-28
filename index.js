const express = require('express');
const multer = require('multer');
const { contentDisposition } = require('express/lib/utils');
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: function (req, file, cd) {
    cd(null, file.originalname);
  },
});

const upload = multer({ storage }).single('myFile');
app.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end('Error uploading file');
    }
    res.end('File uploaded Successfully ');
  });
});

app.listen(5500, function (err, port) {
  console.log('server Is Running on port 5500');
});
