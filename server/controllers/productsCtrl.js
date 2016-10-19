var app = require('../../server');
var db = app.get('db');

module.exports = {
  getAllDenimProducts: function(req, res) {
    db.get_all_denim_products(function(err, products) {
      if (!err) {
        res.status(200).json(products);
      }
      else {
        res.status(402).json(products);
      }
    });
  }
  
};
