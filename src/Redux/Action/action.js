import { ActionTypes } from "./actionType";

export const setTemplate = (templates) => {
  return {
    type: ActionTypes.SET_TEMPLATE,
    payload: templates,
  };
};

export const sortByCategory = (category) => {
  return {
    type: ActionTypes.SORT_BY_CATEGORY,
    payload: category,
  };
};
export const sortByOrdername = (order) => {
  return {
    type: ActionTypes.SORT_BY_ORDERNAME,
    payload: order,
  };
};
export const sortByDate = (date) => {
  return {
    type: ActionTypes.SORT_BY_DATE,
    payload: date,
  };
};
export const headerValue = (header) => {
  return {
    type: ActionTypes.HEADER_VALUE,
    payload: header,
  };
};
