module.exports = (req,res,next)=>{

   
    if(req.body.cliente){
        console.log();
        console.log(`Ola rapaz ${req.body.cliente}`);
        console.log();
    }

    

    next();
}