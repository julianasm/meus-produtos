import React, { Component } from 'react'


class SearchTask extends Component {
    constructor(props){
        super(props)

        this.state = {
            searchItem: '',
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




    render() {
        return (
            <div className="SearchTask">
                
            
            </div>

        )
    }
}
