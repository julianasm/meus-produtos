import React, { Component } from 'react'


class CreateTask extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            taskName: '',
            taskDescription: ''
        }
    
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        const { taskName, taskDescription} = this.State
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="taskTitle"
                            value={ taskName }
                            onChane={ this.changeHandler }/>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="taskDescription"
                            value={ taskDescription }
                            onChane={ this.changeHandler }/>
                    </div>
                    <button type="Submit">Salvar</button>
                </form>
            </div>
        )
    }


}