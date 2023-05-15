var express = require('express');
var router = express.Router();
var productosModel = require('../../modelos/productosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uplouder = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy)

/* GET home page. */
router.get('/', async function (req, res, next) {

  var productos = await productosModel.getProductos();

  productos = productos.map(producto =>{
    if(producto.img){
      const imagen = cloudinary.image(producto.img, {
        width:100,
        height:100,
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

  res.render('admin/productos', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    productos
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar',{
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, netx) => {
  try {

    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0){
      imagen = req.files.imagen;
      img_id = (await uplouder(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await productosModel.insertProducto({
        ...req.body,
        img_id
      });
      res.redirect('admin/productos')
    } else{
      res.render('admin/agregara',{
        layout: 'admin/layout' ,
        error : true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch(error){
    console.log(error)
    res.render('admin/agregar',{
      layout:'admin/layout',
      error: true,
      message: 'no se cargo el producto.'
    })
  }
})

/*eliminar*/
router.get('/eliminar/:id', async (req, res, next) =>{
  var id = req.params.id;

  let producto = await productosModel.getProductosById(id);
  if (producto.img_id) {
    await (destroy(producto.img_id));
  }

  await productosModel.deleteProductosById(id);
  res.redirect('admin/productos');
})

/*modificar*/

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var producto =await productosModel.getProductosById(id);

  console.log(req.params,id);
  res.render('admin/modificar',{
    layout: 'admin/layout',
    producto
  })
})

router.post('/modificar', async (req, res, next) => {
  try{

    let img_id = req.body.img_original;
    let borrar_img_vieja = false
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if ( req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uplouder(img.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img-original));
    }

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id 
    }
    console.log(obj)
    console.log(req.body.id)

    await productosModel.modificarProductosById(obj, req.body.id);
    res.redirect('/admin/productos');
  } catch(error) {
    console.log(error)
    res.render('/admina/modificar',{
      layout:'admin/layout',
      error: true,
      message: 'no se modifico el producto'
    })
  }
})


module.exports = router;