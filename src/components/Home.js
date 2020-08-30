import React from "react";

function Home() {
  return (
    <div
      className="home1"
      style={{
        backgroundImage: `url("https://i.gifer.com/9vjB.gif")`,
        color: "white",
        padding: "10px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center" style={{ padding: "25%" }}>
            <h1>
              <strong>Hello ,नमस्ते !</strong>
            </h1>
            <h3 className="Name" style={{ padding: "10px" }}></h3>
            <p className="h3 text-shadow text-400">
              I grind HTML,CSS and Java script and then weld them with React
              into beautiful and efficient websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
