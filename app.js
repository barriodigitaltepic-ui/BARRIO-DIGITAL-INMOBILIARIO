const affiliates = [
  {
    name:"Torrez & Maldonado",
    type:"Inmobiliaria",
    coords:[20.6534,-105.2253],
    link:"inmobiliarias/torrez-maldonado.html"
  },
  {
    name:"Rodrigo Maldonado",
    type:"Asesor independiente",
    coords:[21.5042,-104.8946],
    link:"asesores/rodrigo-maldonado.html"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("affiliate-map");

  if(!mapContainer){
    console.log("No existe affiliate-map");
    return;
  }

  if(typeof L === "undefined"){
    console.log("Leaflet no cargó");
    return;
  }

  const map = L.map("affiliate-map").setView([21.05, -105.05], 8);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:"© OpenStreetMap"
  }).addTo(map);

  affiliates.forEach(item => {
    L.marker(item.coords)
      .addTo(map)
      .bindPopup(`
        <div class="map-popup-title">${item.name}</div>
        <div>${item.type}</div>
        <a class="map-popup-link" href="${item.link}">Ver perfil</a>
      `);
  });

  setTimeout(() => {
    map.invalidateSize();
  }, 500);
});
