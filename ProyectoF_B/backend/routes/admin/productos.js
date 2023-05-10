var express = require('express');
var router = express.Router();
var productosModel = require('../../modelos/productosModel')


/* GET home page. */
router.get('/',async function (req, res, next) {

  var productos = await productosModel.getProductos();

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
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await productosModel.insertProducto(req.body);
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

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
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