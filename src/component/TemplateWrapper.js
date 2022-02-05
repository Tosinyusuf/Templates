import React, { useEffect, useState } from "react";
import { Body } from "./Body";
import { useDispatch } from "react-redux";
import {
  setTemplate,
  sortByCategory,
  sortByOrdername,
  sortByDate,
  headerValue,
} from "../Redux/Action/action";
import Pagination from "./Pagination";
import searchicon from "../assets/images/search.svg";
import "./TemplateWrapper.css";

import axios from "axios";
function TemplateWrapper() {
  const dispatch = useDispatch();
const [value, setValue] = useState();
const [error, setError] = useState(false);
  const [data] = useState(
    "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
  );
  const [templateData, setTemplateData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTemplate = async () => {
    const response = await axios.get(data).catch((err) => {
        console.log(err);
        setError(true)
    });
        dispatch(setTemplate(response.data));
        setTemplateData(response.data);
    };
    
  useEffect(() => {
    fetchTemplate();
  }, );

  const handleSortOrder = (e) => {
    let value = e.target.value;
    dispatch(sortByOrdername(value));
  };

  const handleSortCategory = (e) => {
    const value = e.target.value;
    dispatch(sortByCategory(value));
    dispatch(headerValue(value));
  };
  const handleSortDate = (e) => {
    const value = e.target.value;
    dispatch(sortByDate(value));
  };
  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="header-filters">
        <form>
          <div className="form-body">
            <input
              type="text"
              className="faq-search "
              onChange={handleSearch}
              placeholder="Search Templates"
            />

            <img className="search" src={searchicon} alt={searchicon} />
          </div>
        </form>
        <div className="select-filters">
          <div>Sort By:</div>

          <div className="sort-item category">
            <div className="float">category</div>
            <select
              name="category"
              className="dropdown"
              onChange={handleSortCategory}
            >
              <option value="All" defaultValue="selected">
                All
              </option>
              <option value="E-commerce">E-commerce</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <div className="sort-item orderby ">
            <span className="float">Order</span>
            <select className="dropdown" onChange={handleSortOrder}>
              <option value="default" defaultValue="selected">
                Default
              </option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
          <div className="sort-item date">
            <span className="float">Date</span>
            <select className="dropdown" onChange={handleSortDate}>
              <option value="default" defaultValue="selected">
                Default
              </option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
        </div>
      </div>
          <Body currentPage={currentPage} value={value} error={error}/>
      <Pagination
        currentPage={currentPage}
        onChange={(num) => setCurrentPage(num)}
        totalCount={templateData.length}
      />
    </div>
  );
}

export default TemplateWrapper;
