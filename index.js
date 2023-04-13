const express = require('express');
const morgan = require('morgan');
const server =express();
const productController =require('./controller/product')
//Built in middleware
//Body Praser
server.use(express.json());
server.use(morgan('combined'));
server.use(express.static('public'));

// Model View Controller M.V.C.

// Create POST /products  C R U D
server.post('/products',productController.createProduct);

//READ API get/products
server.get('/products',productController.getAllProducts);

// Read put /products /:id
server.get('/products/:id',productController.getProduct);

// Update put /products /:id
server.put('/products/:id',productController.replaceProduct);

// Update PATCH /products/:id
server.patch('/products/:id',productController.updateProduct);

//Delete DELETE /products/:id
server.delete('/products/:id',productController.deleteProduct);





server.listen(3000);
