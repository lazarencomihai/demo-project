import React, { FunctionComponent } from "react";
import Logo from "./icons/logo";
import { IconMap, IconName, SVGIcon } from "./types";
import Search from "./icons/search";
import Dashboard from "./icons/dashboard";
import Courses from "./icons/courses";
import Settings from "./icons/settings";
import Plus from "./icons/plus";
import ShowActions from "./icons/show-actions";
import Publish from "./icons/publish";
import Archive from "./icons/archive";
import Remove from "./icons/remove";
import { css } from "@emotion/css";

const iconMap: IconMap = {
  logo: Logo,
  search: Search,
  dashboard: Dashboard,
  courses: Courses,
  settings: Settings,
  plus: Plus,
  "show-actions": ShowActions,
  publish: Publish,
  archive: Archive,
  remove: Remove,
};

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: FunctionComponent<IconProps> = ({
  name,
  size = 32,
  color,
  className,
}) => {
  const IconComponent: SVGIcon = iconMap[name] as SVGIcon;

  return (
    <>
      <IconComponent
        className={`${css({
          minHeight: size + "px",
          height: size + "px",
          color: color,
        })} ${className}`}
      />
    </>
  );
};

export default Icon;
