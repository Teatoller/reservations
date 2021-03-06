import React from "react";
import PropTypes from "prop-types";

const Guest = props => {
  return (
    <ul>
      <li className="responded">
        <span>{props.name}</span>
        <label>
          <input
            type="checkbox"
            checked={props.isConfirmed}
            onChange={props.handleConfirmation}
          />{" "}
          Confirmed
        </label>
        <button>edit</button>
        <button>remove</button>
      </li>
    </ul>
  );
};

Guest.propTypes = {
  guests: PropTypes.array.isRequired,
  handleConfirmation: PropTypes.func.isRequired
};
export default Guest;
