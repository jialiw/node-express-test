
// exports is a keyword
exports.index = function(req, res, next) {
    res.render('index', { title: 'Express' });
}
