
let data = data_eau; 
let point = point_data;



var map = L.map('map').setView([48.5833, 7.75], 13);

var  AppMap = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});




AppMap.addTo(map);
// création du layer 
var Layer = new L.LayerGroup();
// ajout du layer au marker 
map.addLayer(Layer);


// marker => layer => map 
// control search layer 


const typePoint = [
    {
        name: 'toilette_publique',
        icon: wc,
        def: 'toilette publique' 
    },
    {
        name: 'point_eau_temporaire',
        icon: fountain,
        def: 'point d\'eau temporaire'    
    },
    {
        name: 'fontaine',
        icon: fountain,    
        def: 'fontaine'
    },
    {
        name: 'ilot_fraicheur',
        icon: oasis,  
        def: 'ilot de fraicheur' 
    }
  ]



for(let i = 0; i<data.length; i++){
    let latitude = data[i].geometry.coordinates[0];
    let longitude = data[i].geometry.coordinates[1];
    let nom = data[i].fields.adresse; 
    let type = data[i].fields.type; 
    let recordId = data[i].recordid;
    
    let filteredType = typePoint.filter(point => point.name == type)[0];

    addPoint(filteredType.icon, latitude, longitude,filteredType.def, type, filteredType.name, recordId);
}


for(let i = 0; i<point.length; i++){
    let latitude = point[i].geo_points[0];
    let longitude = point[i].geo_points[1]; 
    let nom = point[i].nom; 
    
    marker = new L.marker(new L.latLng([latitude,longitude]),{icon:activity,title:nom, type: 'activity'}); 
    marker.bindPopup(nom).on('click',onclick); 
    Layer.addLayer(marker);

    
}

function addPoint(icon, latitude, longitude, def, type,nom, recordId) {
     // création du marker
     marker = new L.marker(new L.latLng([longitude,latitude]),{icon:icon,title:def, data:recordId, type: 'data'}); 
    
     // attache le marker à un popup 
     marker.bindPopup(def).on('click',onclick);
     // ajout du marker au layer 
     Layer.addLayer(marker);
}

function onclick(e){
    let point = e.target.options.data;
    let nom = e.target.options.title;
    let type = e.target.options.type

    
    let check = searching(point, nom, type);
    output(check);
}





// currentLocation();