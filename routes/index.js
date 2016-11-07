var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  


  var img     = req.query.img_title;
  var title   = req.query.campaing_title;

     
  res.render('index', { 
    img       : img,
    url       : '',
    title     : title, 
    descriptionText : '',
    imageUrl  : 'https://www.spinver.com/images/files/banner/'+img,
    
    title2     : 'SPINVER'
  });
});
 




/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'SPINVER', success: req.session.success, errors: req.session.errors });
//   req.session.errors = null;
// });


router.get('/generate', function(req, res, next) {
  res.render('generate');
  
});

router.post('/submit', function(req, res, next) {
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect('/');
});

module.exports = router;
