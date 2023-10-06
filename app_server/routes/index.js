var express = require('express');
var router = express.Router();

const ctrlhomepage = require('../controllers/homepage')
const ctrlLocations = require('../controllers/locations');
const ctrlUserLocation = require('../controllers/UserLoc');
const ctrlSignIn = require('../controllers/SignIn');
const ctrlLabTest = require('../controllers/labTest');

router.get('/', ctrlhomepage.hp);
router.get('/homepage', ctrlhomepage.hp);
router.get('/stores', ctrlLocations.locations);
router.get('/location', ctrlLocations.locationInfo);
router.get('/userLocation', ctrlUserLocation.location);
router.get('/signin/', ctrlSignIn.signIn);
router.get('/labTest/', ctrlLabTest.tests);

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gym' });
});
*/
module.exports = router;
