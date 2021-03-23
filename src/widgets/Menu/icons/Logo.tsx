import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 205 26" {...props}>
<<<<<<< HEAD
      <image width="205" height="26" href={isDark ? "/logos/LogoTextNewDark.png" : "/logos/LogoTextNewWhite.png"} />
=======
      <image width="205" height="26" href={isDark ? '/egg/LogoTextNewDark.png' : '/egg/LogoTextNewWhite.png'}/>
>>>>>>> 4fb4dd9376e43c4781ce38ab78a72880589389b0
    </Svg>
  );
};

export default Logo;
