import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/layout/Header";
import CustomButton from "../component/common/CustomButton";
import background from "../assets/image/background.jpeg";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="main" style={{ backgroundImage: `url(${background})` }}>
        <div className="overlay d-flex justify-content-center align-items-center">
          <div className="content px-3 py-5 rounded text-center">
            <h1 className="mb-3">404</h1>
            <h3 className="mb-3">Oops! Page Not Found</h3>
            <p className="mb-4">The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <CustomButton title={"Back to Home"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
