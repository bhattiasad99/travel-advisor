import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./containers/navbar/Navbar";
import Sidebar from "./containers/sidebar/Sidebar";
import Main from "./containers/main/Main";
import { getPlacesData } from "./api/index";
import { restaurantActions } from "./store/restaurant";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({
    // lat: 0,
    // lng: 0,
  });
  const [bounds, setBounds] = useState({
    ne: 0,
    sw: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const coords = { lat: latitude, lng: longitude };
        setCoordinates(coords);
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds.ne, bounds.sw).then((data) => {
      console.log(data);
      dispatch(restaurantActions.updateRestaurants({ restaurants: data }));
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Main
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
      />
    </div>
  );
}

export default App;
