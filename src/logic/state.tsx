import React from "react";

export type action = {
  type: string;
  key: number;
  message: string;
  ident: number;
};

export const initialValue: action[] = [];

export const Context = React.createContext({
  todos: [] as action[],
  dispatch: {} as React.Dispatch<action>,
});
