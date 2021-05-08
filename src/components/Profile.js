import React, { Component } from 'react'
import './Profile.css'
import profile from '../prictures/dummyprofile.png'

class Profile extends Component {
    constructor (props) {
        super(props)
      }

    render() {
        return (
            <div className="Profile">
                <p>Nome</p>
                <img src={ profile } />
            <div>
                <p>Tarefas</p>
                <p>Sobre</p>
            </div>
            </div>
            
        )
    }


}

export default Profile