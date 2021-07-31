const multer = require('multer');

var createStorage = multer.diskStorage({
      destination: function(req, file, cb){
            cb(null, 'public/images')
      },
      filename: function(req, file, cb){
            var ext= file.originalname.substr(file.originalname.lastIndexOf('.'));
            cb(null, file.fieldname+'_'+ Date.now()+ext);
      }
});

store = multer({ storage: createStorage});

module.exports = store;