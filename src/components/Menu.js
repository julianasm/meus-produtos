import React, { Component } from 'react'
import './Menu.css'
import profile from '../pictures/Vector.png'
import todoIcon from '../pictures/todo_icon.png'
import aboutIcon from '../pictures/about_icon.png'

class Menu extends Component {
    constructor (props) {
        super(props)
      }

    render() {
        return (
            <div className="menu">
            <div className="profile">
                <img src={ profile } alt='profile icon' className="profile__icon"/>
            </div>
            <div className="name">
                <p className="user__name"> Nome </p>
            </div>
            <div className='todo'>
                <p className="todo__tasks">Tarefas</p>
                <img src={ todoIcon } alt='to do list icon' className="todo__icon"/>
            </div>
            <div className="about">
                <p className="about__content"> Sobre</p>
                <img src= { aboutIcon } alt='about icon' className="about__icon"/>
            </div>
            </div>
            
        )
    }
}

export default Menu