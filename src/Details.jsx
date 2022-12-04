import React from "react";
import { useLocation } from "react-router-dom";
import "./css/Details.css";
import { Tags } from "./Tags";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Details = () => {
  const tags = useLocation().state;
  return (
    <>
      <Navbar />
      <div className="details-container">
        {tags.map((tag, index) => {
          console.log(tag);
          console.log(Tags[tag]);
          return (
            <div>
              <h2> {tag} </h2>
              <div className="card">
                <h2 className="trash-bin-title"> {Tags[tag].trash_bin} </h2>
                <img
                  alt="items"
                  src={`${Tags[tag].bin_image}`}
                  className="trash-bin-image"
                />
                <p className="text"> {Tags[tag].fact} </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Details;