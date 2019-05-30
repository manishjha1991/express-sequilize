const express = require ( 'express' );
const router = express.Router();
const userController = require("../controllers/userController");
/* GET users listing. */
router.post('/', async function(req, res) {
  const user = await userController.CreateUser(req);
  res.send(user);
});

module.exports = router;



