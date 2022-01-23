import React, { useState } from "react";
import BasicDropdown from "../../Dropdowns/BasicDropdown/BasicDropdown";
import { RootState } from "../../../Store/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../../Store/redux/slices/locationSlice";

export interface ILocationSwitcherProps {}

export default function LocationSwitcher(props: ILocationSwitcherProps) {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cities = [{ description: "Montreal" }, { description: "Toronto" }];

  const selectedCity = useSelector(
    (state: RootState) => state.location.location,
  );

  const selectLocation = (newlySelectedCity: any) => {
    dispatch(setLocation(newlySelectedCity));
  };

  return (
    <div
      className="location-switcher"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="location-switcher__title">Select city</div>
      <div className="location-switcher__selected-city">{selectedCity}</div>
      <BasicDropdown
        // width={"5rem"}
        list={cities}
        isListOpen={isDropdownOpen}
        onSelect={city => selectLocation(city)}
      />
    </div>
  );
}
