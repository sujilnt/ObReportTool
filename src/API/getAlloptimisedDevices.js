import {getAllDevices} from "./getAllDevices";
import getAllOptimisedSite from "./getAllOptimisedSite";
console.log(getAllOptimisedSite);
const getAlloptimisedDevices = async ()=>{

  const getAllOptimisedSite= await getAllOptimisedSite();
  console.log(getAllOptimisedSite);

};
export default getAlloptimisedDevices;
