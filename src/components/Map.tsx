import { type FC } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

interface MapProps {
  latitude: string;
  longitude: string;
}

export const Map: FC<MapProps> = ({ latitude, longitude }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const location = { lat: Number(latitude), lng: Number(longitude) };

  if (!isLoaded) return <div>Loading ...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={location}
      mapContainerClassName="w-[100%] h-[200px]"
      options={{ disableDefaultUI: true }}
    >
      <MarkerF position={location} />
    </GoogleMap>
  );
};
