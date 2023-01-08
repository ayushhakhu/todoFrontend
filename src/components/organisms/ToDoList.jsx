import React, { useState, useEffect } from "react";
import { List as MuiList } from "@mui/material";
import { ToDoItem } from "../molecules/ToDoItem";
import { ListItemText } from "../atoms/ListItemText";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Stack } from "../atoms/Stack";
import { Pagination } from "../atoms/Pagination";
import { useTodoDataCount } from "../../api/queries/useTodoDataCount";

export const ToDoList = (props) => {
  const { data, header, onClickHandler, onEditButtonClick, onChange, page } =
    props;

  const { data: payloadData, isSuccess } = useTodoDataCount();

  const [pageCount, setpageCount] = useState(1);

  useEffect(() => {
    if (isSuccess && payloadData) {
      const countVal = Math.ceil(payloadData.data.count / 2);
      console.log("countVal~~~~~~~~~~~~~~>", countVal);
      setpageCount(countVal);
    }
  }, [isSuccess, payloadData]);

  return (
    <Stack>
      <Typography title={header} />
      <MuiList {...props}>
        {data.map((item) => (
          <ToDoItem
            itemId={item._id}
            onEditClick={() => onEditButtonClick(item._id)}
          >
            <ListItemText
              sx={{
                display: "flex",
                flexGrow: 3,
                justifyContent: "center",
              }}
            >
              {item.todoItem}
            </ListItemText>
          </ToDoItem>
        ))}
      </MuiList>
      <Button
        onClick={onClickHandler}
        buttonContent="Add"
        buttonvariant="outlined"
        sx={{ width: 10 }}
      />
      <Pagination
        page={page}
        count={pageCount}
        onChange={(_, page) => onChange(page)}
      />
    </Stack>
  );
};
