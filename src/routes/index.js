const router = require('express').Router();


router.route('/estoyvivo').get((req, res) => {
    res.send({ "status" : "si estoy vivo" });
  })

module.exports = router;