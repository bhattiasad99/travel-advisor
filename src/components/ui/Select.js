import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Select from "react-select";

const DEFAULT_OPTIONS = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Component({
  sxWidth,
  options,
  // getSelectedOption,
  selectedOption,
  setSelectedOption,
}) {
  // const [selectedOption, setSelectedOption] = useState(null);
  const styles = {
    root: {
      width: sxWidth,
    },
  };
  const changeHandler = (e) => {
    // console.log("inside select comp", e);
    setSelectedOption(e);
    // getSelectedOption(e);
  };
  return (
    <div style={styles.root}>
      <Select
        defaultValue={selectedOption}
        onChange={changeHandler}
        options={options}
        value={selectedOption}
      />
    </div>
  );
}

Component.propTypes = {
  options: PropTypes.any,
  sxWidth: PropTypes.string,
};

Component.defaultProps = {
  sxWidth: "100%",
  options: DEFAULT_OPTIONS,
  getSelectedOption: (e) => console.log("No Prop given", e),
};
