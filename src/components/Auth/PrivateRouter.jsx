import React from 'react'
import { Route} from 'react-router-dom'

const auth = localStorage.getItem("auth")

const PrivateRouter = ( {TrueCpn, FalseCpn }) => {
    return (
        <Route
            render = {props => 
                auth === true ? <Route component={TrueCpn}/> : <Route component={FalseCpn} />
            }
        />
    )
}

export default PrivateRouter