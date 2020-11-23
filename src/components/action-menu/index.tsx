import React, { FunctionComponent, useRef, useState } from "react";
import styled from "@emotion/styled";
import Icon from "../icon";

const StyledButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  color: gray;
  padding: 0;
  cursor: pointer;
  transition: 0.2s ease-in;
  will-change: background-color;
  border-radius: 50%;

  &:hover {
    background-color: #e0eeffb8;
  }
`;

interface ActionMenuItem {}

interface ActionMenuProps {
  items: Array<ActionMenuItem>;
}

const ActionMenu: FunctionComponent<ActionMenuProps> = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);

  return (
    <StyledButton
      type="button"
      ref={buttonRef}
      onClick={(event) => {
        event.stopPropagation();
        setShowPopover(!showPopover);
      }}
    >
      <Icon name="show-actions" size={40} />
    </StyledButton>
  );
};

export default ActionMenu;
