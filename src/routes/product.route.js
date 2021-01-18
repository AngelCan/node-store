const express = require('express')
const { saveProduct, getProducts, updateProduct, getProduct, deleteProduct} = require('../controllers/product.controller')
const apiProduct = express.Router()

apiProduct.post('/product', saveProduct)
apiProduct.get('/products', getProducts)
apiProduct.put('/product/:productId', updateProduct)
apiProduct.get('/product/:productId', getProduct)
apiProduct.delete('/product/:productId', deleteProduct)
module.exports = apiProduct