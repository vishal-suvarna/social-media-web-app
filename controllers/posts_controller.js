const Post = require("../models/post");
const Comment=require('../models/comments');

module.exports.create = (req, res) => {
  Post.create(
    {
      content: req.body.content,
      user: req.user._id
    },
    (err, post) => {
      if (err) {
        console.log("error in creating the port");
        return;
      }
      return res.redirect("back");
    }
  );
}

// to delete post
module.exports.destroy=(req,res)=>{
  Post.findById(req.params.id,(err,post)=>{
    // .id measns converting the obj id into string in mongo db
    if(post.user == req.user.id){
      post.remove();

      Comment.deleteMany({
        post:req.params.id
      },(err)=>{
        return res.redirect('back');
      })
    }else{
      return res.redirect('back');
    }
  })
}