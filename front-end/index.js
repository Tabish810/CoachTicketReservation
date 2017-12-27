const express =require('express') //#include ki tara hoga
const app=express()   //express ka variable/object initialize kiya hai
app.get('/',function(req,res){  //jab app k uper get type ki request ajaye to ye function call hoga * default parameter '/'
console.log('request arrived')
res.send('helloworld')

})

app.listen(3000,function(){    //it is a success function
console.log('my app is running at http://localhost:3000/')
})