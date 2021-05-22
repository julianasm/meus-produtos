import React, { Component } from 'react'
import './Menu.css'
import profile from '../pictures/Vector.png'
import todoIcon from '../pictures/todo_icon.png'
import aboutIcon from '../pictures/about_icon.png'
import About from './About'
import ToDo from './ToDo'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


class Menu extends Component {
    constructor (props) {
        super(props)
      }

    render() {
        return (
            <Router>
            <div className="menu">
            <div className="profile">
                <img src={ profile } alt='profile icon' className="profile__icon"/>
            </div>
            <div className="name">
                <p className="user__name"> Nome </p>
            </div>
            <div className='todo'>
                <Link to='/tarefas'>
                    <p href='./ToDo.js'>Tarefas</p>
                </Link>
                <img src={ todoIcon } alt='to do list icon' className="todo__icon"/>
            </div>
            <div className="about__us">
            <Link to='/sobre'>
                <p href='./About.js'>Sobre</p>
            </Link>
                <img src= { aboutIcon } alt='about icon' className="about__icon"/>
            </div>
        </div>
        <Switch>
            <Route path='/tarefas' component={ ToDo }/>
            <Route path='/duvidas' component={ About }/>
        </Switch>
            </Router>
            
        )
    }
}

export default Menu