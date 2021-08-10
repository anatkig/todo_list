import { DONE, PENDING } from "./constants";
import { action } from "./state";

export const reducer = (state: action[], action: action) => {
  switch (action.type) {
    case "Submit":
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
    case "remove last todo":
      return [...state.filter((el, index) => index < state.length - 1)];
    case "remove":
      return [...state.filter(el => el.ident !== action.ident)];
    case "done":
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
    case "Empty the list":
      return [];
  }
  return [];
};
