import React, { Component } from 'react';

class ContactForm extends Component { 

    render() {

        return(
            <div>
                <h1>Contact Us</h1>
                <form>
                    <h3>Name:</h3>
                    <input type="text"/>
                    <br />
                    <h3>Email:</h3>
                    <input type="text"/>
                    <br />
                    <h3>Message:</h3>
                    <textarea/>
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