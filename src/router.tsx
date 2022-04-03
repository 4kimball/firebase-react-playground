import React, { FC } from "react";
import { useRoutes } from "react-router-dom";

import GoogleLogin from "routes/GoogleLogin";
const routesConfig = [
  {
    path: "/admin/login",
    element: <GoogleLogin />,
  },
];

const Router: FC = () => {
  const routes = useRoutes(routesConfig);
  return routes;
};

export default Router;
