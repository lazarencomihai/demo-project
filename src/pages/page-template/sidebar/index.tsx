import React from "react";
import styled from "@emotion/styled";
import SidebarLink from "./sidebar-link";
import { IconName } from "../../../components/icon/types";
import { Routes } from "../../../constants/routes";

const StyledWrapper = styled.aside`
  width: 95px;
  display: flex;
  flex-direction: column;
`;

interface NavItem {
  label: string;
  iconName: IconName;
  route: string;
}

const navItems: Array<NavItem> = [
  {
    label: "Dashboard",
    iconName: "dashboard",
    route: Routes.Dashboard,
  },
  {
    label: "Courses",
    iconName: "courses",
    route: Routes.Courses,
  },
  {
    label: "Settings",
    iconName: "settings",
    route: Routes.Settings,
  },
];

const Sidebar = () => {
  return (
    <StyledWrapper>
      {navItems.map((item) => (
        <SidebarLink
          key={`item-${item.label}`}
          label={item.label}
          iconName={item.iconName}
          route={item.route}
        />
      ))}
    </StyledWrapper>
  );
};

export default Sidebar;
