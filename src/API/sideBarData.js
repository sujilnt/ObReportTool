const data = [
  {
    submenuName: "Report",
    menuItems: [{
      name: "Morrissons Reports",
      url: "/reports"
    }],
    defaultSelectedKeys: ['1'], // default selection of values
    menuItemClickerfunc: "RenderReport",
    icon: "reconciliation"
  },
  {
    submenuName: "DataCheck",
    menuItems: [
      {
        name:"DataCheck",
        url: "/datacheck"
      }],
   // menuItemClickerfunc: RenderReport,
    icon: "audit",
  }
];

const sideBarData  = () => data ;
module.exports.sideBarData = sideBarData();
