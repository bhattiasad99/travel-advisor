import React from "react";
import Select from "../../components/ui/Select";
import { types, ratings } from "./options";

import { useSelector, useDispatch } from "react-redux";
import { userSelectionActions } from "../../store/user_selection";

const SidebarOptions = ({ getOptions }) => {
  const dispatch = useDispatch();
  const userSelection = useSelector((state) => state.userSelection);
  const selectedType = (e) => {
    console.log(e, "in options");
    console.log(userSelectionActions);
    dispatch(userSelectionActions.updateType({ type: e }));
  };
  const selectedRating = (e) => {
    console.log(e, "in options");
    dispatch(userSelectionActions.updateRating({ type: e }));
  };

  return (
    <React.Fragment>
      <Select
        options={types}
        // getSelectedOption={selectedType}
        selectedOption={userSelection.type}
        setSelectedOption={selectedType}
      />
      <Select
        options={ratings}
        // getSelectedOption={selectedRating}
        selectedOption={userSelection.rating}
        setSelectedOption={selectedRating}
      />
    </React.Fragment>
  );
};

export default SidebarOptions;
