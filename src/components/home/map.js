import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerImage from "../../images/pinicon.svg"; 
import locationImg1 from "../../images/fincaartpin.png"; 
import locationImg2 from "../../images/fincasaplananova.png"; 
import locationImg3 from "../../images/fincaencantopin.png"; 
import locationImg4 from "../../images/clubnauticoportocristo.png"; 
import locationImg5 from "../../images/lavistamarinapin.png"; 

// Custom icon for markers
const customIcon = new L.Icon({
  iconUrl: markerImage,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

// Locations with correct coordinates
const locations = [
  {
    position: [39.377119795679675, 3.0703722685356425],  // Actualizado (Finca Art)
    title: "Finca Art",
    description: "A stunning retreat in the heart of Mallorca.",
    img: locationImg1,
  },
  {
    position: [39.450222493837934, 3.2388505266890193],  // Actualizado (Finca Sa Plana Nova)
    title: "Finca Sa Plana Nova",
    description: "A peaceful countryside getaway.",
    img: locationImg2,
  },
  {
    position: [39.41438915987933, 3.215693397852413],  // Actualizado (Finca Encanto)
    title: "Finca Encanto",
    description: "Surrounded by nature with breathtaking views.",
    img: locationImg3,
  },
  {
    position: [39.53931275490579, 3.3353669978560667],  // Actualizado (Club Nàutic Portocristo)
    title: "Club Nautico Porto Cristo",
    description: "A famous marina with vibrant nightlife.",
    img: locationImg4,
  },
  {
    position: [39.371648749830904, 3.2216294960025427],  // Coordenadas aproximadas para "LA Vista"*
    title: "La Vista Marina",
    description: "An exclusive beachfront experience.",
    img: locationImg5,
  }
];

const MallorcaMap = () => {
  return (
    <MapContainer center={[39.6, 3.2]} zoom={10} style={{ height: "600px", width: "100%" }}>
      {/* OpenStreetMap Tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Markers with Tooltips */}
      {locations.map((loc, index) => (
        <Marker key={index} position={loc.position} icon={customIcon}>
          <Tooltip direction="top" offset={[0, -20]} opacity={1} interactive>
            <div style={{ textAlign: "center" }}>
              <img src={loc.img} alt={loc.title}  />
              {/* <h4>{loc.title}</h4> */}
              {/* <p style={{ fontSize: "12px", margin: "5px 0" }}>{loc.description}</p> */}
            </div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MallorcaMap;
