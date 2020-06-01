// Write your Character component here
import React from "react";

const Character = function (props) {
  const randM = props?.char;
  return (
    <div className="cardDiv">
      {randM.map(function (e) {
        return (
          <div>
            <img src={e.image} />
            <h2>[{e.name}]</h2>
            <p>status:[{e.status}]</p>
            <p>origin:</p>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
