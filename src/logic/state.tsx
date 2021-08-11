import React from "react";

export type action = {
  type: string;
  message: string;
  key: number;
  ident: number;
};

export const initialValue: action[] = [];

export const Context = React.createContext({
  todos: [] as action[],
  dispatch: {} as React.Dispatch<action>,
});
