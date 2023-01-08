import React, { useCallback, useState } from "react";
import { Paper } from "../molecules/Paper";
import { ToDoList } from "../organisms/ToDoList";
import { CreateToDoDialog } from "../organisms/CreateToDoDialog";
import { EditToDoDialog } from "../organisms/EditToDoDialog";
import { useTodoData } from "../../api/queries/useTodoData";

const ToDoListPage = () => {
  const [showCreateNewDialog, setshowCreateNewDialog] = useState(false);
  const [showEditDialog, setshowEditDialog] = useState(null);
  const [page, setPage] = useState(1);

  const { data: payloadData, isSuccess, isLoading } = useTodoData(page);

  const changePageIndex = (pageIndex) => {
    setPage(pageIndex);
  };
  const onClickHandler = useCallback(() => {
    setshowCreateNewDialog((prevState) => !prevState);
  }, []);

  const handleEditDialog = useCallback((editId) => {
    setshowEditDialog(editId);
  }, []);

  const handleEditCancelClickDialog = useCallback(() => {
    setshowEditDialog(null);
  }, []);

  if (isLoading) {
    return <>Loading.........</>;
  }

  if (isSuccess) {
    return (
      <>
        <Paper component="div" elevation={0} square={true}>
          <ToDoList
            page={page}
            onChange={changePageIndex}
            onEditButtonClick={handleEditDialog}
            onClickHandler={onClickHandler}
            data={payloadData?.data}
            header={payloadData.data.length > 0 ? "List of Todos" : "No Todos"}
          />
        </Paper>
        {showCreateNewDialog && (
          <CreateToDoDialog
            showState={showCreateNewDialog}
            onClickHandler={onClickHandler}
          />
        )}
        {showEditDialog && (
          <EditToDoDialog
            showState={showEditDialog}
            onClickHandler={handleEditDialog}
            onCancelClick={handleEditCancelClickDialog}
          />
        )}
      </>
    );
  }
};

export default ToDoListPage;
