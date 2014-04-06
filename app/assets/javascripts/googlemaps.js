$(document).ready(function() {

  var myLatLng = new google.maps.LatLng(40.756497,-73.9869042)
  
  function initialize(){
    var mapOptions = {
      center: myLatLng,
      zoom: 16
    }; 
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    var marker = new google.maps.Marker({
      position: myLatLng,
      title: ""
    }); 
    marker.setMap(map);
  } 
  initialize(); 

  google.maps.event.addDomListener(window, 'load', initialize); 
}); 