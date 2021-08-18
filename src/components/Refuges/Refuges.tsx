import React, { Fragment } from "react"
import { RefugeProps } from "../../api/RefugesApi"
import { Refuge } from "./Refuge/Refuge"

const Refuges = (props: {refuges: RefugeProps[]}) => {
    return (
        <Fragment>
           {props.refuges.map(refuge => 
                <Refuge refuge={refuge}/>    
            )}
        </Fragment>
    )
}


export default Refuges