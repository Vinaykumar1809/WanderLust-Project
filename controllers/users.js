const User = require("../models/user.js");

//
module.exports.renderSignupForm = (req,res)=>{
   res.render("./users/signup.ejs");
};

//signup
module.exports.signup  = async(req,res)=>{
    try{
        let {username,email,password} = req.body;
    const newUser = new User({email,username});
 const registeredUser =   await User.register(newUser,password);
 console.log(registeredUser);
 req.login(registeredUser,(err)=>{
   if(err){
    return next(err);
   }
     req.flash("success","user registered successfully!");
 res.redirect("/listings");
 });

}catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
}
    };


//render login
module.exports.renderLoginForm = (req,res)=>{
    res.render("./users/login.ejs");
};

//
module.exports.login  = async (req,res)=>{
  req.flash("success","Welcome back to Wanderlust!")  ;
  let redirectUrl = res.locals.redirectUrl || "/listings"
  res.redirect(redirectUrl);
};

//logout
module.exports.logout = (req,res,next)=>{
  req.logout((err)=>{
    if(err){
       return next(err);
    }
    req.flash("success","you logged out");
    res.redirect("/listings");
  })
};