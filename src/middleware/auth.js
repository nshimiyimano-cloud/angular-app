const jwtoken=require("jsonwebtoken");


module.exports=async (req,res,next)=>{
try {

  let token=req.headers.authorization.split(" ",[1]);

  jwtoken.verify(token,'longer-secret-is-better');

next();
} catch (error) {
res.status(401).json({messagea:"Authentication failed"})
}

}
