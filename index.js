const express=require('express')
const app = express()
const mongoose=require('mongoose')
const Product=require('./models/product.model.js')
const productRoute=require("./routes/product.route.js")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/products",productRoute)
mongoose.connect("mongodb+srv://keerthananilasha111_db_user:yVDzNJncJBW0d7XO@backenddb.j7d1uvy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(()=>{console.log("CONNECTED TO DB");
    app.listen(3000,()=>{
    console.log("Running On port 3000")
})
}).catch(()=>console.log("CONNECTION FAILED"))


app.get('/', (req, res) => {
  res.send('Hello World from api')
})
// app.get('/api/products',async(req,res)=>{
//    try{
//      const products= await Product.find({});
//      res.status(200).json(products)

//    }
//    catch(error){
//      res.status(500).json({message:error.message})
//    }
// })
// app.get('/api/product/:id',async(req,res)=>{
//    try{
//     const {id}=req.params;
//      const product= await Product.findById(id);
//      res.status(200).json(product)

//    }
//    catch(error){
//      res.status(500).json({message:error.message})
//    }
// })
// app.post('/api/products',async(req,res)=>{
//    try{
//      const product= await Product.create(req.body);
//      res.status(200).json(product)

//    }
//    catch(error){
//      res.status(500).json({message:error.message})
//    }
// })

// app.put('/api/product/:id',async(req,res)=>{
//    try{
//     const {id}=req.params;
//      const product= await Product.findByIdAndUpdate(id,req.body);
//      if(!product){
//         return res.status(404).json({message:"Not found "});
//      }
//      const updatedProd=await Product.findById(id);
//      res.status(200).json(updatedProd)

//    }
//    catch(error){
//      res.status(500).json({message:error.message})
//    }
// })
// app.delete('/api/product/:id',async(req,res)=>{
//    try{
//     const {id}=req.params;
//      const product= await Product.findByIdAndDelete(id);
//      if(!product){
//         return res.status(404).json({message:"Not found "});
//      }
//     //  const updatedProd=await Product.findById(id);
//      res.status(200).json({message:"Deleted Successfully"})

//    }
//    catch(error){
//      res.status(500).json({message:error.message})
//    }
// })


