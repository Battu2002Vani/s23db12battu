var express = require('express');
const books_controlers= require('../controllers/books');
var router = express.Router();
/* GET books */
router.get('/', books_controlers.books_view_all_Page );
/* GET detail books page */
router.get('/detail', books_controlers.books_view_one_Page);
module.exports = router;
