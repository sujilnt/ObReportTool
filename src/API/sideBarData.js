const data = [
  {
    submenuName: "Report",
    menuItems: ["Morrisons"],
    defaultSelectedKeys: ['1'], // default selection of values
    menuItemClickerfunc: "RenderReport",
    icon: "reconciliation"
  },
  {
    submenuName: "DataCheck",
    menuItems: ["Morrisons","SuperDry"],
   // menuItemClickerfunc: RenderReport,
    icon: "audit",
  }
];

const sideBarData  = () => data ;
module.exports.sideBarData=sideBarData();
