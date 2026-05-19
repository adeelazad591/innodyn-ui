import React from "react";

const ElipseBlur = () => {
  return (
    <svg
      width="1003"
      height="1003"
      viewBox="0 0 1003 1003"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_493_2364)">
        <circle
          cx="501.215"
          cy="501.215"
          r="139"
          fill="white"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_493_2364"
          x="-0.000152588"
          y="-3.05176e-05"
          width="1002.43"
          height="1002.43"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="181.107"
            result="effect1_foregroundBlur_493_2364"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ElipseBlur;
