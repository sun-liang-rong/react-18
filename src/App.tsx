import React, { useContext, useEffect } from "react";
import { ContentContext } from "@/context/index";
import styles from "./App.module.less";
import { Outlet, Route, Routes } from "react-router-dom";
import { routerConfig, routesItems } from "@/router/routerConfig";
function App() {
  const renderRoutes = (routes: routesItems[]) => {
    return routes.map((item: routesItems, index) => {
      if (item && item?.children) {
        return (
          <Route path={item.path} element={item.element} key={index}>
            {renderRoutes(item.children)}
          </Route>
        );
      } else {
        return (
          <Route path={item.path} element={item.element} key={index}></Route>
        );
      }
    });
  };
  

  // console.log(, 'context')
  console.log(routerConfig);
  return (
    <>
      <Routes>{renderRoutes(routerConfig)}</Routes>
    </>
  );
}

export default App;
