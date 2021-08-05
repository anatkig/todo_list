import Todo from "../components/todo/Todo";
import { action } from "./state";

export const reducer = (state: JSX.Element[], action: action) => {
  switch (action.type) {
    case "Submit":
      if (action.payload)
        return [
          ...state,
          <Todo
            message={action.payload}
            key={new Date().getTime()}
            ident={new Date().getTime()}
            background="black"
          />
        ];
      else return state;
    case "Remove last todo":
      return [...state.filter((el, index) => index < state.length - 1)];
    case "Remove":
      return [
        ...state.filter((el: JSX.Element) => el.props.ident !== action.ident)
      ];
    case "Done":
      return [
        ...state.map(el => {
          if (el.props.ident === action.ident)
            return (
              <Todo
                message={el.props.message}
                key={el.props.ident}
                ident={el.props.ident}
                background="green"
              />
            );

          return el;
        })
      ];
    case "Empty the list":
      return [];
  }
  return [];
};
