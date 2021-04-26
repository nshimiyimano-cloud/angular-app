const express=require("express");

const User=require("../model/user.modal")
const bcrypt=require("bcrypt");
const {check,validationResult}=require("express-validator")
const jwt=require("jsonwebtoken");
const authorize=require("../middleware/auth")
const router=express.Router();





//sign-up


router.post("/regist-user",[
  check('username')
            .not()
            .isEmpty()
            .isLength({ min: 3 })
            .withMessage('Name must be atleast 3 characters long'),

        check('email', 'Email is required')
            .not()
            .isEmpty(),

        check('password', 'Password should be between 5 to 8 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 8 })

],
async (req,res,next)=>{

//to get error of express-validator

const errors=validationResult(req);
console.log(req.body);


if(errors.length >0){
  return res.status(422).jsonp(errors.array())
}
else{

bcrypt.hash(req.body.password,10).then(hash=>{


  const user=new User({

    username:req.body.username,
    email:req.body.email,
    password:hash
  })

   user.save().then((response)=>{
res.status(201).json({
  message:"user created successfully",
  result:response
})
  })
  .catch(error=>{
    res.status(500).json({
      error:error

    })
  })
})


} //close else if no express-val errors


})



//sign-in

router.post("/signin",async (req, res, next) => {

  let getUser;



  await User.findOne({
      email: req.body.email
  }).then(user => {
      if (!user) {
          return res.status(401).json({
              message: "Authentication failed"
          });
      }else{

      getUser = user;

      return bcrypt.compare(req.body.password, user.password);
      }
  }).then(response => {
      if (!response) {
          return res.status(401).json({
              message: "Authentication failed"
          });
      }
      else{
      let jwtToken = jwt.sign({
        username:getUser.username,
          email: getUser.email,
          userId: getUser._id
      }, "longer-secret-is-better", {
          expiresIn: "1h"
      });
      res.status(200).json({
          token: jwtToken,
          expiresIn: 3600,
          msg: getUser
      });
    }
  }).catch(err => {
      return res.status(401).json({
          message: "Authentication failed"
      });
  });


//}           //close else block if no validation erros found continue
});

//pagination at packeng to our users

router.get("/",(req,res,next)=>{
let userQuery;
userQuery=User.find();
const pagesize=+req.query.pagesize;
const currentPage=+req.query.page;
if(pagesize &&currentPage){
  console.log(req.query);
  userQuery.skip(pagesize*(currentPage-1))
  .limit(pagesize)
}
userQuery.then(document=>{
res.json({
  message:"user data retrieved successfully",
  user:document
});

})

})




// Get Users
/* router.get('/',authorize,  async (req, res,next) => {

  await User.find((error, response) => {
      if (error) {
          return next(error)
      } else {
          res.status(200).json(response)

      }
  })
})
 */


// Get Single User


router.get('/user-profile/:id', async (req, res, next) => {
  await User.findById(req.params.id, (error, data) => {
      if (error) {
          return next(error);
      } else {
          res.status(200).json({
              msg: data
          })
      }
  })
})




// Update User
router.put('/update-user/:id',async (req, res, next) => {
  console.log(req.query);
    await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User successfully updated!')
        }
    })
})


// Delete User
router.delete('/delete-user/:id',async (req, res, next) => {

    await User.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})












module.exports=router;
