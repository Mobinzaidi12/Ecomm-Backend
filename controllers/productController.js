const Products = require("../models/Product");



const addProduct = async (req,res)=>{

    let products = new Products(req.body);
    let result = await products.save();
    res.send(result)

}


const getAllProducts = async(req,res)=>{

    let products = await Products.find();
    if(products.length>0){
        res.send(products)
    }else{
        res.send({result:'not found '})
    }
}


const deleteProduct = async (req,res)=>{
    const result = await Products.deleteOne({_id:req.params.id});
    res.send(result);
}

const getProductById = async(req,res)=>{

    let result = await Products.findOne({_id:req.params.id});
    if(result){
        res.send(result)
    }else{
        res.send({result:"not found"})
    }

}


const updateProduct = async (req,res)=>{

    let result = await Products.updateOne(
        {_id: req.params.id},
        {
            $set: req.body
        }
    );

    res.send(result);

}


const searchProduct = async(req,res)=>{
    let result = await Products.find({
        "$or":[
            {name:{$regex: req.params.key}},
            {price: {$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {company:{$regex:req.params.key}}
        ]
    })
res.send(result);

}

module.exports = {addProduct, getAllProducts, deleteProduct, getProductById, updateProduct, searchProduct}