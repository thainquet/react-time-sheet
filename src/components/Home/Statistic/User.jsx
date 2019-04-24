import React from 'react';

import userImg from '../../../assets/user.png'
// import data from '../../../assets/simulatedAPI'

export default class User extends React.Component{
    render () {
        return (
            <div>
                <img src={userImg} alt="user.img"/>
            </div>
        )
    }
}