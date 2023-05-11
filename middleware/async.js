const asyncWrapper =  (FU)=> {
    return async (req,res,next)=> {
try {
    await FU(req,res,next)
} catch (error) {
    next(error)
}
    }
}  
module.exports= asyncWrapper ;
