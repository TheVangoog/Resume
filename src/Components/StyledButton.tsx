import styled from "@emotion/styled";

// constants
const text_color = "#fff";
const bg_color = "rgb(34, 139, 222)";
const bg_hover_color = "rgb(34, 139, 230, 0.8)";

// styled component

const StyledButton = styled.button`
  position: relative;
  padding: 8px 16px;
  background-color: ${bg_color};
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  border: none;
  color: ${text_color};

  &:hover {
    background-color: ${bg_hover_color};
  }

  &:active {
    background-color: ${bg_color};
    top: 1px;
  }
`;

export default StyledButton;