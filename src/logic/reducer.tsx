import {
  DONE,
  EMPTY_LIST,
  PENDING,
  REMOVE,
  REMOVE_LAST,
  SUBMIT,
} from "./constants";
import { action } from "./state";

export const reducer = (state: action[], action: action) => {
  switch (action.type) {
    case SUBMIT:
      if (action.message)
        return [
          ...state,
          {
            type: PENDING,
            message: action.message,
            key: new Date().getTime(),
            ident: new Date().getTime(),
          },
        ];
      else return state;
    case REMOVE_LAST:
      return [...state.filter((el, index) => index < state.length - 1)];
    case REMOVE:
      return [...state.filter(el => el.ident !== action.ident)];
    case DONE:
      return [
        ...state.map(el => {
          if (el.ident === action.ident)
            return {
              type: DONE,
              message: el.message,
              key: el.ident,
              ident: el.ident,
            };

          return el;
        }),
      ];
    case EMPTY_LIST:
      return [];
  }
  return [];
};
