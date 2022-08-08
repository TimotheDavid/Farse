const data = require('./plan_canicule_2021.json');
const fs = require('fs');

let type = [
  'toilette_publique',
  'point_eau_temporaire',
  'fontaine',
  'ilot_fraicheur',
];

let dataPoint = [];

for(let point of data) {
  // if(!type.includes(point.fields.type)) {
  //   type.push(point.fields.type);
  // }

  if(type.includes(point.fields.type)) {
    dataPoint.push(point)


  }

}



fs.writeFileSync("./data_eau_2022.json", JSON.stringify(dataPoint,null, 2));


