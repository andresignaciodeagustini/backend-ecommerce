const Product = require('../models/product.models');

async function getProducts(req, res) {
    try {
        const products = await Product.find();
        res.status(200).send({
            ok: true,
            message: "Productos obtenidos correctamente",
            products
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            ok: false,
            message: "Error al obtener productos"
        });
    }
}

async function postProduct(req, res) {
    try {
        const product = new Product(req.body);
        const newProduct = await product.save();
        res.status(201).send({
            ok: true,
            message: "Producto creado correctamente",
            product: newProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            ok: false,
            message: "Error al crear producto"
        });
    }
}

async function getProductById(req, res) {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        
        if (!product) {
            return res.status(404).send({
                ok: false,
                message: "Producto no encontrado"
            });
        }
        
        res.status(200).send({
            ok: true,
            message: "Producto encontrado correctamente",
            product
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            ok: false,
            message: "Error al obtener el producto"
        });
    }
}

async function deleteProduct(req, res) {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        
        if (!deletedProduct) {
            return res.status(404).send({
                ok: false,
                message: "Producto no encontrado para eliminar"
            });
        }
        
        res.status(200).send({
            ok: true,
            message: "Producto eliminado correctamente",
            product: deletedProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            ok: false,
            message: "Error al eliminar el producto"
        });
    }
}

async function updateProduct(req, res) {
    try {
        const productId = req.params.id;
        const update = req.body;
        const data = Date.now();

        const updatedProduct = await Product.findByIdAndUpdate(productId, data, update, { new: true });
        
        if (!updatedProduct) {
            return res.status(404).send({
                ok: false,
                message: "Producto no encontrado para actualizar"
            });
        }
        
        res.status(200).send({
            ok: true,
            message: "Producto actualizado correctamente",
            product: updatedProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            ok: false,
            message: "Error al actualizar el producto"
        });
    }
}

module.exports = {
    getProducts,
    getProductById,
    deleteProduct,
    postProduct,
    updateProduct
};
