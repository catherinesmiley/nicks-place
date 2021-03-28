import React, { Component } from 'react';

class Search extends Component {

    state = ""

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        console.log("event submitted!")
    }

    render() {
        return(
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        placeholder="enter search here"
                        onChange={this.handleOnChange}
                    />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Search;