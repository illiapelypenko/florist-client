import React from "react";
import Spinner from "./Spinner";

interface IWithSpinner<T> {
  data: T;
  Component: (data: any) => JSX.Element;
  renderComponentIf: (data: T) => boolean;
}

const WithSpinner = ({
  data,
  Component,
  renderComponentIf,
}: IWithSpinner<any>) => {
  return renderComponentIf(data) ? <Component data={data} /> : <Spinner />;
};

export default WithSpinner;
