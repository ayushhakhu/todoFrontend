import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useTodoDataCount = () => {
  const fetchTodosList = () => {
    return axiosInstance.get(`/posts/count`);
  };

  return useBaseQuery(`fetchToDoDataCount`, fetchTodosList);
};
