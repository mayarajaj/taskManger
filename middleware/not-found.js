const notFound = (req,res)=>{
    res.status(404).send('there is no page found');
}

module.exports = notFound ;
