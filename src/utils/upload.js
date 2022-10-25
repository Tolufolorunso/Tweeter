const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `${req.user.username}-${file.fieldname}-${uuidv4()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.includes('image')) {
    cb(null, true);
  } else {
    cb(new Error('Not a PDF File!!'), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

module.exports = upload;
