function tab(){
  $("#tabs").tabs(); 
};

//Renders the Screen Hover Interaction.
function tooltip(){
  $(".waypoints-header").tooltip({
    position: {
      my: "center", 
      at: "bottom", 
      of: "#waypoints"
    },
    show: {
      effect: "slideDown",
      delay: 1
    }, 
  });
};

//Variables that are manipulated by the initialize and calcRoute functions.   
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

//initialize():  Creates and centers the initial map
//var lon and var lat center the map on the geographic center of the neighborhood.  These values are stored in the DB. 
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
  directionsDisplay.setPanel(document.getElementById("directions-panel"));  
}   
window.addEventListener("load",initialize,false)


//calcRoute():  Sends a Directions Request to Google API
//the waypoints are determined each time the function is called using jQuery.  
function calcRoute() {
  var lon = parseFloat($("#tour-longitude").html())
  var lat = parseFloat($("#tour-latitude").html())
  var myLatLng = new google.maps.LatLng(lat,lon)
  var waypts = []

  var locations = $("input:checked").parent().text()
  
  if(locations != ""){
    var locationsArray = locations.split("|")  
    var newLocationsArray = $.map(locationsArray, function(v){
      return v.trim() === "" ? null : v.trim(); 
    })

    newLocationsArray.forEach(function(z){
      var xlon = z.match(/Longitude:(.*)/)
      var xlat = z.match(/Latitude:(.*)/)
      var zlon = parseFloat(xlon[1].trim())
      var zlat = parseFloat(xlat[1].trim())      

      var zloc = zlat +" , "+zlon
      waypts.push({location: zloc})
    });
  }

  request = {
    origin: $("input[name='start']").val() || myLatLng,
    destination: $("input[name='destination']").val() || myLatLng,
    waypoints: waypts, 
    optimizeWaypoints: true,  
    travelMode: google.maps.TravelMode.WALKING 
  };

  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });    
};


//Renders the Tab Structure
$(function(){
  $("#tabs").tabs(); 
});


//Renders the Screen Hover Interaction.
$(function(){
  $(".waypoints-header").tooltip({
    position: {
      my: "center", 
      at: "bottom", 
      of: "#waypoints"
    },
    show: {
      effect: "slideDown",
      delay: 1
    }, 
  });
});



google.maps.event.addDomListener(window, 'load', initialize); 


// Event Listeners that Modify the Screen DOM. 
$(document).ready(function(){
// $(window).load(function(){
  initialize();  

  $("#start").bind("submit", function(e){
    e.preventDefault(); 
    calcRoute()
  });

  $("#destination").bind("submit", function(e){
    e.preventDefault(); 
    calcRoute()
  });

  $("input[type='checkbox']").bind("click", function(e){
    calcRoute()
  });

  $(function(){
      $("#tabs").tabs(); 
    });

  //Renders the Screen Hover Interaction.
  $(function(){
    $(".waypoints-header").tooltip({
      position: {
        my: "center", 
        at: "bottom", 
        of: "#waypoints"
      },
      show: {
        effect: "slideDown",
        delay: 1
      }, 
    });
});


}); 

