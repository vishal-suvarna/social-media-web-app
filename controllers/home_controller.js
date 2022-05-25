module.exports.home=(req,res)=>{
    return res.end("<h1>Express is up for codeail</h1>")
}

module.exports.about=(req,res)=>{
    return res.end("<h1>This is about controller running</h1>")
}

module.exports.contactUs=(req,res)=>{
    return res.end("<h1>This is the contac tus page!!!</h1>")
}