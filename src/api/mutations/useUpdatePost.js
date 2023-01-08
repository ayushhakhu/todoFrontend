import { useQueryClient } from "react-query";
import { axiosInstance } from "../axiosInstance";
import { useBaseMutation } from "../useBaseMutation";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  const fetchTodosList = (data) => {
    const { payload, objectId } = data;
    return axiosInstance.put(`/posts/${objectId}`, payload);
  };

  return useBaseMutation(fetchTodosList, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
  });
};
