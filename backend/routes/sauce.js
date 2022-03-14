const express = require("express");
const router = express.Router();

// Importation du controller sauce
const sauceCtrl = require('../controllers/sauce'); 
// Importation du middleware auth
const auth = require('../middleware/auth');
// Importation du middleware multer-config 
const multer = require('../middleware/multer-config');

router.post("/", auth, multer, sauceCtrl.createSauce);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.post('/:id/like', auth, sauceCtrl.addOneVote);
router.get("/", auth, sauceCtrl.getAllSauce);

// Exportation du router des sauces
module.exports = router;