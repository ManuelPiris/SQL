const {Router} = require ("express");
const router = Router();
const usersCtrl = require("../controller/user.controller");
// alumnos
usersCtrl.getStart
router.get("/", usersCtrl.getStart);

router.get("/alumnos", usersCtrl.getStudents);

router.get("/alumnos/:id", usersCtrl.getStudentById);

router.post("/alumnos", usersCtrl.saveUserToDatabase);

router.put("/alumnos", usersCtrl.updateUserFromDatabase);

router.delete("/alumnos", usersCtrl.deleteStudentFromDatabase);

// notas
router.get('/notas/:id', usersCtrl.getMarksFromUserId)

router.post('/notas', usersCtrl.saveMarkToUserFromId)

router.put('/notas', usersCtrl.updateMarkFromUserId)

router.delete('/notas', usersCtrl.deleteMarkFromUserId)

// punto-5-6
router.get('/media/:id', usersCtrl.getUserAverageMarksFromId)

router.get('/apuntadas/:id', usersCtrl.getSubjectsFromStudentId)

router.get('/apuntadas', usersCtrl.getSubjectsFromStudents)

router.get('/impartidas/:id', usersCtrl.getTeachersFromId)

router.get('/impartidas/', usersCtrl.getTeachers)

module.exports = router;


