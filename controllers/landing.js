
// exports is a keyword
exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}
