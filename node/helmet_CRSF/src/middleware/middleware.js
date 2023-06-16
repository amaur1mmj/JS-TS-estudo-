exports.middlewareGlobal = (req, res, next)=>{
    res.locals.umaVariavelLocal = 'OLHA sóooooooooooooooooooooo'
    next();
};

exports.checkCsrfError = (err, req, res, next)=>{
    if(err && 'EBADCSRFTOKEN' === err.code)
        return res.render('404');
};

exports.csrfMiddleware = (req, res , next)=>{
    res.locals.csrfToken = req.csrfToken();
    next();
};