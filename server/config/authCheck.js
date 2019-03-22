  const ensureIsAuth = (req,res,next)=>{

    if(req.user){
        return next();
    }else{
        req.logout();
        req.session.destroy(function (err) {
            // cannot access session here
        })
        let notification = {
            error: true,
            message: "There is an error !",
            notification: true
        }
        return res.status(400).json({ notification: notification });
    }
}

module.exports ensureIsAuth;