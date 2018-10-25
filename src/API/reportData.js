const reportData=[
  {
    name:"Electricity",
    value:"EACTIVE",
    disable:false
  },{
    name:"Gas",
    value:"GASENERGY",
    disable:false
  },{
    name:"Water",
    value: "Water",
    disable:true
  },
  {
    name:"OutDoorTemperature",
    value:"outDoorTemperature",
    disable:true
  }
];

const reportDataFunc=() => reportData;

module.exports={
  reports: reportDataFunc(),

};
