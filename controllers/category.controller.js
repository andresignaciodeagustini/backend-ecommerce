const Category = require ('../models/category.models')
async function getCategories(req, res) {
    try {
        console.log("asdfasdfasdf")
       
    } catch (error) {
        console.error(error);
        res.status(500).send({
            ok: false,
            message: "Error al obtener categorias"
        });
    }
}

async function createCategory(req, res) {
    try {
        const category = new Category(req.body);
        const newCategory = await category.save();
        res.status(200).send({
            ok: true,
            message: "Categoria creada correctamente",
            category:  newCategory
            
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            ok: false,
            message: "Error al crear categoria"
        });
    }
}








module.exports ={
    getCategories,
    createCategory


}