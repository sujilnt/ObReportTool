const ObjectsToCsv = require('objects-to-csv');
const value = [{"fromDate":"2018-09-28T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424917,"name":"Aylesbury Station Way","optimisedDate":"2018-09-28","totalConsumption":"11199.24"},{"fromDate":"2018-10-10T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424962,"name":"Ayr Castlehill Rd","optimisedDate":"2018-10-10","totalConsumption":"30507.98"},{"fromDate":"2018-09-21T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424967,"name":"Banbury Swan Close","optimisedDate":"2018-09-21","totalConsumption":"66862.49"},{"fromDate":"2018-10-11T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424928,"name":"Bangor Holyhead Rd","optimisedDate":"2018-10-11","totalConsumption":"18946.73"},{"fromDate":"2018-10-06T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424979,"name":"Barry Heol Ceiniog","optimisedDate":"2018-10-06","totalConsumption":"40450.31"},{"fromDate":"2018-09-28T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425403,"name":"Bath London Rd","optimisedDate":"2018-09-28","totalConsumption":"0.00"},{"fromDate":"2018-08-16T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425393,"name":"Becontree Heath","optimisedDate":"2018-08-16","totalConsumption":"52995.81"},{"fromDate":"2018-09-30T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424969,"name":"Bedlington","optimisedDate":"2018-09-30","totalConsumption":"3126.87"},{"fromDate":"2018-09-24T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424912,"name":"Berwick UT North Rd","optimisedDate":"2018-09-24","totalConsumption":"88120.75"},{"fromDate":"2018-10-12T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424972,"name":"Bideford Kingsley Rd","optimisedDate":"2018-10-12","totalConsumption":"9787.65"},{"fromDate":"2018-09-11T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424939,"name":"Blandford Forum West Street","optimisedDate":"2018-09-11","totalConsumption":"40154.02"},{"fromDate":"2018-10-14T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424956,"name":"Bodmin Priory Rd","optimisedDate":"2018-10-14","totalConsumption":"5468.66"},{"fromDate":"2018-09-13T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424926,"name":"Bognor Regis Bedford St","optimisedDate":"2018-09-13","totalConsumption":"0.00"},{"fromDate":"2018-09-25T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424924,"name":"Bracknell The Peel Centre","optimisedDate":"2018-09-25","totalConsumption":"32536.85"},{"fromDate":"2018-07-24T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424949,"name":"Bromsgrove Buntsford Ind Pk","optimisedDate":"2018-07-24","totalConsumption":"173956.94"},{"fromDate":"2018-10-12T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425397,"name":"Bude Stucley Road","optimisedDate":"2018-10-12","totalConsumption":"0.00"},{"fromDate":"2018-10-02T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424968,"name":"Burntwood High St","optimisedDate":"2018-10-02","totalConsumption":"45557.36"},{"fromDate":"2018-10-04T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424957,"name":"Caernarfon North Rd","optimisedDate":"2018-10-04","totalConsumption":"28895.14"},{"fromDate":"2018-08-10T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425097,"name":"Camberwell Green","optimisedDate":"2018-08-10","totalConsumption":"43101.06"},{"fromDate":"2018-08-01T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424963,"name":"Canterbury Ten Perch Rd","optimisedDate":"2018-08-01","totalConsumption":"59050.25"},{"fromDate":"2018-10-05T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424951,"name":"Cardiff Bay","optimisedDate":"2018-10-05","totalConsumption":"34152.40"},{"fromDate":"2018-09-19T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424936,"name":"Castle Bromwich Hurst Lane","optimisedDate":"2018-09-19","totalConsumption":"83719.79"},{"fromDate":"2018-08-30T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425391,"name":"Caterham Church Walk","optimisedDate":"2018-08-30","totalConsumption":"46702.20"},{"fromDate":"2018-09-07T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424973,"name":"Chapel en le Frith Market St","optimisedDate":"2018-09-07","totalConsumption":"75053.31"},{"fromDate":"2018-08-17T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424921,"name":"Chatham Princes Avenue","optimisedDate":"2018-08-17","totalConsumption":"62986.32"},{"fromDate":"2018-10-08T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424927,"name":"Cheltenham Up Hatherley","optimisedDate":"2018-10-08","totalConsumption":"15358.44"},{"fromDate":"2018-09-12T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425118,"name":"Clacton Centenary Way","optimisedDate":"2018-09-12","totalConsumption":"25999.60"},{"fromDate":"2018-08-15T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424929,"name":"Clacton Waterglade","optimisedDate":"2018-08-15","totalConsumption":"25732.68"},{"fromDate":"2018-10-02T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":424943,"name":"Coalville Whitwick Road","optimisedDate":"2018-10-02","totalConsumption":"78595.64"},{"fromDate":"2018-09-23T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425023,"name":"Corby Snatch Hill","optimisedDate":"2018-09-23","totalConsumption":"37404.02"},{"fromDate":"2018-08-16T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425001,"name":"Corringham","optimisedDate":"2018-08-16","totalConsumption":"25586.58"},{"fromDate":"2018-09-20T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425011,"name":"Devizes Estcourt St","optimisedDate":"2018-09-20","totalConsumption":"52565.38"},{"fromDate":"2018-09-11T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425021,"name":"Diss Victoria Rd","optimisedDate":"2018-09-11","totalConsumption":"116353.66"},{"fromDate":"2018-09-13T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425036,"name":"Dover","optimisedDate":"2018-09-13","totalConsumption":"63016.77"},{"fromDate":"2018-08-08T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425077,"name":"Downham Market","optimisedDate":"2018-08-08","totalConsumption":"25.68"},{"fromDate":"2018-05-31T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425385,"name":"Edgbaston","optimisedDate":"2018-05-31","totalConsumption":"134506.06"},{"fromDate":"2018-09-28T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425010,"name":"Edinburgh Hunters Tryst","optimisedDate":"2018-09-28","totalConsumption":"65708.73"},{"fromDate":"2018-09-26T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425045,"name":"Edinburgh Moredun","optimisedDate":"2018-09-26","totalConsumption":"91757.82"},{"fromDate":"2018-09-25T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425399,"name":"Edinburgh Portobello Rd","optimisedDate":"2018-09-25","totalConsumption":"6540.86"},{"fromDate":"2018-09-20T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425014,"name":"Evesham Four Pool Estate","optimisedDate":"2018-09-20","totalConsumption":"45964.38"},{"fromDate":"2018-08-20T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425038,"name":"Fakenham Clipbush Lane","optimisedDate":"2018-08-20","totalConsumption":"68157.86"},{"fromDate":"2018-07-11T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425020,"name":"Faversham","optimisedDate":"2018-07-11","totalConsumption":"3618.54"},{"fromDate":"2018-08-13T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425013,"name":"Felixstowe Cavendish Pk Est","optimisedDate":"2018-08-13","totalConsumption":"43581.83"},{"fromDate":"2018-10-05T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425002,"name":"Frodsham","optimisedDate":"2018-10-05","totalConsumption":"16425.46"},{"fromDate":"2018-08-28T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425405,"name":"Gorleston Blackwell Road","optimisedDate":"2018-08-28","totalConsumption":"0.00"},{"fromDate":"2018-10-02T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425007,"name":"Gosport Walpole Rd","optimisedDate":"2018-10-02","totalConsumption":"23331.46"},{"fromDate":"2018-10-08T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425026,"name":"Grantham Isaac Newton Centre","optimisedDate":"2018-10-08","totalConsumption":"25783.75"},{"fromDate":"2018-09-05T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425050,"name":"Grays London Road","optimisedDate":"2018-09-05","totalConsumption":"90302.62"},{"fromDate":"2018-08-15T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425119,"name":"Harwich Iconfield Pk","optimisedDate":"2018-08-15","totalConsumption":"52333.20"},{"fromDate":"2018-09-10T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425126,"name":"High Wycombe Temple End","optimisedDate":"2018-09-10","totalConsumption":"38322.92"},{"fromDate":"2018-10-10T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425110,"name":"Hinckley Stoke Rd","optimisedDate":"2018-10-10","totalConsumption":"27291.39"},{"fromDate":"2018-10-10T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425116,"name":"Horndean Lakesmere Rd","optimisedDate":"2018-10-10","totalConsumption":"18338.12"},{"fromDate":"2018-09-11T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425090,"name":"Ipswich Sproughton Road","optimisedDate":"2018-09-11","totalConsumption":"81864.27"},{"fromDate":"2018-10-01T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425133,"name":"Kettering Lower Street","optimisedDate":"2018-10-01","totalConsumption":"52229.04"},{"fromDate":"2018-10-09T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425085,"name":"Kingsbridge","optimisedDate":"2018-10-09","totalConsumption":"5916.87"},{"fromDate":"2018-08-17T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425098,"name":"Larkfield Maidstone","optimisedDate":"2018-08-17","totalConsumption":"65369.95"},{"fromDate":"2018-09-24T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425152,"name":"Leeds Horsforth","optimisedDate":"2018-09-24","totalConsumption":"84783.23"},{"fromDate":"2018-09-27T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425114,"name":"Leeds Hunslet","optimisedDate":"2018-09-27","totalConsumption":"5578.39"},{"fromDate":"2018-09-21T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425100,"name":"Leeds Morley","optimisedDate":"2018-09-21","totalConsumption":"13397.15"},{"fromDate":"2018-07-11T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425151,"name":"Leeds Rothwell Jailhouse Yard","optimisedDate":"2018-07-11","totalConsumption":"328963.46"},{"fromDate":"2018-10-10T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425122,"name":"Leicester Freemans Pk","optimisedDate":"2018-10-10","totalConsumption":"13195.32"},{"fromDate":"2018-09-26T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425416,"name":"Livingston Almondvale Road","optimisedDate":"2018-09-26","totalConsumption":"0.00"},{"fromDate":"2018-09-01T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425414,"name":"London Acton","optimisedDate":"2018-09-01","totalConsumption":"0.00"},{"fromDate":"2018-08-31T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425128,"name":"London Erith","optimisedDate":"2018-08-31","totalConsumption":"83419.50"},{"fromDate":"2018-08-09T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425113,"name":"London Holloway","optimisedDate":"2018-08-09","totalConsumption":"128677.85"},{"fromDate":"2018-08-23T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425409,"name":"London Palmers Green","optimisedDate":"2018-08-23","totalConsumption":"39876.67"},{"fromDate":"2018-08-03T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425410,"name":"London Peckham","optimisedDate":"2018-08-03","totalConsumption":"20196.01"},{"fromDate":"2018-08-30T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425421,"name":"London Petts Wood","optimisedDate":"2018-08-30","totalConsumption":"34102.06"},{"fromDate":"2018-09-24T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425096,"name":"London Southwark","optimisedDate":"2018-09-24","totalConsumption":"10344.70"},{"fromDate":"2018-08-21T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425156,"name":"London Stamford Hill","optimisedDate":"2018-08-21","totalConsumption":"35354.70"},{"fromDate":"2018-08-10T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425136,"name":"London Wimbledon","optimisedDate":"2018-08-10","totalConsumption":"37636.72"},{"fromDate":"2018-08-06T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425095,"name":"London Wood Green","optimisedDate":"2018-08-06","totalConsumption":"69696.99"},{"fromDate":"2018-08-29T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425108,"name":"Loughton High Rd","optimisedDate":"2018-08-29","totalConsumption":"50486.26"},{"fromDate":"2018-09-15T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425115,"name":"Lowestoft Tower Rd","optimisedDate":"2018-09-15","totalConsumption":"54087.34"},{"fromDate":"2018-09-26T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425197,"name":"Malvern Roman Way","optimisedDate":"2018-09-26","totalConsumption":"103112.16"},{"fromDate":"2018-08-06T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425182,"name":"Mansfield Sutton Road","optimisedDate":"2018-08-06","totalConsumption":"120853.87"},{"fromDate":"2018-07-31T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425171,"name":"Margate","optimisedDate":"2018-07-31","totalConsumption":"39893.62"},{"fromDate":"2018-10-09T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425412,"name":"Melton Mowbray Sherrard St","optimisedDate":"2018-10-09","totalConsumption":"16324.33"},{"fromDate":"2018-10-02T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425172,"name":"Nailsworth","optimisedDate":"2018-10-02","totalConsumption":"17066.96"},{"fromDate":"2018-09-21T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425223,"name":"Newport (Gwent) Rogerstone","optimisedDate":"2018-09-21","totalConsumption":"140430.21"},{"fromDate":"2018-09-20T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425201,"name":"Northampton Kettering Road","optimisedDate":"2018-09-20","totalConsumption":"71957.68"},{"fromDate":"2018-09-18T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425210,"name":"Northampton Victoria Promenade","optimisedDate":"2018-09-18","totalConsumption":"97852.17"},{"fromDate":"2018-08-28T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425170,"name":"Norwich Catton","optimisedDate":"2018-08-28","totalConsumption":"30654.24"},{"fromDate":"2018-10-11T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425248,"name":"Nottingham Gamston","optimisedDate":"2018-10-11","totalConsumption":"32040.42"},{"fromDate":"2018-08-14T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425205,"name":"Oxted Station Yard","optimisedDate":"2018-08-14","totalConsumption":"111805.16"},{"fromDate":"2018-10-07T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425202,"name":"Peterborough Lincoln Rd","optimisedDate":"2018-10-07","totalConsumption":"824.70"},{"fromDate":"2018-10-11T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425238,"name":"Portsmouth","optimisedDate":"2018-10-11","totalConsumption":"9955.74"},{"fromDate":"2018-10-05T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425200,"name":"Reading Basingstoke Lane","optimisedDate":"2018-10-05","totalConsumption":"29646.06"},{"fromDate":"2018-09-25T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425231,"name":"Ross on Wye Station St","optimisedDate":"2018-09-25","totalConsumption":"83467.10"},{"fromDate":"2018-08-18T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425243,"name":"Royston","optimisedDate":"2018-08-18","totalConsumption":"45226.83"},{"fromDate":"2018-08-22T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425386,"name":"Seaford Dane Rd","optimisedDate":"2018-08-22","totalConsumption":"37123.88"},{"fromDate":"2018-09-07T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425215,"name":"Shefford","optimisedDate":"2018-09-07","totalConsumption":"19311.03"},{"fromDate":"2018-09-19T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425193,"name":"Shrewsbury Whitchurch Road","optimisedDate":"2018-09-19","totalConsumption":"60692.29"},{"fromDate":"2018-07-26T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425225,"name":"Sidcup Westwood Lane","optimisedDate":"2018-07-26","totalConsumption":"210057.64"},{"fromDate":"2018-08-14T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425308,"name":"St Albans Hatfield Rd","optimisedDate":"2018-08-14","totalConsumption":"88965.64"},{"fromDate":"2018-10-09T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425304,"name":"Stranraer London Rd","optimisedDate":"2018-10-09","totalConsumption":"29172.19"},{"fromDate":"2018-07-28T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425318,"name":"Strood","optimisedDate":"2018-07-28","totalConsumption":"124970.66"},{"fromDate":"2018-07-30T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425422,"name":"Sutton Cheam Road","optimisedDate":"2018-07-30","totalConsumption":"49278.71"},{"fromDate":"2018-10-14T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425274,"name":"Tavistock Plymouth Rd","optimisedDate":"2018-10-14","totalConsumption":"7719.83"},{"fromDate":"2018-10-10T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425286,"name":"Totnes Coronation Rd","optimisedDate":"2018-10-10","totalConsumption":"8958.67"},{"fromDate":"2018-10-11T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425312,"name":"Troon Academy St","optimisedDate":"2018-10-11","totalConsumption":"5417.70"},{"fromDate":"2018-10-09T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425275,"name":"Tynemouth Preston Grange","optimisedDate":"2018-10-09","totalConsumption":"41568.77"},{"fromDate":"2018-09-07T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425327,"name":"Verwood - Verwood Centre","optimisedDate":"2018-09-07","totalConsumption":"93083.28"},{"fromDate":"2018-10-09T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425263,"name":"Wakefield Dewsbury Road","optimisedDate":"2018-10-09","totalConsumption":"45141.61"},{"fromDate":"2018-09-24T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425265,"name":"Walsall Lichfield St","optimisedDate":"2018-09-24","totalConsumption":"51384.66"},{"fromDate":"2018-09-22T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425306,"name":"Wellingborough Oxford Street","optimisedDate":"2018-09-22","totalConsumption":"114235.28"},{"fromDate":"2018-09-21T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425431,"name":"Welshpool Berriew St","optimisedDate":"2018-09-21","totalConsumption":"0.00"},{"fromDate":"2018-09-20T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425296,"name":"Westbury","optimisedDate":"2018-09-20","totalConsumption":"19998.27"},{"fromDate":"2018-06-14T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425281,"name":"West Kirby","optimisedDate":"2018-06-14","totalConsumption":"61699.34"},{"fromDate":"2018-10-01T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425270,"name":"Weymouth Dorchester Rd","optimisedDate":"2018-10-01","totalConsumption":"19993.90"},{"fromDate":"2018-09-27T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425326,"name":"Willenhall","optimisedDate":"2018-09-27","totalConsumption":"58889.48"},{"fromDate":"2018-09-03T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425282,"name":"Winsford Wharton","optimisedDate":"2018-09-03","totalConsumption":"133202.05"},{"fromDate":"2018-08-08T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425329,"name":"Wisbech","optimisedDate":"2018-08-08","totalConsumption":"150183.33"},{"fromDate":"2018-08-24T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425280,"name":"Witham Braintree Rd","optimisedDate":"2018-08-24","totalConsumption":"27377.51"},{"fromDate":"2018-09-25T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425271,"name":"Wokingham Woosehill","optimisedDate":"2018-09-25","totalConsumption":"19001.22"},{"fromDate":"2018-09-28T00%3A00%3A00","toDate":"2018-10-21T00%3A00%3A00","queryType":"GAS","key":425335,"name":"Yate Station Rd","optimisedDate":"2018-09-28","totalConsumption":"21558.57"}];
const csvconverter= async (values)=>{
  const headerColum=  {fromDate: "fromData" , toDate:"toDate",queryType: "queryType" ,key: "key", name: "name" , optimisedDate:"optimisedDate", totalConsumption:"totalConsumption" };
  finalValues = values.unshift(headerColum);
  console.log(finalValues);
  const data = values||[
    {code: 'no data', name: 'test data'},
    {code: 'no data', name: 'test data'},
    {code: 'no data', name: 'test data'},
  ] ;
  console.log("called",values);
  let csv = new ObjectsToCsv(data);
  // Save to file:
  await csv.toDisk('./src/csv/report1.csv');
  // Return the CSV file as string:
  console.log("wriiten to a file",await csv.toString());
};
module.exports.csvconverter=csvconverter;
