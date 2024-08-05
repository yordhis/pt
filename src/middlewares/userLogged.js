const userLogged = (req, res, next) => {

    console.log(req.session.email);

    if(!req.session.email){
        return res.status(401).render('index', { message: "Usuario no logeado" })
    }

    return next()
}

module.exports = userLogged