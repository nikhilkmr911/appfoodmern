
const mongoose = require('mongoose');
const mongoURI='mongodb://nikhil1234:Bits23ss@ac-hlbix8i-shard-00-00.s1pgyte.mongodb.net:27017,ac-hlbix8i-shard-00-01.s1pgyte.mongodb.net:27017,ac-hlbix8i-shard-00-02.s1pgyte.mongodb.net:27017/foodzo?ssl=true&replicaSet=atlas-grory6-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{ useNewUrlParser:true},async(err,result)=>{
        if(err) console.log("---",err)
        else{ 
            console.log("Connected");
            const fetched_data=await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){
                const fetched_data=await mongoose.connection.db.collection("food_category");
                fetched_data.find({}).toArray(function(err,catdata){
                
                if(err) console.log(err);
                else {
                    global.food_items = data;
                    global.food_category = catdata;
                 }
            })
                // if(err) console.log(err);
                // else {
                //     global.food_items = data;
                // }
            })
         }
    });
}

module.exports=mongoDB;