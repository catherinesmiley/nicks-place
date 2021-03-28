import React, { Component } from 'react';

class ContactForm extends Component { 

    state = ""

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>Contact Us</h1>
                <form>
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