const fs = require('fs');
const mongoose = require('mongoose');
const Tags = require('./api/models/tags');

mongoose.connect(
    'mongodb+srv://HackathonFILgroup:3czWIjO9QXPI64tL@toofocuseddb.hwuzyar.mongodb.net/?retryWrites=true&w=majority'
);

//Read json files 
const tags = JSON.parse(fs.readFileSync(`${__dirname}/tags.json`, 'utf-8'));

//Import into DB
const importData = async ()=> {
    try{
        await Tags.create(tags);
        console.log("Data Imported....");
    }catch(err){
        console.log(err);
    }
}

importData();