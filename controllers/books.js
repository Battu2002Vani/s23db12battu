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
// exports.books_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: books detail: ' + req.params.id);
// };


// for a specific books.
exports.books_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await books.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle books create on POST.
exports.books_create_post = async function(req, res) {
    console.log(req.body)
    let document = new books();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"books_type":"goat", "cost":12, "size":"large"}
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
//exports.books_update_put = function(req, res) {
//res.send('NOT IMPLEMENTED: books update PUT' + req.params.id);
//};
// Handle  update form on PUT.
exports.books_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await books.findById( req.params.id)
// Do updates of properties
if(req.body.books_type)
toUpdate.name = req.body.name;
if(req.body.author) toUpdate.author = req.body.author;
if(req.body.cost) toUpdate.cost = req.body.cost;
let result = await toUpdate.save();
console.log("Success " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// Handle book delete on DELETE.
exports.books_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await books.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.books_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await books.findById( req.query.id)
res.render('booksdetail',
{ title: 'books Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.books_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('bookscreate', { title: 'books Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    

