const {Model, DataTypes}= require('sequelize');

class Product extends Model {
  static init(sequelize) { 
    super.init({
      name: DataTypes.STRING,    

    },{
      sequelize
    })  


  }
  static associate(models){
    this.belongsTo(models.Category, {foreignKey:'id', as: 'owner'});
  }
}

module.exports= Product;