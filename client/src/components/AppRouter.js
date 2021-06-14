import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {useContext} from 'react'
import {observer} from "mobx-react-lite";
import {MAIN_F} from "../utils/consts";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}

            <Redirect to={MAIN_F}/>
        </Switch>
    );
});

export default AppRouter;