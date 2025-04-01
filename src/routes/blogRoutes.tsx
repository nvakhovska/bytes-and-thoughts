import { RouteObject } from "react-router-dom";
import BlogHome from "../pages/BlogHome";
import BlogPostPage from "../pages/BlogPostPage";

export const blogRoutes: RouteObject[] = [
  {
    path: "/blog",
    element: <BlogHome />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPostPage />,
  },
];
