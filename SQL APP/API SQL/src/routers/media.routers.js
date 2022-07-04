const {Router} = require ("express");
const router = Router();
const usersCtrl = require("../controller/media.controller")

// medias

router.get("/medias/", usersCtrl.getMedias);

router.get("/medias/?student_id=", usersCtrl.getMedias);

router.get("/apuntadas", usersCtrl.getApuntadas);

router.get("/apuntadas/?student_id=", usersCtrl.getApuntadas);

router.get("/impartidas", usersCtrl.getImpartidas);

router.get("/impartidas/?teacher_id=", usersCtrl.getImpartidas);


module.exports = router;