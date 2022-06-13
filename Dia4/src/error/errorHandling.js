//LO COPIO TAL CUAL ESTA EN EL DIA 4 DE NODE(INIDICADO POR JOSE)

function errorHandling(err, req, res, next)
{
    res.status(500).json({message:err.message})
}
module.exports = errorHandling;