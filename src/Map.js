import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const position = [48.8566, 2.3522]; // Coordonnées de Paris
  return (
    <LeafletMap center={position} zoom={13} style={{ width: '600px', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Paris, France
        </Popup>
      </Marker>
    </LeafletMap>
  );
};

export default Map;
