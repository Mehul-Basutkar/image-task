var express = require('express');
var router = express.Router();

const ctrl = require('../controller/controller');
const store = require('../middleware/handling');

router.post('/getImges', store.single('images'), ctrl.uploads);
// store.array = get +1 img from req && store.single = get 1 img from req

router.get('/getImg', (req, res)=> {
      res.send('ok')
});

module.exports = router;
