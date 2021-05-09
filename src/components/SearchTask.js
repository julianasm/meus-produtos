import React, { Component } from 'react'
import './SearchTask.css'

class SearchTask extends Component {
    constructor(props){
        super(props)

        this.state = {
            searchItem: '',
            items: [],
            isLoaded: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    };

    handleSearchChange = (event) => {
        this.setState({
            searchItem: event.target.value
        })
    }

    async componentDidMount() {
        const response = await fetch('https://chronos.compraqui.app/api/tasks');
        const json = await response.json();
        this.setState({ 
            isLoaded: true,
            items: json,
         });
      }


    componentDidMount() {
        fetch('https://chronos.compraqui.app/api/tasks')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    render() {
        var { isLoaded, items } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="SearchTask">
                    <input type="text" placeholder="Pesquisar" value={this.state.searchItem} onChange={this.handleSearchChange}/>
                <div>
            </div>

            </div>
            </form>

        )
    }
}

export default SearchTask
