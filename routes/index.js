const express = require('express');
const router = express.Router();
// const {dataControllers} = require('../controllers/dataController')
const customerController = require('../controllers/customerController')

// Home page
router.get('/', function (req, res){
    res.send("WORLD!!")
})
// router.get('/', dataControllers)

router.get('/', customerController.homepage);

module.exports = router;
