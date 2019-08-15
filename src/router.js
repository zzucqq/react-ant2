/**
 * 定义应用路由
 */
import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import path from 'path';

import routes from './components/config/routes';

const RouteItem = (props) => {
  const { redirect, path: routePath, component, key } = props;
  if (redirect) {
    return (
      <Redirect
        exact
        key={key}
        from={routePath}
        to={redirect}
      />
    );
  }
  return (
    <Route
      key={key}
      component={component}
      path={routePath}
    />
  );
};

const router = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, id) => {
          const { component: RouteComponent, children, ...others } = route;
          // console.log(RouteComponent)
          return (
            <Route
              key={id}
              {...others}
              component={(props) => {
                return (
                  children ? (
                    // RouteComponent 重命名，组件首字母必须大写
                    <RouteComponent key={id} {...props}>
                      <Switch>
                        {children.map((routeChild, idx) => {
                          const { redirect, path: childPath, component, children } = routeChild;
                          // console.log("children："+ JSON.stringify(children))
                            

                          return RouteItem({
                            key: `${id}-${idx}`,
                            redirect,
                            path: childPath && path.join(route.path, childPath),
                            component,
                          });
                        })}
                      </Switch>
                    </RouteComponent>
                  ) : (
                    <Switch>
                      {
                        RouteItem({
                          key: id,
                          ...route,
                        })
                      }
                    </Switch>
                  )
                );
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default router;
