import { useState } from 'react'
import RegisterImg from '../images/register.png'

export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    })
    const handleInput = (e) => {
        const name = e.target.id
        const value = e.target.value
        setContact({
            ...contact,
            [name]: value,
        })
    }

    // SUBMIT MESSAGE LOGIC
    const handleSubmit = (e) => {
        e.preventDefault()
        // SEND DATA TO BACKEND SERVER
        fetch('http://localhost:8000/api/form/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // You might need additional headers, such as authentication tokens
            },
            body: JSON.stringify(contact)
        })
            .then(response => response.json())
            .then(data => {
                alert(data.msg)
                if (data.msg == "message send successfully") {
                    setContact({
                        username: "",
                        email: "",
                        message: ""
                    })
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        console.log(contact)
    }
    return (
        <>
            <div className="container ">

                {/*--------------
                 LEFT CHILD 
                ---------------*/}
                <div className="child">
                    <img src={RegisterImg} alt="" className="child-img" />
                </div>

                {/*--------------
                 RIGHT CHILD 
                ---------------*/}
                <div className="child leftalign">

                    {/*--------------
                    HEADING 
                    ---------------*/}
                    <h2
                        className="heading">
                        Contact Form
                    </h2>

                    {/*--------------
                    CONTACT FORM 
                    ---------------*/}
                    <form action=""
                        onSubmit={handleSubmit}>

                        {/* USERNAME */}
                        <label
                            htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={contact.username}
                            onChange={handleInput} />

                        {/* EMAIL */}
                        <label
                            htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={contact.email}
                            onChange={handleInput} />

                        {/* MESSAGE */}
                        <label htmlFor="message">Message</label>
                        <textarea name="" id="message" cols="30" rows="10"
                            value={contact.message}
                            onChange={handleInput}></textarea>

                        {/* SUBMIT BUTTON */}
                        <button className="submit-btn" type='submit'>submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}