const Router = require('express')
const productRouter = Router()

const Product = require('./Product')

//Get all products
app.get('/product', async(req,res)=> {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        if (err) throw err
    }   
})

// Get Single Product
app.get('/product/:id', async (req, res)=>{
    try {
        const products = await Product.findById(req.params.id)
        res.json(products)
    } catch (err) {
        if (err) throw err
    }
})


// Add product
app.post('/product',async (req,res)=>{
    let newProduct = {
        productId: req.body.productId,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        seller: req.body.seller,
        sellerAddress: req.body.sellerAddress,
    }

    try {
        const product = await Product.create(newProduct)
        res.status(201).send('Product Created')
        console.log(product)
    } catch (err) {
        if(err) throw err;
    }

})


//Update Product
app.put('/product', async (req, res)=>{
    let updated = {
        productId: req.body.productId,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        seller: req.body.seller,
        sellerAddress: req.body.sellerAddress,
    }

    try {
        const product = await Product.findOneAndUpdate(newProduct)
        res.status(201).send('Product update successfully')
        console.log(product)
    } catch (err) {
        if(err) throw err;
    }

})


//Delete Product
app.delete('/book/:id', (req,res)=>{
    let productId = req.body.productId
    try {
        await Product.deleteOne({_id: productId})
        res.status(200).send('Successfully deleted')
    } catch (err) {
        res.status(400).send('Unable to delete')
    }
})