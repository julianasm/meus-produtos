import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './CreateTask.css'
import ToDo from './ToDo'


class CreateTask extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            taskName: '',
            taskDescription: ''
        }
    
    }

    changeHandlerTask = (event) => {
        this.setState({
            taskName: event.target.value,
        })
    }

    changeHandlerDescription = (event) => {
        this.setState({
            taskDescription: event.target.value,
        })
    }
 
    handleSubmit(event){ 
        event.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)}
        ).then(function(response){
            console.log(response)
            return response.json
        })
    }

    render() {
        return (
            <div className="create__task">
                <div className="task__info">
                <form>
                    <div>
                        <input
                            type="text"
                            name="taskTitle"
                            value={ this.state.taskName }
                            onChange={ this.changeHandlerTask }/>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="taskDescription"
                            value={ this.state.taskDescription }
                            onChange={ this.changeHandlerDescription }/>
                    </div>
                </form>
                <Router>
                <div>
                    <Link to="/tarefas">
                        <button onSubmit={this.handleSubmit}
                        className="save"
                        href='../src/components/ToDo.js'>Salvar</button>
                    </Link>
                </div>
                <div>
                    <Link to="/tarefas">
                        <button className="cancel" 
                        href='../src/components/ToDo.js'>Cancelar</button>
                    </Link>
                </div>
                <Switch>
                    <Route path='/tarefas' component={ ToDo }/>
                </Switch>
                </Router>
                </div>
            </div>
        )
    }


}

export default CreateTask