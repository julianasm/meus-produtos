import React, { Component, useState } from 'react'
import CreateTask from './CreateTask'
import plusSign from '../pictures/plus_sign.png'
import './NewTaskButton.css'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function NewTaskButton () {

    const [isModalVisible, setIsModalVisible] = useState(false) 
        return (
            <div className="newTask">
                <button onClick={ () => setIsModalVisible(true)}>
                { isModalVisible ? 
                    <Router>
                        <Link to='./CreateTask.js'>
                        </Link>
                        <Switch>
                            <Route path='/criar_tarefa' component={ CreateTask }/>
                        </Switch>
                    </Router>
                     : null}
                    Nova Tarefa</button>
            </div>
        )
}

export default NewTaskButton