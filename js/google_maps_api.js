(function () {
    "use strict";

    //var los_balitos = {lat: 29.4677773, lng: 29.4677773};
    var address = "6446 NW Loop 410, San Antonio, TX 78238, USA";
    var mapOptions = {
        zoom: 20,
        //center: los_balitos
        mapTypeId: 'hybrid'
        // mapTypeId: google.maps.MapsTypeId.HYBRID
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode(
        {"address": address}, locateAddress);

    function locateAddress(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var restaurantLocation = results[0].geometry.location;
            console.log(restaurantLocation.lat());
            console.log(restaurantLocation.lng());
            map.setCenter(restaurantLocation);

            var marker = new google.maps.Marker({
                position: restaurantLocation,
                map: map
            });
            var infowindow = new google.maps.InfoWindow({
                content: "Los Balitos"
            });

            infowindow.open(map, marker);

        } else {
            alert("Geocoding was not successful - STATUS: " + status);
        }
    }

}());