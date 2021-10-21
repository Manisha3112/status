const knex=require('../utils/database').knex;
const bookshelf=require('bookshelf')(knex);
var register=bookshelf.Model.extend({
  
    tableName:'details',
    
  
});

module.exports=register;
  
  

