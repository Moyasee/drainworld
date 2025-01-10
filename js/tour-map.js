function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: { lat: 51.509865, lng: -0.118092 }, // London coordinates
        styles: [
            // Add custom map styles here for a dark theme
            // You can get styles from sites like snazzymaps.com
        ]
    });

    // Add markers for tour locations
    const locations = [
        { lat: 59.3293, lng: 18.0686, title: 'Stockholm Show - Home City' },
        { lat: 51.5074, lng: -0.1278, title: 'London Show - O2 Academy Brixton' },
        { lat: 13.7563, lng: 100.5018, title: 'Bangkok Show - Thaiboy Digital\'s Base' },
        { lat: 52.5200, lng: 13.4050, title: 'Berlin Show - European Tour' }
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });
    });
} 