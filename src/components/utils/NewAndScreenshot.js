import React from "react";
import New from "./New"; // Import the New component
import Screenshot from "./Screenshot"; // Import the Screenshot component

const SideBySideComponents = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Screenshot />
      </div>
      <div className="ml-3  flex-1">
        <New />
      </div>
    </div>
  );
};

export default SideBySideComponents;
