import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "../atoms/IconButton";
import { ListItem } from "../atoms/ListItem";
import { useDeletePost } from "../../api/mutations/useDeletePost";

export const ToDoItem = (props) => {
  const { onEditClick, itemId } = props;

  const { mutate } = useDeletePost();

  const onDeleteClick = () => {
    const data = { objectId: itemId };
    mutate(data);
  };

  return (
    <ListItem {...props}>
      {props.children}
      <IconButton onClick={onDeleteClick}>
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={onEditClick}>
        <EditIcon />
      </IconButton>
    </ListItem>
  );
};
