import React, { Component } from 'react'
import './CreateTask.css'

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
                <form className="task__info" onSubmit={this.handleSubmit}>
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
                    <button type="Submit">Salvar</button>
                </form>
            </div>
        )
    }


}

export default CreateTask