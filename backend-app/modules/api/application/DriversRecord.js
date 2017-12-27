var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var record ={
    title : 'Application',
    statusCode : 200
}
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://orangebus:orangebus@ds161026.mlab.com:61026/orangebus',{useMongoClient:true});


var DriversRecordSchema = new Schema({
    
    coach_number: {
        type:String, 
        required:true
    },
    name: {
        type:String,
        required:true
    },
    coach_name: {
        type:String, 
        required:true
    },
    cnic: {
        type:String, 
        required:true
    },
    phone_no: {
        type:String, 
        required:true
    } ,
    address: {
        type:String, 
        required:true
    } 
},{collection : 'DriversRecord'});

var model = mongoose.model("DriversRecord", DriversRecordSchema);


record.saveData = function(req,res){

        var postBody = req.body;
        var data = {
            coach_number : postBody.coach_number,
            name: postBody.name,
            coach_name : postBody.coach_name,
            cnic : postBody.cnic,
            phone_no : postBody.phone_no,
            address : postBody.address   
        }
        var addData = new model(data);
        addData.save(function(err,newdata){
            if (err){
                res.send({
                statusCode : 505,
                message : "Unable To Save a Data"
            });
            }
            else{
                res.send({
                statusCode : 200,
                message : "Data has been saved",
                data : newdata
            })
            }

        });
    }
        //get All Drivers Record 
        record.getData = function(req,res){
        model.find({},function(err,newdata){
                if (err){
                    res.send({
                        statusCode : 505,
                        message : "Some thing went wrong"
                       });
                    }
                  else{
                    res.send({
                      statusCode : 200,
                       message : "Data has been displayed",
                       data:newdata 
                    });
                }
            
            });
        }

        //delete data
        record.deleteData = function(req,res){
            var postBody = req.params.id;
            model.findByIdAndRemove(postBody,function(err,newdata){
                    if (err){
                        res.send({
                            statusCode : 505,
                            message : "Some thing went wrong"
                           })
                        }
                      else{
                        res.send({
                          statusCode : 200,
                           message : "Data has been deleted",
                           data:newdata 
                        })
                    }
                
                })
            }


 // update coach
      
 record.updateDriverInfo = function(req,res){
    var postBody = req.params.id;
    model.findByIdAndUpdate(postBody,{
    $set : { 
        coach_number : req.body.coach_number,
        name: req.body.name,
        coach_name : req.body.coach_name,
        cnic : req.body.cnic,
        phone_no : req.body.phone_no,
        address : req.body.address
            } 
    },function(err,newdata){
            if (err){
                console.log("Error")
                res.send({
                    statusCode : 505,
                    message : "Some thing went wrong"
                   })
                }
              else{
                res.json({
                statusCode : 200,
                message : "Data has been updated",  
                data: newdata 
                })
            }
        })
    }




module.exports = record;