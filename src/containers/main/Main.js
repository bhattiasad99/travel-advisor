import React from "react";
import Select from "../../components/ui/Select";
import Map from "./Map";

const Main = (props) => {
  return (
    <main>
      <Map
        coordinates={props.coordinates}
        setCoordinates={props.setBounds}
        setBounds={props.setBounds}
      />
    </main>
  );
};

export default Main;
