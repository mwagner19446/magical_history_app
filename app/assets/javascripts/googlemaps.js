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
function getWaypoints(){
  x = []
  locations = $("input:checked").parent().text()
  locationsArray = locations.split("|")
  for (var i= 0; i<locationsArray.length; i++ ){
    x.push({
      location: locationsArray[i]
    });
  }
  // locationsArray.forEach(function(z){
  //   x.push({location: z})
  // });
  debugger;   
  return x
}

function calcRoute() {
  var lon = parseFloat($("#tour-longitude").html())
  var lat = parseFloat($("#tour-latitude").html())
  var myLatLng = new google.maps.LatLng(lat,lon)
  var waypts = []

  var locations = $("input:checked").parent().text()
  var locationsArray = locations.split("|")
  locationsArray.forEach(function(z){
    waypts.push({location: z})
  });  

  var request = {
    origin: $("input[name='start']").val() || myLatLng,
    destination: $("input[name='destination']").val() || myLatLng,
    waypoints: waypts, 

    // [
    //     {location: "Gracie Mansion"}, 
    //     {location: "Frick Collection"}, 
    //     {location: "Neue Gallerie"}, 
    //     {location: "John Jay Park"}
    //   ], 

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




