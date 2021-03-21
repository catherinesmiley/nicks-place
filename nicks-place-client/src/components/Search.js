import React, { Component } from 'react';

class Search extends Component {

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
                    />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Search;