const express = require("express")
const cors = require("cors")
const userRouters = require("./routers/user.routers")
const errorHandling = require("./error/errorHandling")
var cons = require('consolidate');
const app = express();

app.use(express.static('front'))
app.engine('html', cons.swig)
app.use('/', express.static(__dirname + 'front'))
app.use('/', express.static(__dirname + 'front'))
app.use('/', express.static(__dirname + 'front'))
app.set('views', './front/views')
app.set('view engine', 'html')
app.set("port",process.env.PORT || 3000)
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(userRouters);
app.use(function(req,res,next){
    res.status(404).json({error:true,
                          codigo:404,
                          mensaje:"Endpoint doesnt found"})
                       
})
app.listen(3000)
app.use(errorHandling);

module.exports = app;