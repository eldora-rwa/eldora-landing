import React from "react";

type PrimaryButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  withEffect?: boolean;
};

const PrimaryButton = ({ className, withEffect, ...props }: PrimaryButton) => {
  return (
    <button
      className={`relative rounded-full bg-cream-dark px-3 py-1 cursor-pointer
        text-navi-base hover:bg-navi-light hover:text-cream-dark transition-all
         duration-300 ${className || ""} ${withEffect ? "hover-glow" : ""}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
