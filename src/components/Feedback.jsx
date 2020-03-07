import React, { Component } from 'react';

class FeedBack extends Component {
    constructor() {
        super();

        this.state = {
            feedback: "",
        };
    }

    componentDidMount() {

    }

    static getDerivedStateFromProps(nextProps, prevState) {

    }


    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ feedback: event.target.value });
    }


    handleSubmit = (event) => {

        event.preventDefault()
        this.sendFeedback(
            //template,
            'template_qvwIRLwF',
            'mtalha31298@gmail.com',
            'muhammadzubaid.shoaib@gmail.com',
             this.state.feedback,
            'user_b1UkLL3dEM69Pcb8vrtT2',
            'ahmed'
        )

        this.setState({
            formSubmitted: true
        })
    }

    sendFeedback(templateId, senderEmail, receiverEmail, feedback, user,from_name) {
        var templateParams = {
            MyFeedBack: feedback, 
            senderEmail: senderEmail,
            receiverEmail: receiverEmail,
            from_name:from_name
        };

        window.emailjs.send(
            'default_service', // default email provider in your EmailJS account
            templateId,
            templateParams,
            user
        )
            .then(res => {
                console.log(res);
                this.setState({ formEmailSent: true })
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Failed to send feedback. Error: ', err))
    }

    render() {
        return (
            <>
                <form className="feedback-form" onSubmit={this.handleSubmit}>
                    <h1>Your Feedback</h1>
                    <textarea
                        className="text-input"
                        id="feedback-entry"
                        name="feedback-entry"
                        onChange={this.handleChange}
                        placeholder="Enter your feedback here"
                        required
                        value={this.state.feedback}
                    />
                    <div className="btn-group">
                        <button className="btn btn--cancel" >
                            Cancel
                        </button>
                        <input type="submit" value="Submit" className="btn btn--submit" />
                    </div>
                </form>
            </>
        );
    }
}

export default FeedBack;
