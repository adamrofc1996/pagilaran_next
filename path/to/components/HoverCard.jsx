import React from 'react';
import clsx from 'clsx';

const HoverCard = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        "transition-transform-shadow duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lift relative z-0 hover:z-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default HoverCard;