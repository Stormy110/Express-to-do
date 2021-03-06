const requireLogin = (req,res, next) => {
    if(req.session.user) {
        next();
    } else {
        res.redirect("/unauthorized")
    }
};

const logout = (req,res) => {
    console.log("Logging Out");
    req.session.detsroy(()=> {
        res.redirect("/")
    });
}

module.exports = {
    requireLogin,
    logout
};