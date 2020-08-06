
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



for(let i = 0; i<data.length; i++){
    let latitude = data[i].geometry.coordinates[0];
    let longitude = data[i].geometry.coordinates[1];
    let nom = data[i].fields.localisation; 
    let type = data[i].fields.type; 

    if(type == 'Point d\'eau temporaire'){
        // création du marker
        marker = new L.marker(new L.latLng([longitude,latitude]),{icon:free_water,title:nom}); 
        // attache le marker à un popup 
        marker.bindPopup(type).on('click',onclick);
        // ajout du marker au layer 
        Layer.addLayer(marker);
    }

    if(type == 'Fontaine'){
        // création du marker
        marker = new L.marker(new L.latLng([longitude,latitude]),{icon:fountain,title:nom}); 
        // attache le marker à un popup 
        marker.bindPopup(type).on('click',onclick);
        // ajout du marker au layer 
        Layer.addLayer(marker);
    }

    if(type == 'Toilettes publiques'){
        // création du marker
        marker = new L.marker(new L.latLng([longitude,latitude]),{icon:wc,title:nom}); 
        // attache le marker à un popup 
        marker.bindPopup(type).on('click',onclick);
        // ajout du marker au layer 
        Layer.addLayer(marker);
    }

}


for(let i = 0; i<point.length; i++){
    let latitude = point[i].geo_points[0];
    let longitude = point[i].geo_points[1]; 
    let nom = point[i].nom; 
    
    marker = new L.marker(new L.latLng([latitude,longitude]),{icon:activity,title:nom}); 
    marker.bindPopup(nom).on('click',onclick); 
    Layer.addLayer(marker);

    
}

function onclick(e){
    let point = e.target.options.title;
    let check = searching(point);
    output(check);
}
