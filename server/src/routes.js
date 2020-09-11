const express = require('express');
const {v4: uuid}= require('uuid');
const UserController= require('./controllers/UserController');
const CategoryController= require('./controllers/CategoryController');
const ProductController = require('./controllers/ProductController');



const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);




routes.get('/categorys', CategoryController.index);
routes.post('/categorys', CategoryController.store);
routes.delete('/categorys/:catego_id', CategoryController.delete);
routes.put('/categorys', CategoryController.put);



routes.get('/categorys/:catego_id/products', ProductController.index);
routes.post('/categorys/:catego_id/products', ProductController.store);
routes.delete('/products/:prod_id', ProductController.delete);
routes.put('/products', ProductController.put);







module.exports = routes;