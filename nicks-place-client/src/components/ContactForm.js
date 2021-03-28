import React, { Component } from 'react';

class ContactForm extends Component { 

    render() {

        return(
            <div>
                <h1>Contact Us</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Name"
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        placeholder="Email"
                    />
                    <br />
                    <br />
                    <textarea>
                        Enter your message here
                    </textarea>
                </form>
            </div>
        )
    }

}

export default ContactForm;