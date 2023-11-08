var books = require('../models/books');
// List of all books
exports.books_list = async function(req, res) {
    try{
    thebooks = await books.find();
    res.send(thebooks);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.books_view_all_Page = async function(req, res) {
try{
thebooks = await books.find();
res.render('books', { title: 'books Search Results', results: thebooks });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
    
// for a specific books.
exports.books_detail = function(req, res) {
res.send('NOT IMPLEMENTED: books detail: ' + req.params.id);
};
// Handle books create on POST.
exports.books_create_post = async function(req, res) {
    console.log(req.body)
    let document = new books();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.author = req.body.author;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle books delete form on DELETE.
exports.books_delete = function(req, res) {
res.send('NOT IMPLEMENTED: books delete DELETE ' + req.params.id);
};
// Handle books update form on PUT.
exports.books_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: books update PUT' + req.params.id);
};
