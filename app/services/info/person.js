const personal=require('../../model/reg');
const knex= require('../../utils/database').knex;
const bookshelf=require('bookshelf')(knex);
class person{
  get_date_time(req,res) {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    res.send("Date and time "+year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
}

 //Read all details
  read_information (req, res) {
    
    personal.forge()
    .fetchAll()
    .then(function (information) {
      return res.json({message: "User data fetched suceesfully", data: information.toJSON()});
    })
    .catch(function (err) {
      return res.status(400).json({error: true, data: {message: err.message}});
    });
  
};
  //read a detail by id
  readById_information(req,res){
    personal.forge({id:req.query.id})
    .fetch()
    .then(function (user) {
      if (!user) {
        return res.status(404).json({error: true, data: {}});
      }
      else {
       return res.json({message: "User data is fetched successfully", data: user.toJSON()});
      }
    })
    .catch(function (err) {
      return res.status(400).json({error: true, data: {message: err.message}});
    });

  }  
//Create a detail
create_information (req, res) {
    personal.forge({
      
              user_name: req.body.user_name,
              user_email:req.body.user_email,
              status:req.body.status
            })
            .save()
            .then(function (ans) {
              return res.json({message: "User is created successfully", data: {id: ans.get('id')} });
            })
            .catch(function (err) {
              return res.status(400).json({error: true, data: {message: err.message}});
            }); 
          };


//Update a detail
update_information(req,res) {
personal.forge({id:req.query.id})
    .fetch({require: true})
    .then(function (personal) {
      personal.save({
        user_name: req.body.user_name|| personal.get('user_name:'),
        user_email:req.body.user_email|| personal.get('user_email'),
        status:req.body.status|| personal.get('status')
        
        
      })
      .then(function () {
        return res.json({error: false, data: {message: 'User details updated successfully'}});
      })
      .catch(function (err) {
        return res.status(400).json({error: true, data: {message: err.message}});
      });
    })
    .catch(function (err) {
     return res.status(400).json({error: true, data: {message: err.message}});
    });
  
}

 }




 module.exports=exports=new person();