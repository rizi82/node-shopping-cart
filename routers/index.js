var express = require('express');
var router = express.Router();
var Product = require('../models/product');


/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, doc){
   var prodData = [];
   var dataReq  = 3;
    for ( var i = 0; i < doc.length; i += dataReq){
       prodData.push(doc.slice(i, i + dataReq));
    }
   res.render('shop/index', { title: 'Shopping Cart', products: prodData });
  });

});

module.exports = router;
