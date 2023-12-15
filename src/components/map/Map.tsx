import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.css';

import 'leaflet/dist/leaflet.css';

function Map() {
  const [positions, setPosition] = useState<[number, number][]>([
    [51.505, -0.09],
  ]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((body) => {
        const positions = body.map((user: any) => [
          user.address.geo.lat,
          user.address.geo.lng,
        ]);
        setPosition(positions);
      });
  }, []);

  // ! Important: the map is out of the coordinates that you need, so please scroll down to see the map
  return (
    <div className={styles.map}>
      <MapContainer
        center={positions[0]}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.mapSize}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {positions.map((position, index) => (
          <Marker position={position} key={index}>
            <Popup>Marca de usuarios</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
