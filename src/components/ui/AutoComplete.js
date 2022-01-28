import PropTypes from "prop-types";
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const DEFAULT_SUGGESTIONS = [
  {
    name: "first",
    value: "first",
  },
  {
    name: "second name",
    value: "second",
  },
  {
    name: "third name",
    value: "third",
  },
  {
    name: "fourth",
    value: "fourth",
  },
  {
    name: "fifth",
    value: "fifth",
  },
  {
    name: "deoband madrassah",
    value: "sixth",
  },
];

function AutoComplete({ data, placeholder }) {
  // const handleOnSearch = (string, results) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   console.log(string, results);
  // };

  // const handleOnHover = (result) => {
  //   // the item hovered
  //   console.log(result);
  // };

  // const handleOnSelect = (item) => {
  //   // the item selected
  //   console.log(item);
  // };

  // const handleOnFocus = () => {
  //   console.log("Focused");
  // };

  const formatResult = (item) => {
    return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };

  return (
    <div className="AutoComplete">
      <header className="AutoComplete-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            placeholder={placeholder}
            items={data}
            // onSearch={handleOnSearch}
            // onHover={handleOnHover}
            // onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  );
}

AutoComplete.propTypes = {
  data: PropTypes.any,
  placeholder: PropTypes.any,
};

AutoComplete.defaultProps = {
  data: DEFAULT_SUGGESTIONS,
  placeholder: "Search...",
};

export default AutoComplete;
