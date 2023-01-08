import React from "react";
import { ListItemText as MuiListItemText } from "@mui/material";
import styled from "@emotion/styled";

const StyledMuiListText = styled(MuiListItemText)({
  maxWidth: 200,
  maxHeight: 100,
  overflow: "auto",
});
export const ListItemText = (props) => {
  return <StyledMuiListText {...props}>{props.children}</StyledMuiListText>;
};
