const fastify=require('fastify')({
    logger:true
});
const mongoose=require('mongoose');
const routes=require('./backend/routes/mainRoutes');

//to connect the mongodb database
mongoose.connect('mongodb://localhost/todo')
.then(()=>console.log('Database Connected'))
.catch((err)=>console.log(err));

//for routes
routes.forEach((route, index)=>{
    fastify.route(route)
})
  
const port=process.env.port||3002;

fastify.listen(port,(err,address)=>{
    if(err) return console.log(err);
    console.log(`Server is up on port ${address} ...`);
});