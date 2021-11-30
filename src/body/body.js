import './body.css';
import touch_img from '../img/dc-img.jpeg';
import ContactModule from '../contactModule/contactModule';

import { useState } from 'react';

const Body = () => {

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true);
    }

    return (
        <div className = 'body-wrapper'>
            <h4 className = 'dc-title'>Contact Datacom</h4>

                <div className = 'touch-wrapper'>
                    <div className = 'left-touch'>

                        <h1 className = 'touch-title'>Get in touch</h1>
                        <p className = 'touch-text'>
                            Do you have a question? Want to learn more about our products and
                            solutions? We're here to help.
                        </p>
                        <input type = 'button' value = {!open ? 'Contact Us' : 'Close X'}
                            className = 'contact-btn' id = {!open ? '' : 'btn-opened'}
                            onClick = {() => handleOpen()} />
                        <div className = 'display-module-wrap'
                             style = {{display: open ? 'flex' : 'none'}} >
                                <ContactModule />
                        </div>
                    </div>

                    <div className = 'right-touch'>
                        <img src = { touch_img } className = 'touch-img' alt = 'employees' />
                    </div>

                </div>


            
            

        </div>
    )
}

export default Body;