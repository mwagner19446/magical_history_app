// var originLoc = new google.maps.LatLng(40.756497,-73.9869042)
// var destinationLoc = new google.maps.LatLng(40.756497,-73.9869042)

// var directionsRequest = {
//   origin: originLoc,
//   destination: destinationLoc,
//   travelMode: google.maps.TravelMode.WALKING ,
//   waypoints: [],
//   optimizeWaypoints: true
// }

// $(document).ready(function(){
 
//   var directionsDisplay;
//   var directionsService = new google.maps.DirectionsService();
//   var map;
//   var chicago = new google.maps.LatLng(41.850033, -87.6500523);

//   function initialize() {
//     directionsDisplay = new google.maps.DirectionsRenderer();
//     // var chicago = new google.maps.LatLng(41.850033, -87.6500523);
//     var mapOptions = {
//       zoom:7,
//       center: chicago
//     }
//     map = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions);
//     directionsDisplay.setMap(map);
//   }

//   function calcRoute() {
//     var start = chicago
//     var end = "Philadelphia, PA"

//     var request = {
//       origin:start,
//       destination:end,
//       waypoints: [
//           {location: "Milwaukee, WI"}, 
//           {location: "Pittsburgh, PA"}
//         ], 
//       travelMode: google.maps.TravelMode.DRIVING
//     };

//     directionsService.route(request, function(result, status) {
//       if (status == google.maps.DirectionsStatus.OK) {
//         directionsDisplay.setDirections(result);
//       }
//     });
  

//   };

//   initialize(); 
//   calcRoute(); 

// })
