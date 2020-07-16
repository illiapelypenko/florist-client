import React, { Component } from "react";
import Spinner from "./Spinner";

interface IWithSpinner<T> {
  data: T;
  component: Component;
  func: (data: T) => boolean;
}

const WithSpinner = ({ data, component, func }: IWithSpinner<any>) => {
  return <>{func(data) ? <Spinner /> : component}</>;
};

export default WithSpinner;
