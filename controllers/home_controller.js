// module.exports.home=(req,res)=>{
//     return res.end("<h1>Express is up for codeail</h1>")
// }
// to render an html // ejs file!!
module.exports.home = (req, res) => {
  res.cookie('user_id',21);
  return res.render("home", {
    title: "Home",
  });
};


// module.exports.about=(req,res)=>{
//     return res.end("<h1>This is about controller running</h1>")
// }
module.exports.about=(req, res)=> {
  return res.render("../views/about.ejs", {
        title: "About",
      });
};
// module.exports.contactUs=(req,res)=>{
//     return res.end("<h1>This is the contac tus page!!!</h1>")
// }

