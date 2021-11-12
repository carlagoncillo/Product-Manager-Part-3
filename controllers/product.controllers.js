// CRUD

const Product = require("../models/product.models");

module.exports = {

    getAllProducts: (req, res) => {
        Product.find()
            .then(allDaProducts => res.json({ products: allDaProducts }))
            .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        },
        // READ
        getOneProduct: (req, res) => {
            Product.findOne({ _id: req.params.id})
                .then(oneProduct => res.json({ product: oneProduct }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            },
            // CREATE or POST
            createAProduct: (req, res) => {
                Product.create(req.body)
                .then(newProduct => res.json({ product: newProduct}))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            },
            // UPDATE or PUT
            updateOldProduct: (req, res) => {
                Product.findByIdAndUpdate(
                    {_id: req.params.id}, 
                    req.body,
                    {new: true, runValidators: true}
                    )
                    .then(updateProduct=> res.json({ product: updateProduct }))
                    .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            },
            // DELETE
                deleteProduct: (req, res) =>{
                    Product.deleteOne({ _id: req.params.id })
                    .then(result => res.json({ result: result }))
                    .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            }

}
