var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
var record ={
    title : 'Application',
    statusCode : 200
}
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://orangebus:orangebus@ds161026.mlab.com:61026/orangebus',{useMongoClient:true});


var LoginSchema = new Schema({
    
    user_name: {
        type:String, 
        required:true
        
    },
    password: {
        type:String,
        required:true
    } 
},{collection : 'Login'});
var model = mongoose.model("Login", LoginSchema);

record.getLogin = function (req, res) {
      var postBody = req.body;
      //var check = false;
      //var loginUser = null;
      model.find({user_name: postBody.user_name,password: postBody.password},function (err, data) {
        if (err) {
          console.log(err)
        } else if(data.length==0) {
          //checking data from database
        //  console.log(data);
        //   for (let i = 0; i < data.length; i++) {
        //     if (data[i].user_name == postBody.user_name && data[i].password == postBody.password) {
        //       check = true;
        //       const user  = {id:3};
        //       const token = jwt.sign({user},'my_secret_key');
        //       loginUser = data[i];
        //       break;
        //     }
        //   }
        //   if (check) {
        //     res.send({
        //         statusCode : 200,
        //          message : "Login Successfully",
        //          data:loginUser,
        //          success : true,
        //          token : token
        //       })
  
        //   } else {
        //     res.send({
        //         statusCode : 404,
        //          message : "Email or Password is Invalid"
        //       })
        //   }
        res.send({
                    statusCode : 404,
                     message : "Email or Password is Invalid"
                  });
        }
        else{
            const user  = {id:3};
            const token = jwt.sign({user},'my_secret_key');
            res.send({
                        statusCode : 200,
                         message : "Login Successfully",
                         data:{user_name:postBody.user_name},
                         success : true,
                         token : token
                      })
        }
      })
     
  
  }

  // update password
  record.passUpdate = function(req,res){
    
            var postBody = req.body;
            var pass = postBody.current_pass;
            var newpass = postBody.new_pass;
            
            
            model.findOneAndUpdate({password:pass},{password:newpass},function(err,data1){
                if (err){
                    res.send({
                    statusCode : 505,
                    message : "Unable To Update password"
                });
                }
                else if(data1!==null){

                    res.send({
                    statusCode : 200,
                    message : "Password has been updated"
                })
                }
                else{
                    res.send({
                        statusCode : 404,
                        message : "User Not Found"
                    })
                }
    
            });
        }
    module.exports = record;