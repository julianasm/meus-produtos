import React, { Component } from 'react'
import plusSign from '../pictures/plus_sign.png'
import './NewTaskButton.css'

class NewTaskButton extends Component {

    render() {
        return (
            <div className="newTask">
                <div className="newTask__text">
                    Nova tarefa
                </div>
                <div className="more">
                    <img className="plus__sign"src={ plusSign } alt="sinal de mais"/>
                </div>
            </div>
        )
    }
}

export default NewTaskButton