import React from 'react';

const Contact = () => {
    return (
        <div className="webpage contact">
            <h1>Xuang Jin</h1>
            <h2>How to reach me</h2>
            <h3>Email</h3>
            <h4>xuangjin@gmail.com</h4>

            <form>
                <label>Name:<br />
                    <input type="text" name="name"/>
                </label>
                <br /><br />
                <label>Email:<br />
                    <input type="text" name="email"/>
                </label>
                <br /><br />
                <label>Message:<br />
                    <textarea name="message"></textarea>
                </label>
                <br /><br />
                <button type="submit">Send Message</button>
                
            </form>
        </div>
    );
};
export default Contact;