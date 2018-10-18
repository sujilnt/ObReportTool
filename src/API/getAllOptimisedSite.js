const getAllOptimisedSite= ()=>{
 const prefixname="https://spreadsheets.google.com/feeds/list/";
 const sheetId="1fF5DgLQZ6fcULMbPlgI4PKtsv9kbKYb1pb0oIxXjE1o";
 const postFix="/od6/public/values?alt=json";
 const url=`${prefixname}${sheetId}${postFix}`;
 fetch(url).then((body)=> body.json()).then((data)=>{
   return data;
 }).catch((error)=>{
   console.log(error);
  });
};
module.exports.getAllOptimisedSite=getAllOptimisedSite;
