





$(document).ready(function() {
  var lon = parseFloat($("#tour-longitude").html())
  var lat = parseFloat($("#tour-latitude").html())
  var myLatLng = new google.maps.LatLng(lat,lon)
  function initialize(){
    var mapOptions = {
      center: myLatLng,
      zoom: 15
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