import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { useState } from "react";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/theturncoder/cl9e53lfi000t14o0zrtt46ai"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
        width: "100%",
        height: "100%",
      }}
    >
      {searchResults.map(({ lat, long, title }) => (
        <div key={long}>
          <Marker
            longitude={long}
            latitude={lat}
            offsetLeft={-20}
            offsetTop={10}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-red-500 animate-bounce cursor-pointer"
              onClick={() => {
                setSelectedLocation({ lat, long });
              }}
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </Marker>

          {selectedLocation.long === long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={lat}
              longitude={long}
            >
              {title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGl>
  );
};

export default Map;
