const express=require('express');
const path=require("path");

const employeeRoute=require('./src/routes/employee')

const users=require("./src/routes/auth.route");
const app=express();
const cors=require('cors')
const bodyParser=require('body-parser')
const jwt=require('jsonwebtoken');
const expressJWT=require('express-jwt')

/*
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
  res.header('Content-Type',"application/json")
  next(); // Important
})
 */
app.use(cors())  //this line its critical if you remove it the update request may not work


                                   // parse application/json
app.use(bodyParser.urlencoded({'extended':'true'}));

app.use(express.json());
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// Static directory path or serve static resources
app.use(express.static(path.join(__dirname, 'study-angular/src')));






//secret for jwt
var secret='some_secret';


//me i see this codes below couse some apis to be unauthorized
/*  app.use(expressJWT({ secret: secret, algorithms: ['HS256']})
    .unless( // This allows access to /token/sign without token authentication
        { path: [
            '/token/sign'
        ]}
    )); */
/* create token to be used */
app.get('/token/sign',function(req,res){

var userData={
"name":"nshimiyimana",
"id":"1234"

}

let token=jwt.sign(userData,secret,{expiresIn:'20s'})

res.status(200).json({"token":token})

//jwt.verify(userData,secret);
})








// upon successful token authentication, access to path1 is granted

app.get('/path1',(req,res)=>{
res.status(200)
.json({
"success":true,
"msg":"Secret Access Granted"

});



});













app.use(express.static(__dirname+'/dist'));

app.use('/api/users/',users);


app.use('/api/employees/',employeeRoute);



//to catch all invalid route ass in firebase we get 404 index.html & here is same like that to rewrites or redirect
app.all('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname+'/dist/index.html'));
}); 
const port=process.env.PORT ||3000;


app.listen(port,()=>console.log(`Mobgodb connected on port ${port} now`))



//express error handlind

app.use((req,res,next)=>{
setImmediate(()=>{
  new Error("some thing went wrong!")
})

app.use((error,req,res,next)=>{
if(!error.statuscode)
 error.statusCode=500;
res.status(statuscode).send(error.message);
})


})

