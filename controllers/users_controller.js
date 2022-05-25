const User = require("../models/user");

module.exports.profile = (req, res) => {
  return res.render("users", {
    title: "Users",
  });
};
// user sign in page will load
module.exports.signIn = (req, res) => {
  return res.render("../views/users/user_sign_in.ejs", {
    title: "User SignIn",
  });
};
// user sign up page will load
module.exports.signUp = (req, res) => {
  return res.render("../views/users/user_sign_up.ejs", {
    title: "User SignUp",
  });
};
// module.exports.profile=(req,res)=>{
//     return res.end("<h1>User Profile</h1>");
// }

// get the sign up data from form
module.exports.create = (req, res) => {
  if (req.body.password != req.body.c_password) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log("error in finding user in sign up and return");
      return;
    }
    if (!user) {
      User.create(req.body, (err, user) => {
        if (err) {
          console.log("error in creating user in sign up");
          return;
        }
        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

// to sign in and create session for the user to browseee!!!
module.exports.createSession = (req, res) => {
  // TODO
};
