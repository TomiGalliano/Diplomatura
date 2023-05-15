var express = require('express');
var router = express.Router();
var productosModel = require('./../modelos/productosModel');
var cloudinary = require('cloudinary').v2;

router.get('/prodcutos', async function (req, res, next) {

    let productos = await productosModel.getProductos();
  
    productos = productos.map(producto =>{
      if(producto.img){
        const imagen = cloudinary.image(producto.img, {
          width:960,
          height:200,
          crop:"fill"
        });
        return {
          ...producto,
          imagen
        }
      } else {
        return {
          ...producto,
          imagen: ''
        }
      }
    });

    res.json(productos)
});

module.exports = router;