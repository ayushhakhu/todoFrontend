import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useTodoData = (pageIndex) => {
  const fetchTodosList = () => {
    return axiosInstance.get(`/posts?page=${pageIndex}`);
  };

  return useBaseQuery(`fetchToDoData${pageIndex}`, fetchTodosList);
};
