import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Marker ikonunu ayarlama (Leaflet'in varsayılan ikonu kayboluyor)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

// Adresi koordina olarak ayarlama
const position = [36.892471, 30.69932]; // Kızılsaray Mah. 78 Sk. Yener Ulusoy Bulv. Nazlı Apt. No:23 K:2/6 Muratpaşa/ANTALYA

const MapComponent = () => {
  const openGoogleMaps = () => {
    const address = encodeURIComponent(
      "Kızılsaray Mah. 78 Sk. Yener Ulusoy Bulv. Nazlı Apt. No:23 K:2/6 Muratpaşa/ANTALYA"
    );
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${address}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Kızılsaray Mah. 78 Sk. Yener Ulusoy Bulv. Nazlı Apt. No:23 K:2/6
            Muratpaşa/ANTALYA
          </Popup>
        </Marker>
      </MapContainer>
      <button
        onClick={openGoogleMaps}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          width: "50%",
        }}
      >
        Google Mapste Göster
      </button>
    </div>
  );
};

export default MapComponent;
