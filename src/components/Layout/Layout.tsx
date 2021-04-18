import React, { Fragment } from 'react'
import Navbar from '../Navigation/Navbar'
/* import Toolbar from '../Navigation/Toolbar/Toolbar'*/
import classes from "./Layout.module.css"

const Layout = (props: any) => (
    <Fragment>
        {/* <Toolbar /> */}
        <Navbar/>

        <div className={classes.Pages}>{props.children}</div>
    </Fragment>
)

export default Layout