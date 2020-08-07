function searching(lieux){
    for(let i =0 ; i<data.length; i++){
        if(lieux == data[i].fields.localisation){
            return data[i];
        }
        
    }

    for(let i = 0; i<point.length; i++){
        if(lieux == point[i].nom){
            return point[i];
        }
    }
}

function output(object){

    if(object.datasetid == "plan_canicule"){
         document.getElementById('nom').innerHTML = object.fields.localisation; 
         document.getElementById('link').innerHTML = '<p id="sub-link" style="color:#005086">'+object.fields.type+'</p>';
    }else{
    document.getElementById('nom').innerHTML = object.nom; 
    document.getElementById('link').innerHTML = '<a  id ="sub-link" target="_blank" style="color:#ff5722" href="' + object.url + '">'+object.nom+'</a>'; 
    }



}

function currentLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let marker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(map);
            marker.bindPopup("vous êtes ici").openPopup();
        })
    }else{
        alert("activez la géolocalisation pour vous retrouvez");
    }
}

