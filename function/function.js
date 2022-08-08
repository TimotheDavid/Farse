function searching(recordId, nom,type){

    if(type == 'data') {
        return data.filter(data => data.recordid == recordId)[0];
    }

    if(type == 'activity') {
        return point.filter(point => point.nom == nom)[0];
    }
    // for(let i =0 ; i<data.length; i++){
    //     if(lieux == data[i].fields.localisation){
    //         return data[i];
    //     }
        
    // }

    // for(let i = 0; i<point.length; i++){
    //     if(lieux == point[i].nom){
    //         return point[i];
    //     }
    // }
}

function output(object){
   
    if(object.datasetid == "plan_canicule_2021"){
         document.getElementById('nom').innerHTML = object.fields.adresse; 
         document.getElementById('link').innerHTML = '<p id="sub-link" style="color:#005086">'+  typePoint.filter(point => point.name == object.fields.type)[0].def +'</p>';
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
