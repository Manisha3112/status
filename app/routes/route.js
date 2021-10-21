const express= require('express');
var pers=require("../services/info/person");
const router = express.Router();
var { Validator, ValidationError } = require('express-json-validator-middleware');
var validator = new Validator({allErrors: true});
var validate = validator.validate;
var ValiSchema=require("./validator/validation");

const knex=require('../utils/database').knex;
const bookshelf=require('bookshelf')(knex);
router.route('/heart')
  .get(function(req,res){
    pers.get_date_time(req,res);
  })
//fetch details

  router.route('/details')
  
  .get(function (req, res) {
    pers. read_information(req,res);
  });

//fetch  detail byID 
  router.route('/detail')
  .get(function (req, res) {
    pers.readById_information(req,res);
  });

//Create detail
 router.route('/create_detail')
.post(function (req, res) {

  pers.create_information(req,res);
 });

 //Update detail
 router.route('/detail')
  .put(function (req, res) {
    pers. update_information(req,res);
  });


  module.exports=router;
  


