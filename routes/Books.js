var express = require('express');
const books_controlers= require('../controllers/books');
var router = express.Router();
/* GET costumes */
router.get('/', books_controlers.books_view_all_Page );
module.exports = router;
