const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/EmployeeDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
useFindAndModify:true
  })
.then(()=>console.log('mongodb successfully connected'))
.catch(()=>console.log('mongoDB db unable to connect'));


const emlpoyeeSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    location:String,
    salary:Number,
    age:Number,
    phone:String,
    email:String
});
const Employee=mongoose.model('employee',emlpoyeeSchema);


module.exports.Employee=Employee;
