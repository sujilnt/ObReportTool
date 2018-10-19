const fs = require("fs");
const createJson = (filename,data)=>{
  console.log(data);
  const fileName=`./src/Data/${filename}`;
  fs.writeFile(fileName,JSON.stringify(data),(err,d) =>{
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });

};
module.exports.createJson=createJson;
