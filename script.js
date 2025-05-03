// Karte erstellen
var map = L.map('map').setView([51.965, 7.625], 12);  // Startposition (Münster) und Zoom-Level

// OpenStreetMap-Kachel-Layer hinzufügen
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// GeoJSON-Daten laden und anzeigen
fetch('sperrmull_abholung.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map);  // Alle Marker aus der GeoJSON-Datei hinzufügen
    })
    .catch(error => console.error('Fehler beim Laden der GeoJSON-Daten:', error));

// Filter-Dropdown erstellen (z.B. für Abholtermine)
var filterSelect = document.createElement('select');
filterSelect.innerHTML = '<option value="">Alle Termine anzeigen</option>' +
                         '<option value="2025-05-20">20. Mai 2025</option>' +
                         '<option value="2025-06-17">17. Juni 2025</option>'; // Weitere Optionen hier hinzufügen

document.body.appendChild(filterSelect);
