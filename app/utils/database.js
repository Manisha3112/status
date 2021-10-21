const knex=require('knex')({

  client: 'mysql2',
  connection: {
    host     : 'localhost',
    user     : 'manisha',
    password : '@Jingjung31',
    database : 'eunimart',
    charset  : 'utf8'
  }
});
module.exports.knex=knex;
