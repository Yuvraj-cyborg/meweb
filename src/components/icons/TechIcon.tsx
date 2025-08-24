import React from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiRust,
  SiNuxtdotjs,
  SiGo,
  SiBun,
  SiJavascript,
  SiZig,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbCode } from "react-icons/tb";

interface TechIconProps {
  tech: string;
  className?: string;
}

const iconMap: { [key: string]: IconType } = {
  react: SiReact,
  "next.js": SiNextdotjs,
  postgresql: SiPostgresql,
  typescript: SiTypescript,
  rust: SiRust,
  "nuxt.js": SiNuxtdotjs,
  go: SiGo,
  java: FaJava,
  bun: SiBun,
  javascript: SiJavascript,
  zig: SiZig,
};

const colorMap: { [key: string]: string } = {
  react: "#61DAFB",
  "next.js": "#000000",
  postgresql: "#4169E1",
  typescript: "#3178C6",
  rust: "#DEA584",
  "nuxt.js": "#00DC82",
  go: "#00ADD8",
  java: "#f89820",
  bun: "#FBF0DF",
  javascript: "#FFCE1B",
  zig: "#FFCE1B",
};

const TechIcon: React.FC<TechIconProps> = ({ tech, className }) => {
  const normalizedTech = tech.toLowerCase();
  const IconComponent = iconMap[normalizedTech] || TbCode;
  const color = colorMap[normalizedTech];

  return <IconComponent className={className} style={{ color }} />;
};

export default TechIcon;
