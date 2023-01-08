import { useQueryClient } from "react-query";
import { useBaseMutation } from "../useBaseMutation";
import { axiosInstance } from "../axiosInstance";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const fetchTodosList = (data) => {
    return axiosInstance.post("/posts", data);
  };

  return useBaseMutation(fetchTodosList, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
  });
};
