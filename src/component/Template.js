import React, { useMemo } from "react";

import notFound from "../assets/images/not-found.gif";
import "./Template.css";
let PAGESIZE = 13;
export const Template = ({
  filteredTemplates,
  selectors,
  value,
  currentPage,
}) => {
  const meoised = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGESIZE;
    const lastPageIndex = firstPageIndex + PAGESIZE;
    return [firstPageIndex, lastPageIndex];
  }, [currentPage]);

  return (
    <>
      {filteredTemplates.length > 0 ? (
        filteredTemplates
          .slice(meoised[0], meoised[1])
          .map((selector, index) => {
            return (
              <div key={index}>
                <div className="white-card">
                  <div className="white-card-body">
                    <h3>{selector.name}</h3>
                    <p>{selector.description}</p>
                  </div>
                  <p className="template-link">
                    <a href={selector.link}>Use Template</a>
                  </p>
                </div>
              </div>
            );
          })
      ) : !value ? (
        selectors.slice(meoised[0], meoised[1]).map((selector, index) => {
          return (
            <div key={index}>
              <div className="white-card">
                <div className="white-card-body">
                  <h3>{selector.name}</h3>
                  <p>{selector.description}</p>
                </div>
              </div>
              <p className="template-link">
                <a href={selector.link}>Use Template</a>
              </p>
            </div>
          );
        })
      ) : (
        <div>
          <div className="no-records">
            <img src={notFound} alt={notFound} />
          </div>{" "}
        </div>
      )}
    </>
  );
};
