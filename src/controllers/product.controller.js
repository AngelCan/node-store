const Product = require('../models/Product')

async function saveProduct (req, res){
    //Primero realizamos la destructuración y luego...
    const{
        name,
        size,
        unitaryPrice,
        description
    } = req.body
//LO pasamos al schema
    const product = Product({
        name,
        size,
        unitaryPrice,
        description
    })
    try {
        const productStored = await product.save()
        res.status(201).send({message: productStored})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}
async function getProducts(req, res) {
    try {
        const products = await Product.find().lean().exec()
        res.status(200).send({items: products})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

async function updateProduct(req, res){
    let productId = req.params.productId
    let updated = req.body
    try {
        await Product.findOneAndUpdate({_id: productId}, updated,(err, products)=>{
            if(err) return res.status(500).send({message: `cannot update this product ${err}`})
            res.status(200).send({message: 'this product has benn updated'})
        })
        
    } catch (error) {
        throw error
    }
}

async function getProduct(req, res){
    let productId = req.params.productId
    try {
        await Product.findOne({_id: productId}, (err, product)=>{
            if(err) return res.status(500).send({message: 'An internal server error'})
            if(!product) return res.status(404).send({message: 'the product not found'})
            res.status(200).send({message: product})
        })
    } catch (error) {
        throw error
    }
}

async function deleteProduct(req, res){
    let productId = req.params.productId
    try {
        await Product.findByIdAndDelete({_id: productId}, (err, productDeleted)=>{
            if(err) return res.status(500).send({message: 'cannot delete this product'})
            if(!productDeleted) res.status(404).send({message: 'this product not found'})
            res.status(200).send({message:'this product has been deleted', productDeleted})
        })
    } catch (error) {
        throw error
    }
}

module.exports={
    saveProduct,
    getProducts,
    updateProduct,
    getProduct, 
    deleteProduct
}