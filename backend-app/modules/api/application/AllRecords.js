var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var record ={
    title : 'Application',
    statusCode : 200
}
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://orangebus:orangebus@ds161026.mlab.com:61026/orangebus',{useMongoClient:true});


var AllRecordsSchema = new Schema({
    ticket_number: {
        type:String,
        required:true
    },
     coach_name: {
        type:String,
        required:true
    }, 
    customer_name: {
        type:String,
        required:true
    },
    from: {
        type:String, 
        required:true
    },
    to: {
        type:String, 
        required:true
    },
    departure_time : {
        type:String, 
        required:true
    } ,
    coach_time : {
        type:String, 
        required:true
    }, 
    seat_no: {
        type:Number, 
        required:true
    } ,
    fare: {
        type:Number, 
        required:true
    },
    advance: {
        type:Number, 
        required:true
    } ,
    remaining: {
        type:Number, 
        required:true
    },
    phone : {
        type:String, 
        required:true
    },
    cnic : {
        type:String, 
        required:true
    },
    
    date : {
        type:String, 
        required:true
    }
},{collection : 'AllRecords'});

var model = mongoose.model("AllRecords", AllRecordsSchema);

// for seat reservation
record.saveData = function(req,res){

        var postBody = req.body;
        var data = {
            ticket_number: postBody.ticketno,
            coach_name: postBody.coachname,
            customer_name: postBody.customer_name,
            from : postBody.from,
            to : postBody.to,
            departure_time : postBody.departure_time,
            coach_time : postBody.coach_time,
            seat_no :postBody.seat_no,
            fare : postBody.fare  ,
            advance  : postBody.advance,
            remaining : postBody.remaining,
            phone : postBody.phone,
            cnic : postBody.cnic,          
            date : postBody.date
        }
        var addData = new model(data);
        addData.save(function(err,newdata){
            if (err){
                console.log(err)
                res.send({
                statusCode : 505,
                message : "Unable To Save a Data"
            });
            }
            else{
                res.send({
                statusCode : 200,
                message : "Data has been saved",
                newdata : data
            })
            }

        });
    }
    
  //get data for showing all records *
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
                })
            }
        
        });
    }


     
        //cancel Seat
        record.deleteData = function(req,res){
            var postBody = req.params.ticket_number;  
            console.log(postBody);          
            model.findOneAndRemove({ticket_number:postBody},function(err){
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
                        })
                    }
                
                })
            }

          //get data on the basis of name or cnic
  record.getDataBy = function(req,res){
    var postBody = req.body;
    model.find({$and: [{time :'7 am'},{date : '12/1/2018' }] },function(err,newdata){
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
                })
            }
        
        });
    }


module.exports = record;