import { CSSProperties, ReactNode } from 'react';



const ScreenContainer = ({ children, style }) => {
  return (
    // h-full class removes due to problem in finance section of home page
    <div className="mx-auto w-full h-full max-w-[1240px] px-[15px] xl:px-[0px]" style={style}>
      {children}
    </div>
  );
};

export default ScreenContainer;
