import React, { Fragment } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
const Layout = (props: any) => (
    <Fragment>
        <Toolbar />

        <div>{props.children}</div>
    </Fragment>
)

export default Layout