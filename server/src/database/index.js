const Sequelize = require('sequelize');
const dbConfig= require('../config/database');
const {v4: uuid}= require('uuid');


const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');


const connection = new Sequelize(dbConfig);

Category.init(connection);
User.init(connection);
Product.init(connection);


Category.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;
