import './contactModule.css';
import axios from 'axios';
import { useState } from 'react';

const ContactModule = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');
    //Display hooks for user feedback
    const [display, setDisplay] = useState('');
    const [disErr, setDisErr] = useState(false);

    const handleSubmit = () => {
        if (name != '' && email != '' && msg != '') {
            const postInfo = {
                name: name,
                email: email,
                subject: subject,
                message: msg
            }
    
            axios.post('send', postInfo)
            .then (response => {
                if (response.status == 201) {
                    // For displaying feedback to user
                    setDisErr(false);
                    setDisplay('Email Sent!')
                }
            })
            .catch (err => {
                console.log('Email was not sent', err)
                // User feedback
                setDisplay('Email unable to be sent');
                setDisErr(true);
            });
        } else {
            // User feedback
            setDisplay('Please enter all the required fields *');
            setDisErr(true);
        }
    }

    return (
        <div className = 'form-wrapper'>

            <input type = 'text' id = 'name-input' placeholder = 'Name *'
                onChange = {(e) => setName(e.target.value)} className = 'text-input' />
            <input type = 'text' id = 'email-input' placeholder = 'Email *'
                onChange = {(e) => setEmail(e.target.value)} className = 'text-input'/>
            <input type = 'text' id = 'subject-input' placeholder = 'Subject'
                onChange = {(e) => setSubject(e.target.value)} className = 'text-input'/>
            <textarea className = 'msg-input' placeholder = 'Type a message *'
                onChange = {(e) => setMsg(e.target.value)} />


            <input type = 'button' className = 'send-btn' value = 'Send Email'
                onClick = {() => handleSubmit() } />

            <p style = {{color: !disErr ? 'greenyellow' : 'red'}}
                className = 'display-feedback'>{display}</p>

        </div>
    )
}

export default ContactModule;