const Category = require('../models/Category');
const Product = require('../models/Product');
const { put } = require('../routes');

module.exports={

  async index(req, res){
    const categorys = await Category.findAll();
     return res.json(categorys);
  },

  async store(req, res){
    const { name }=req.body;

    const category = await Category.create({ name });

    return res.json(category);
  },

  async delete(req, res){

    const {catego_id} = req.params;
    const { name }= req.body;

    const category = await Category.findByPk(catego_id);

     if(!category){
       return res.status(400).json({error:'Catego not found'});
     }
     
        category.destroy().then(function(){
          
            return res.status(200).json({error:'Success'});
          }

        ).catch(function(error){
          return res.status(400).json({ error });

        });
      
  },

  async put(req, res){
    const {id, name}= req.body;

    const category = await Category.findByPk(id);

    if(!category){
      return res.status(400).json({error:'Catego not found'});
    }
    
       category.update({id, name}).then(function(Rows){
         
           return res.status(200).json(Rows);
         }

       ).catch(function(error){
         return res.status(400).json({ error });

       });



  },
};

