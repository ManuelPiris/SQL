const express = require("express")
const cors = require('cors')
const studentsRouters = require("./routers/student.routers")
const marksRouters = require("./routers/mark.routers")
const mediasRouters = require("./routers/media.routers")
const errorHandling = require("./error/errorHandling")
const app = express();

app.set("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(studentsRouters);
app.use(marksRouters);
app.use(mediasRouters);
app.use(function (req,res,next) 
    {
        res.status(404).json({
            error: true,
            codigo: 404,
            message: "Endpoint can't be found"
        })
    })

app.use(errorHandling)

module.exports= app;