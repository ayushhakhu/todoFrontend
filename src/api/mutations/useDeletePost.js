import { useQueryClient } from "react-query";
import { axiosInstance } from "../axiosInstance";
import { useBaseMutation } from "../useBaseMutation";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  const fetchTodosList = (data) => {
    return axiosInstance.delete(`/posts/${data.objectId}`);
  };

  return useBaseMutation(fetchTodosList, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
  });
};
