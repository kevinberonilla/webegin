/* ----------------------------------------
Google Maps API
---------------------------------------- */
var map,
chicago = new google.maps.LatLng(41.8337329, -87.7321554);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {
    var styleOptions = [
        // Insert JSON styles here
    ];
    
    var mapOptions = {
        zoom: 12,
        center: chicago,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
    };
    
    if (document.getElementById('map-canvas') != null) {
        var styledMapOptions = { name: 'Custom Style' },
        customMapType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
        
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);