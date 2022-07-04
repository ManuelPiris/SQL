const {Router} = require ("express");
const router = Router();
const usersCtrl = require("../controller/student.controller");

// alumnos

router.get("/students", usersCtrl.getStudents);

router.get("/students/?student_id=", usersCtrl.getStudents);

router.post("/students", usersCtrl.postStudents);

router.put("/students", usersCtrl.putStudents);

router.delete("/students", usersCtrl.deleteStudents);

module.exports = router;