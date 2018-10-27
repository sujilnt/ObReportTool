const generateToken=()=>{
  const tokenArr=[{
    token: "d30c0da7b52037833454",
    name: "Morrison #1"
  },{
    token:"a7a7ffd7a501995268bf",
    name:"Morrisons #1"
  },{
    token:"40c253f0fdb67860b530",
    name:"Morrisons"
  },{
    token:"a3d31f5dac2ac21e326c",
    name:"Morrisons"
  },{
    token:"bd43541eeff752d5125a",
    name:"Morrisons"
  }];
  return tokenArr[Math.floor(Math.random() * tokenArr.length)];
};
module.exports.generateToken=generateToken();
