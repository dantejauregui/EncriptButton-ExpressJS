var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  var
    img   = 'placeholder2.png';
     
  res.render('index', { 
    img       : img,
    url       : 'https://bot-social-share.herokuapp.com/',
    title     : 'Bot Test', 
    descriptionText : 'This is designed to appeal to bots',
    imageUrl  : 'https://bot-social-share.herokuapp.com/'+img,
    
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
