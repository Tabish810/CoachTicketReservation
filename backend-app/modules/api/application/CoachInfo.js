var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var record ={
    title : 'Application',
    statusCode : 200
}
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://orangebus:orangebus@ds161026.mlab.com:61026/orangebus',{useMongoClient:true});


var CoachInfoSchema = new Schema({
    coach_no: {
        type:String,
        required:true
    },
    coach_name: {
        type:String, 
        required:true
    },
    timings: {
        type:String, 
        required:true
    },
    destination_loc: {
        type:String, 
        required:true
    } ,
    fare: {
        type:Number, 
        required:true
    } 
},{collection : 'CoachInfo'});

var model = mongoose.model("CoachInfo", CoachInfoSchema);


record.saveData = function(req,res){

        var postBody = req.body;
        var data = {
            coach_no: postBody.coach_no,
            coach_name : postBody.coach_name,
            timings : postBody.timings,
            destination_loc : postBody.destination_loc,
            fare : postBody.fare  
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
                newdata : data
            })
            }

        });
    }

    // update coach
      
      record.updateCoachInfo = function(req,res){
        var postBody = req.params.id;
        model.findByIdAndUpdate(postBody,{
        $set : { coach_no : req.body.coach_no,
            coach_name : req.body.coach_name,
            timings : req.body.timings,
            destination_loc : req.body.destination_loc,
            fare : req.body.fare
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




     //coach name 
     record.getCoach = function(req,res){
        model.find({},{coach_name:1,_id:false},function(err,newdata){
                if (err){
                    res.send({
                        statusCode : 505,
                        message : "Some thing went wrong"
                       });
                    }
                  else{
                    var data1 = [];
                    if(newdata!==null){
                        size=newdata.length;
                        for(let i=0; i<size; i++)
                        {
                            for(let j=i+1; j<size; j++)
                            {
                                /* If any duplicate found */
                                if(newdata[i].coach_name == newdata[j].coach_name)
                                {
                                    /* Delete the current duplicate element */
                                    for(let k=j; k<size; k++)
                                    {
                                        newdata[k] = newdata[k + 1];
                                    }
                    
                                    /* Decrement size after removing duplicate element */
                                    size--;
                    
                                    /* If shifting of elements occur then don't increment j */
                                    j--;
                                }
                            }
                        }
                  }
                  else{
                      console.log("Data not found")
                  }
                  for(let m=0;m<size;m++){
                      data1[m]=newdata[m];
                  }
                  console.log(data1);
                    res.send({
                      statusCode : 200,
                       message : "Data has been displayed",
                       data:data1 
                    })
                    
                }
            
            });
        }
    //destination location 
    record.getDloc = function(req,res){
        model.find({},{destination_loc:1,_id:false},function(err,newdata){
                if (err){
                    res.send({
                        statusCode : 505,
                        message : "Some thing went wrong"
                       });
                    }
                  else{
                    var data1 = []
                    if(newdata!==null){
                        var size=newdata.length;
                        for(let i=0; i<size; i++)
                        {
                            for(let j=i+1; j<size; j++)
                            {
                                /* If any duplicate found */
                                if(newdata[i].destination_loc == newdata[j].destination_loc)
                                {
                                    /* Delete the current duplicate element */
                                    for(let k=j; k<size; k++)
                                    {
                                        newdata[k] = newdata[k + 1];
                                    }
                    
                                    /* Decrement size after removing duplicate element */
                                    size--;
                    
                                    /* If shifting of elements occur then don't increment j */
                                    j--;
                                }
                            }
                        }
                  }
                  else{
                    console.log("Data not found")
                    }
                    for(let m=0;m<size;m++){
                        data1[m]=newdata[m];
                    }
                    res.send({
                      statusCode : 200,
                       message : "Data has been displayed",
                       data: data1
                    })
                }
            
            });
        }

        //timmings
        record.getTime = function(req,res){
            model.find({},{timings:1,_id:false},function(err,newdata){
                    if (err){
                        res.send({
                            statusCode : 505,
                            message : "Some thing went wrong"
                           });
                        }
                      else{
                          var data1 = [];
                          if(newdata !==null){
                            size=newdata.length;
                            for(let i=0; i<size; i++)
                            {
                                for(let j=i+1; j<size; j++)
                                {
                                    /* If any duplicate found */
                                    if(newdata[i].timings == newdata[j].timings)
                                    {
                                        /* Delete the current duplicate element */
                                        for(let k=j; k<size; k++)
                                        {
                                            newdata[k] = newdata[k + 1];
                                        }
                        
                                        /* Decrement size after removing duplicate element */
                                        size--;
                        
                                        /* If shifting of elements occur then don't increment j */
                                        j--;
                                    }
                                }
                            }
                      }
                      else{
                        console.log("Data not found")
                        }
                        for(let m=0;m<size;m++){
                            data1[m]=newdata[m];
                        }
                        res.send({
                          statusCode : 200,
                           message : "Data has been displayed",
                           data: data1
                        })
                    }
                
                });
            }
  //get data
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

       //delete data
       record.deleteData = function(req,res){
        var postBody = req.params.id;
        model.findByIdAndRemove(postBody,function(err,newdata){
                if (err){
                    console.log("Error")
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

module.exports = record;