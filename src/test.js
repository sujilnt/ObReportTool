const  getAlllocations =require("./Data/getAlllocations");
const {createJson}= require("./utils/createJson");
const data = [
  "Edgbaston",
  "Welwyn",
  "West Kirby",
  "Leeds Rothwell Jailhouse Yard",
  "Faversham",
  "Bromsgrove Buntsford Ind Pk",
  "Sidcup Westwood Lane",
  "Gravesend Coldharbour Rd 1",
  "Maidstone Sutton Rd",
  "Strood",
  "Sutton Cheam Road",
  "Herne Bay Beach Street",
  "Margate",
  "Canterbury Ten Perch Rd",
  "London Peckham",
  "Mansfield Sutton Road",
  "London Wood Green",
  "Downham Market",
  "Wisbech",
  "London Holloway",
  "London Stratford",
  "London Wimbledon",
  "Camberwell Green",
  "Felixstowe Cavendish Pk Est",
  "Hadleigh (Suffolk)",
  "St Albans Hatfield Rd",
  "Oxted Station Yard",
  "Clacton Waterglade",
  "Harwich Iconfield Pk",
  "Corringham",
  "Becontree Heath",
  "Chatham Princes Avenue",
  "Larkfield Maidstone",
  "Royston",
  "Fakenham Clipbush Lane",
  "London Stamford Hill",
  "Seaford Dane Rd",
  "London Palmers Green",
  "Witham Braintree Rd",
  "Norwich Catton",
  "Gorleston Blackwell Road",
  "Loughton High Rd",
  "Southend Eastwood Western Approaches",
  "London Petts Wood",
  "Caterham Church Walk",
  "Welling",
  "London Erith",
  "London Acton",
  "Hadleigh (London Road)",
  "Winsford Wharton",
  "Grays London Road",
  "Shefford",
  "Chapel en le Frith Market St",
  "Verwood - Verwood Centre",
  "High Wycombe Temple End",
  "Diss Victoria Rd",
  "Ipswich Sproughton Road",
  "Blandford Forum West Street",
  "Clacton Centenary Way",
  "Dover",
  "Bognor Regis Bedford St",
  "Milton Keynes Westcroft",
  "Lowestoft Tower Rd",
  "Northampton Victoria Promenade",
  "Shrewsbury Whitchurch Road",
  "Castle Bromwich Hurst Lane",
  "Holbrook",
  "Coventry",
  "Northampton Kettering Road",
  "Evesham Four Pool Estate",
  "Devizes Estcourt St",
  "Westbury",
  "Banbury Swan Close",
  "Welshpool Berriew St",
  "Newport (Gwent) Rogerstone",
  "Leeds Morley",
  "Wellingborough Oxford Street",
  "Corby Snatch Hill",
  "London Southwark",
  "Leeds Horsforth",
  "Berwick UT North Rd",
  "Walsall Lichfield St",
  "Edinburgh Portobello Rd",
  "Bracknell The Peel Centre",
  "London - Harrow - Hatch End",
  "Ross on Wye Station St",
  "Edinburgh Ferry Rd",
  "Wokingham Woosehill",
  "Edinburgh Moredun",
  "Livingston Almondvale Road",
  "Malvern Roman Way",
  "Leeds Hunslet",
  "Willenhall",
  "Aylesbury Station Way",
  "Edinburgh Hunters Tryst",
  "Bath London Rd",
  "Canvey Island Northwick Rd",
  "Bedlington",
  "Tamworth",
  "Yate Station Rd"
];
const gasData=[];
getAlllocations.map((rowName)=>{
  let check = data.filter((row)=>{
    return row=== rowName.name;
  });
  check.length === 1 ? gasData.push(rowName): "";
});
createJson("gasData.json",gasData);

