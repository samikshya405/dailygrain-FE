import React from "react";
import Header from "../../component/layout/Header";
import "./Homepage.css";
import background from "../../assets/image/background.jpeg";
import { Button } from "react-bootstrap";
import CustomButton from "../../component/common/CustomButton";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main" style={{ backgroundImage: `url(${background})` }}>
        <div className="overlay d-flex justify-content-center align-items-center">
          <div
            className="content px-3 py-5
           rounded"
          >
            <h3 className="text-center mb-3">FOOD THAT FITS YOU.</h3>
            <p className="text-center mb-3 ">
              Fresh and delicious meal kits, delivered right to your door Now
              with more choices every week{" "}
            </p>
            <div className="text-center">
              <CustomButton title={"Select Your Plan"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;