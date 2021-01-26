import React, {useState, useEffect, Fragment} from 'react'
import {getRefuges,RefugeProps} from "../../../api/RefugesApi"
import { Refuge } from '../../../components/Refuges/Refuge/Refuge'

const RefugesView = (props: any) => {
    const [refuges, setRefuges] = useState<RefugeProps[]>([])

    useEffect(() => {
        getRefuges().then(setRefuges)
    }, [])

    return (
        <Fragment>
            {refuges.map(refuge => 
                <Refuge refuge={refuge}/>
            )}
        </Fragment>
    )
}

export default RefugesView