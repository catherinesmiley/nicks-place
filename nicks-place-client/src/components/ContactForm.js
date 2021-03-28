import React, { Component } from 'react';

class ContactForm extends Component { 

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
                <h1>Contact Us</h1>
                <h4>Have a question? Looking for on-site catering or event space? Send us a message!</h4>
                <hr />
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <h3>Name:</h3>
                    <input 
                        type="text"
                        onChange={this.handleOnChange}
                    />
                    <br />
                    <h3>Email:</h3>
                    <input 
                        type="text"
                        onChange={this.handleOnChange}
                    />
                    <br />
                    <h3>Message:</h3>
                    <textarea 
                        onChange={this.handleOnChange}
                    />
                    <br />
                    <br />
                    <input
                        type="submit"
                    />
                </form>
            </div>
        )
    }

}

export default ContactForm;