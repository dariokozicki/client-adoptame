import React from 'react'
import {RefugeProps} from '../../../api/RefugesApi'
import {Card} from 'primereact/card'
import classes from './Refuge.module.css'

export const Refuge = (props: {refuge: RefugeProps} ) => {
    return (
        <Card 
            className={classes.Refuge}
            title={props.refuge.name}
            header={<div className={classes.RefugeImageContainer}><img alt={props.refuge.name} src={props.refuge.img} /></div>}
            subTitle={props.refuge.ubicacion}
        >
            <div className={classes.container}>
                {props.refuge.detalle}
            </div>
        </Card>
    )
}