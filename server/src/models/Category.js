
const {Model, DataTypes}= require('sequelize');

class Category extends Model {
  static init(sequelize) { 
    super.init({
      name:{ type: DataTypes.STRING,
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
      }
      
      

    },{
      sequelize
    })  


  }
  static associate(models){
    this.hasMany(models.Product, {foreignKey:'catego_id', as: 'products'});
  }
}

module.exports= Category;