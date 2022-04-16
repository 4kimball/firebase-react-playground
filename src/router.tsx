import React, { FC } from "react";
import { useRoutes } from "react-router-dom";

import GoogleLogin from "routes/GoogleLogin";
import Todo from "routes/Todo";
const routesConfig = [
  {
    path: "/admin/login",
    element: <GoogleLogin />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
];

const Router: FC = () => {
  const routes = useRoutes(routesConfig);
  return routes;
};

export default Router;
