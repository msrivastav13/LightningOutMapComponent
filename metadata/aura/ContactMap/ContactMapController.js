({
    jsLoaded: function(component, event, helper) {
        setTimeout(function() {
            var map = L.map('map', {zoomControl: false})
                        .setView([37.784173, -122.401557], 14);
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
                {
                    attribution: 'Tiles © Esri'
                }).addTo(map);
            component.set("v.map", map);
        });
    },

    contactsLoaded: function(component, event, helper) {
        // Add markers
        //console.log(L);
        setTimeout(function() {
        console.log(L);
        var map = component.get("v.map");
        var contacts = event.getParam("contacts");
        console.log('EVNT'+contacts.length);
        for (var i=0; i<contacts.length; i++) {
            var contact = contacts[i];
            if(contact.Location__Latitude__s && contact.Location__Longitude__s){
                var latLng = [contact.Location__Latitude__s, contact.Location__Longitude__s];
                console.log(latLng);
                L.marker(latLng, {contact: contact}).addTo(map);
            }
        }
    },3000);
    },

    contactSelected: function(component, event, helper) {
        // Center the map on the contact selected in the list
        var map = component.get("v.map");
        var contact = event.getParam("contact");
        console.log(contact);
        if(contact.Location__Latitude__s){
            map.panTo([contact.Location__Latitude__s, contact.Location__Longitude__s]);
        }
    }

})