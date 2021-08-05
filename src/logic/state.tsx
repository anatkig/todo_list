import React from "react";

export type action = {
  type: string;
  payload: string;
  ident: number;
};

export const initialValue = [] as JSX.Element[];

export const Context = React.createContext({
  appState: [] as JSX.Element[],
  dispatch: {} as React.Dispatch<action>
});
