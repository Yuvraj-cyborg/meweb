import React from 'react';
import type { IconType } from 'react-icons';
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
} from 'react-icons/fa';
import { TbCode } from 'react-icons/tb';

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
};

const ProjectIcon: React.FC<ProjectIconProps> = ({ icon, className }) => {
  const normalizedIcon = icon.toLowerCase();
  const IconComponent = iconMap[normalizedIcon] || TbCode;

  return <IconComponent className={className} />;
};

export default ProjectIcon;
