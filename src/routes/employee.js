const {Router}=require('express');
const { Employee } = require('../model/employee.model');
const router=Router();


router.get('/',async function(req,res){
    try {
       const emp=await Employee.find();
       res.send(emp)
    } catch (error) {
        res.status(500).send('unable to fetch data');
    }
});


router.get('/read-employee/:id',async function(req,res){
    try{
    let emp= await Employee.findById(req.params.id);
    res.send(emp);
    }
    catch(err){
res.status(500).send('internal server error . enable to fetch employee info')
    }
});




router.put('/update-employee/:id',async function(req,res){

    try{

const emp=await Employee.findByIdAndUpdate(req.params.id,{
    $set:req.body
},{new:true,useFindAndModify:true});

res.send(emp);

    }
    catch(er){
res.status(500).send('unable to update employee');
    }


});



router.post('/add-employee',async function(req,res){

const emp=new Employee({
firstName:req.body.firstName,
    lastName:req.body.lastName,
    location:req.body.location,
    age:req.body.age,
    phone:req.body.phone,
    email:req.body.email,
    salary:req.body.salary


});

try {
    const employee=await emp.save();

return res.send(employee);


} catch (error) {
  return res.status(5000).send('unable to save employee');
}



});


router.delete('/delete-employee/:id',async function(req,res){

try {

  await Employee.findByIdAndDelete(req.params.id)
  res.send('employee successfully deleted now')

} catch (error) {
res.status(500).send('internal server error. employee not deleted')
}


})












module.exports=router;
