import React from "react";
import BarLoader from "react-spinners/BarLoader";

export const Loading = () => {
  return (
    <div className="loading" style={{ height: "38.72vh" }}>
      <BarLoader
        color={"#dddddd"}
        loading={true}
        size={50}
        css={{
          display: "block",
          backgroundColor: "black",
          margin: "37.5vh auto",
        }}
      />
    </div>
  );
};
