import React, { Component } from 'react'
import './ToDo.css'

class ToDo extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }


    async componentDidMount() {
        try {
            const response = await fetch('https://chronos.compraqui.app/api/tasks');
            const json = await response.json();
            this.setState({ 
                isLoaded: true,
                items: json,
             });
            if (!response.ok) {
                throw Error(response.statusText)
            }
        } catch (error){
            console.log(error)
        }
    }


 /*   componentDidMount() {
        fetch('https://chronos.compraqui.app/api/tasks')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }*/

    render() {

        var { isLoaded, items } = this.state

        return (
            <div className="ToDo">
                <ul className="ToDoItem">
                    { items.map(item =>(
                      <li key={ item.guid } className="ToDoItem__properties" >
                        { item.title }, 
                        { item.description },
                        { item.situation}
                      </li>  
                    ))}
                </ul>

            </div>
        )
    }
}

export default ToDo;