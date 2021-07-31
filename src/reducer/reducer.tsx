import Todo from "../components/todo/Todo";

export type action = {
  type: string;
  payload: string;
  ident: number;
};

export const reducer = (state: JSX.Element[], action: action) => {
  switch (action.type) {
    case "Add a todo":
      return [
        ...state,
        <Todo
          message={action.payload}
          key={new Date().getTime()}
          ident={new Date().getTime()}
          background="black"
        />
      ];
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
