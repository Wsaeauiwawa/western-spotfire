import React from "react";

const Pie = () => {
  return (
    <div
      style={{
        // display:'flex',
        justifyContent: "center",
        alignItems: "stretch",
        height: "90vh",
        marginTop: "1em",
        marginLeft: "25em",
      }}
    >
      <h1 style={{ marginLeft: "11em" }}>Pie Chart</h1>
      <iframe
        title="Pie Chart"
        src="https://eu.spotfire-next.cloud.tibco.com/spotfire/wp/Embed?file=/Users/bhq65mlh74ouv3u54vg7bi7mouxdm2ca/pie%20Car%20data%20set%20for%20Spotfire%20examples%20-%20Sheet1&configurationBlock=SetPage%28pageIndex%3D0%29%3B&options=7-0,9-0,10-0,11-0,12-0,13-0,14-0,1-0,2-0,3-0,4-0,5-0,6-0,15-0,17-0"
        width="800"
        height="600"
      ></iframe>
      <p style={{ color: "#838B83", marginLeft: "15em", marginTop: "1em" }}>
        The pie chart deals with sum(fuel) per type of car.
      </p>
    </div>
  );
};

export default Pie;
