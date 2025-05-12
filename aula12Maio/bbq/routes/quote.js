var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {

  const resultados = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes');

  res.render('quote', {
      ...resultados.data[0] ,
      layout: false
    }
    );
});

module.exports = router;
