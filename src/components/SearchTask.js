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

    componentDidMount() {
        fetch('https://chronos.compraqui.app/api/tasks')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }s

    render() {
        var { isLoaded, items } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="SearchTask">
                    Pesquisar
                    <input type="text" value={this.state.searchItem} onChange={this.handleSearchChange}/>
                <div>
            </div>
            <div>
                {items.filter(item => item.includes({ searchItem })).map(filteredTask => (
                <li>
                    {filteredTask}
                </li>
                ))}
                </div>
            </div>
            </form>

        )
    }
}

export default SearchTask
