const ProductController = require("../controllers/product.controllers")
console.log("Something to check..", ProductController);

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.post('/api/products', ProductController.createAProduct);
    app.put('/api/products/:id', ProductController.updateOldProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}

// get all
// get one
// create one
// update one
// delete one