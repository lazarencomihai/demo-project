import React, { FunctionComponent } from "react";
import styled from "@emotion/styled/macro";
import Icon from "../../../common/icon";
import { IconName } from "../../../common/icon/types";
import { useHistory, NavLink } from "react-router-dom";

const StyledWrapper = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: 2px solid #f0f5fa;
  color: #8a9aa8;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;

  &:hover,
  &:focus {
    background-color: #dadbdc7a;
  }

  &:first-child {
    border-top: 2px solid #f0f5fa;
  }

  .block {
    display: block;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    ${StyledWrapper} {
      color: #001c33;

      svg {
        color: #4b00ff;
      }
    }
  }
`;

interface SidebarLinkProps {
  label: string;
  iconName: IconName;
  route: string;
}

const SidebarLink: FunctionComponent<SidebarLinkProps> = ({
  label,
  iconName,
  route,
}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`${route}`);
  };

  return (
    <StyledNavLink to={route}>
      <StyledWrapper onClick={handleClick}>
        <Icon name={iconName} className="block" />
        <div>{label}</div>
      </StyledWrapper>
    </StyledNavLink>
  );
};

export default SidebarLink;
