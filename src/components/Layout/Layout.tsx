import React, { Fragment } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from "./Layout.module.css"

const Layout = (props: any) => (
    <Fragment>
        <Toolbar />

        <div className={classes.Pages}>{props.children}</div>
    </Fragment>
)

export default Layout