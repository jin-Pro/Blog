import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigatorBlog = () => {
  const navigator = useNavigate();
  const handleGoBlog = useCallback(() => navigator("/main"), []);
  return handleGoBlog;
};
