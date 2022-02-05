import { ActionTypes } from "../Action/actionType";

export const HeaderReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.HEADER_VALUE:
      return {
        payload,
      };
    default:
      return state;
  }
};
