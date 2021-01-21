const express = require('express')
const { saveProduct, getProducts, updateProduct, getProduct, deleteProduct} = require('../controllers/product.controller')
const verfyToken = require('../middlewares/verifyToken')
const apiProduct = express.Router()

apiProduct.post('/product', verfyToken, saveProduct)
apiProduct.get('/products', getProducts)
apiProduct.put('/product/:productId',verfyToken, updateProduct)
apiProduct.get('/product/:productId', getProduct)
apiProduct.delete('/product/:productId', verfyToken, deleteProduct)
module.exports = apiProduct