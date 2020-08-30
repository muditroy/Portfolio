import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
function Skills() {
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
        <div className="row justify-content-center">
          <h1>
            <strong>TECHNICAL SKILLS</strong>
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div>
              <div>React js</div>
              <div>
                <ProgressBar striped variant="success" now={60} />
              </div>
            </div>
            <div>
              <div>Html & Css</div>
              <div>
                <ProgressBar striped variant="info" now={70} />
              </div>
            </div>
            <div>
              <div>bootstrap</div>
              <div>
                <ProgressBar striped variant="warning" now={60} />
              </div>
            </div>
            <div>
              <div>Java script</div>
              <div>
                <ProgressBar striped variant="danger" now={50} />
              </div>
            </div>
            <div>
              <div>Coding</div>
              <div>
                <ProgressBar striped variant="success" now={60} />
              </div>
            </div>
            <div>
              <div>Data structure</div>
              <div>
                <ProgressBar striped variant="info" now={70} />
              </div>
            </div>
            <div>
              <div>Digital Marketing</div>
              <div>
                <ProgressBar striped variant="warning" now={60} />
              </div>
            </div>
            <div>
              <div>Data Science & Big data anaytics</div>
              <div>
                <ProgressBar striped variant="danger" now={40} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center "
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <h1>
            <strong>Resume</strong>
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 ">
            <div className="card align-self-center">
              <div className="card-head resume"></div>
              <div className="card-body">
                <div class="card-text d-flex justify-content-center">
                  <a
                    role="button"
                    className="btn btn-dark px-5"
                    href="https://drive.google.com/file/d/1o8sItrejqErg-UHjlNSIYzYvAPJpUoKl/view?usp=sharing"
                    id=""
                  >
                    Click Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
