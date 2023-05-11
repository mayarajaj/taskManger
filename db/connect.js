const mongooes = require('mongoose');




const connectDb = (url)=>{
  return  mongooes
    .connect(url,{
        useNewUrlParser : true ,
        useCreateIndex : true , 
        useFindAndModify : false ,
        useUnifiedTopology : true   
    })
};



// .then(()=>console.log('IS CONNCETSD TO DATA ....'))
// .catch((err)=>console.log(err));

module.exports = connectDb ;