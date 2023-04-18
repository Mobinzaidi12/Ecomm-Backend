const { Router } = require("express");
const { addProduct, getAllProducts, deleteProduct, getProductById, updateProduct, searchProduct } = require("../controllers/productController");
const verifyToken = require('../middlewares/auth')
const productRouter = Router();



productRouter.post('/add-product',verifyToken, addProduct);

productRouter.get('/',verifyToken, getAllProducts )


productRouter.delete('/:id',verifyToken, deleteProduct )

productRouter.get('/:id',verifyToken, getProductById )

productRouter.put('/:id',verifyToken, updateProduct )



productRouter.get('/search/:key',verifyToken, searchProduct)



module.exports = productRouter