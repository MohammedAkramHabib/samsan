import * as React from "react";

const SvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <path fill="#fff" d="M10 4h12v24H10z"></path>
    <path
      fill="#092050"
      d="M5 4h6v24H5c-2.208 0-4-1.792-4-4V8c0-2.208 1.792-4 4-4"
    ></path>
    <path
      fill="#be2a2c"
      d="M27 28h-6V4h6c2.208 0 4 1.792 4 4v16c0 2.208-1.792 4-4 4"
    ></path>
    <path
      d="M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4m3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3z"
      opacity="0.15"
    ></path>
    <path
      fill="#fff"
      d="M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3"
      opacity="0.2"
    ></path>
  </svg>
);

export default SvgIcon;
