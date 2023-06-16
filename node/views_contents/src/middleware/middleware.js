exports.middlewareGlobal = (req, res, next)=>{
    res.locals.umaVariavelLocal = 'OLHA sóooooooooooooooooooooo'
    next();
}