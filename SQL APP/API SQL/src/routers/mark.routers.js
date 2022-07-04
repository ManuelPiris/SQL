const {Router} = require ("express");
const router = Router();
const usersCtrl = require("../controller/mark.controller");

// notas

router.get("/marks", usersCtrl.getMarks);

router.get("/marks/?mark_id=", usersCtrl.getMarks);

router.post("/marks",  usersCtrl.postMarks);

router.put("/marks",  usersCtrl.putMarks);

router.delete("/marks",  usersCtrl.deleteMarks);


module.exports = router;