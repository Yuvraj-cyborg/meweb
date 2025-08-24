import React from "react";
import type { IconType } from "react-icons";
import {
  FaVoteYea,
  FaDragon,
  FaYoutube,
  FaDatabase,
  FaBrain,
  FaBolt,
  FaGraduationCap,
  FaGamepad,
  FaCube,
  FaRocket,
} from "react-icons/fa";
import { TbFileZip } from "react-icons/tb";
import { FaRegClipboard } from "react-icons/fa6";
import { FiGitBranch } from "react-icons/fi";
interface ProjectIconProps {
  icon: string;
  className?: string;
}

const iconMap: { [key: string]: IconType } = {
  vote: FaVoteYea,
  dragon: FaDragon,
  youtube: FaYoutube,
  database: FaDatabase,
  brain: FaBrain,
  lightning: FaBolt,
  graduation: FaGraduationCap,
  gamepad: FaGamepad,
  cube: FaCube,
  rocket: FaRocket,
  filezip: TbFileZip,
  gitbranch: FiGitBranch,
  clipboard: FaRegClipboard,
};

const ProjectIcon: React.FC<ProjectIconProps> = ({ icon, className }) => {
  const normalizedIcon = icon.toLowerCase();
  const IconComponent = iconMap[normalizedIcon];

  return <IconComponent className={className} />;
};

export default ProjectIcon;
