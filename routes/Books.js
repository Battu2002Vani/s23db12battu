var express = require('express');
const books_controlers= require('../controllers/books');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET books */
router.get('/', books_controlers.books_view_all_Page );
/* GET detail books page */
router.get('/detail',secured, books_controlers.books_view_one_Page);
/* GET create books page */
router.get('/create',secured, books_controlers.books_create_Page);
/* GET create update page */
router.get('/update',secured, books_controlers.books_update_Page);
/* GET delete books page */
router.get('/delete',secured, books_controlers.books_delete_Page);

module.exports = router;
