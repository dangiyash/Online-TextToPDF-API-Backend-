const express = require('express');
const router = express.Router();
const pdfcontrol = require('../controllers/pdfcontrol')

router.post('/generate', pdfcontrol);
router.post('/home', pdfcontrol)
module.exports = router;

