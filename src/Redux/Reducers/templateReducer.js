import { ActionTypes } from "../Action/actionType";

const initialState = {
  templates: [],
  defaultTemplate: [],
};

export const templateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TEMPLATE:
      return {
        ...state,
        templates: payload,
        defaultTemplate: payload,
      };

    case ActionTypes.SORT_BY_CATEGORY:
      if (payload === "All") {
        return {
          ...state,
          defaultTemplate: payload,
        };
      } else {
        return {
          ...state,
          templates: state.templates.filter((template) =>
            template.category.includes(payload)
          ),
        };
      }

    case ActionTypes.SORT_BY_ORDERNAME:
      if (payload === "default") {
        return {
          ...state,
          defaultTemplate: payload,
        };
      } else if (payload === "Ascending") {
        return {
          ...state,
          templates: state.templates
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name)),
        };
      } else {
        return {
          ...state,
          templates: state.templates
            .slice()
            .sort((a, b) => b.name.localeCompare(a.name)),
        };
      }
    case ActionTypes.SORT_BY_DATE:
      if (payload === "default") {
        return {
          ...state,
          defaultTemplate: payload,
        };
      } else if (payload === "Ascending") {
        return {
          ...state,
          templates: state.templates
            .slice()
            .sort((a, b) => a.created.localeCompare(b.created)),
        };
      } else {
        return {
          ...state,
          templates: state.templates
            .slice()
            .sort((a, b) => b.created.localeCompare(a.created)),
        };
      }
    default:
      return state;
  }
};
