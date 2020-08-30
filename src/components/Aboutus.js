import React from "react";

function About() {
  return (
    <div
      className="home1"
      style={{
        backgroundImage: `url("https://www.futureinspire.in/wp-content/uploads/2018/12/Black-Background-with-Focus-Lights.jpg")`,
        color: "white",
        padding: "10px",
      }}
    >
      <div
        className="container"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="row">
          <div className="col-12 col-md-4 ">
            <div className="card align-self-center">
              <div className="card-head me"></div>
              <div className="card-body">
                <div class="card-text d-flex justify-content-center">
                  <h5 style={{ color: "black" }}>MUDIT ROY</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <h2 style={{ textDecoration: "underline" }} className="text-center">
              <strong>ABOUT ME</strong>
            </h2>
            <p style={{ textAlign: "justify" }}>
              Hello my name is <strong>Mudit roy</strong> i am pursuing bachelor
              of technology in
              <strong>
                computer science from lovely professional University
              </strong>
              .My technical skills are I have learnt programming languages such
              as
              <strong> C, C++, Java, Python</strong> but have a strong hold on
              <strong> c++, </strong>Apart from programming languages I have
              learnt about various technologies such as
              <strong>
                big data,data science digital marketing and web development
              </strong>{" "}
              .I have done my summer internship in
              <strong>
                data science professional certificate by I.B.M. from coursera
              </strong>{" "}
              and right now working on
              <strong>
                full stack web development using react from hong kong University
                in Coursera
              </strong>{" "}
              I have done various certification in various technologies .I love
              to travel and always want to do as many as adventure sports as
              possible.I created my own
              <strong> traveling website using wix</strong> and wrote some of my
              <strong> traveling blog in blogger </strong> . I always want to
              learn new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
