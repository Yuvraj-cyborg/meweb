import React from "react";
import { SiObsidian } from "react-icons/si";

interface ObsidianIconProps {
  className?: string;
}

const ObsidianIcon: React.FC<ObsidianIconProps> = ({ className }) => {
  return <SiObsidian className={className} />;
};

export default ObsidianIcon;
