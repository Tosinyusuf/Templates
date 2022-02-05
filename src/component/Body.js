import React from "react";
import info from "../assets/images/info.svg";
import { useSelector } from "react-redux";
import { Template } from "./Template";
import Loader from "../assets/images/loading.jpg";
import connection from "../assets/images/connection.png";
import "./Body.css";

export const Body = ({ currentPage, value, error }) => {
  const selectors = useSelector((state) => state.allTemplates.templates);
  const headers = useSelector((state) => state.Headers.payload);
  const filteredTemplates = selectors.filter((selector) => {
    return selector.name?.toLowerCase().indexOf(value?.toLowerCase()) !== -1;
  });

  return (
    <div>
      <div className="warning-section">
        <div className="warning-section-p">
          <p className="warning-tag">
            <span>
              <img src={info} alt={info} />
            </span>
            Tada! Get started with a free template. Can’t find what you are
            looking for? Search from the 1000+ available templates
          </p>
        </div>
      </div>
      <div className="header-category">
        {headers ? `${headers} Templates` : "All Templates"}{" "}
      </div>
      {error ? (
        <div className="poor-connection-wrapper">
          <p >Poor Connection, please retry</p>
          <div className="poor-connection-img">
            <img src={connection} alt={connection} />
          </div>
        </div>
      ) : selectors.length > 0 ? (
        <div className="all-card">
          <Template
            filteredTemplates={filteredTemplates}
            value={value}
            selectors={selectors}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <div className="image-loader">
          <img src={Loader} alt={Loader} />
        </div>
      )}
    </div>
  );
};
