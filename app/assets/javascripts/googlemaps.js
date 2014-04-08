$(".waypoints-header").tooltip(); 


var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var request = {}


function initialize(){
  var lon = parseFloat($("#tour-longitude").html())
  var lat = parseFloat($("#tour-latitude").html())
  var myLatLng = new google.maps.LatLng(lat,lon)
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {    
    center: myLatLng,
    zoom: 15
  }; 

  var map = new google.maps.Map($("#map-canvas")[0],
      mapOptions);
  directionsDisplay.setMap(map);  

}   

//Moving Away from this: 
// function getWaypoints(){
//   x = []
//   locations = $("input:checked").parent().text()
//   locationsArray = locations.split("|")
//   for (var i= 0; i<locationsArray.length; i++ ){
//     x.push({
//       location: locationsArray[i]
//     });
//   }
//   // locationsArray.forEach(function(z){
//   //   x.push({location: z})
//   // });
//   return x
// }

function calcRoute() {
  lon = parseFloat($("#tour-longitude").html())
  lat = parseFloat($("#tour-latitude").html())
  myLatLng = new google.maps.LatLng(lat,lon)
  waypts = []

  // Step 1:  Capture the LongLat
  // Step 2:  Add the Google Longlat Object to the Waypoints hash. 

  locations = $("input:checked").parent().text()
  if(locations != ""){
    locationsArray = locations.split("|")  
    newLocationsArray = $.map(locationsArray, function(v){
      return v.trim() === "" ? null : v.trim(); 
    })

    newLocationsArray.forEach(function(z){
      xlon = z.match(/Longitude:(.*)/)
      xlat = z.match(/Latitude:(.*)/)

      zlon = parseFloat(xlon[1].trim())
      zlat = parseFloat(xlat[1].trim())
      
      zloc = zlat +" , "+zlon
      // parseFloat(xlon.trim())
      waypts.push({location: zloc})
      // waypts.push({location: zlat, zlon})
      // waypts.push({location: z.trim()+ " NYC"})
    });
  }

    
    
  request = {
    origin: $("input[name='start']").val() || myLatLng,
    destination: $("input[name='destination']").val() || myLatLng,
    waypoints: waypts, 




    // [
    //     {location: "Gracie Mansion"}, 
    //     {location: "Frick Collection"}, 
    //     {location: "Neue Gallerie"}, 
    //     {location: "John Jay Park"}
    //   ], 

    // [
    //   {location: new google.maps.LatLng(40.76964,-73.961886)}, 
    //   {location: new google.maps.LatLng(40.7813,-73.9603)}, 
    // ],


    optimizeWaypoints: true,  
    travelMode: google.maps.TravelMode.WALKING 
  };

  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });    
};



$(document).ready(function() {
  initialize();  
  google.maps.event.addDomListener(window, 'load', initialize); 

  $("#start").bind("submit", function(e){
    e.preventDefault(); 
    calcRoute()
  });

  $("#destination").bind("submit", function(e){
    e.preventDefault(); 
    calcRoute()
  });

  $("input[type='checkbox']").bind("click", function(e){
    console.log( "This Works" )
    calcRoute()
  });


}); 




