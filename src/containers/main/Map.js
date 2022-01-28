import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  //   const coordinates = { lat: 0, lng: 0 };
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC0W3fXe-lqLq6Z1NHt91F-zKQFjHouOCY" }}
        // defaultCenter={defaultProps.center}
        center={coordinates}
        yesIWantToUseGoogleMapApiInternals={true}
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log("map change", e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
