import React, { useState } from "react";
import "./ToggleSwitch.css";

interface ToggleSwitchProps {
  label: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    console.log(isChecked)
  };

  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          checked={isChecked}
          onChange={handleToggle}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;