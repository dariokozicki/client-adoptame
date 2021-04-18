import React, { Fragment } from 'react'
import Navbar from '../Navigation/Navbar'
/* import Toolbar from '../Navigation/Toolbar/Toolbar'*/
/* import classes from "./Layout.module.css" */
import { Pages } from './LayoutStyle';

const Layout = (props: any) => (
    <Fragment>
        {/* <Toolbar /> */}
        <Navbar/>
        <Pages >  {props.children}</Pages>
        {/* <div className={classes.Pages}>{props.children}</div> */}
    </Fragment>
)

export default Layout