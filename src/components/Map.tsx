import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

export const Map = (): JSX.Element => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading ...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 50.779729, lng: 6.100367 }}
      mapContainerClassName="w-[100%] h-[200px]"
      options={{ disableDefaultUI: true }}
    >
      <MarkerF position={{ lat: 50.779729, lng: 6.100367 }} />
    </GoogleMap>
  );
};
