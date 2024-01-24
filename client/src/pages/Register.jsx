import { useState } from 'react'
import RegisterImg from '../images/register.png'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const handleInput = (e) => {
        const name = e.target.id
        const value = e.target.value
        setUser({
            ...user,
            [name]: value,
        })
    }

    // REGISTER NEW USER LOGIC
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // You might need additional headers, such as authentication tokens
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                alert(data.msg)
                if(data.msg == "successsfully registered") {
                    navigate('/')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
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
                        Registration Form
                    </h2>

                    {/*--------------
                    Register Form 
                    ---------------*/}
                    <form action=""
                        onSubmit={handleSubmit}>

                        {/* USERNAME */}
                        <label
                            htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={user.username}
                            onChange={handleInput} />

                        {/* EMAIL */}
                        <label
                            htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={user.email}
                            onChange={handleInput} />

                        {/* PHONE */}
                        <label
                            htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            id="phone"
                            value={user.phone}
                            onChange={handleInput} />

                        {/* PASSWORD */}
                        <label
                            htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={user.password}
                            onChange={handleInput} />

                        {/* REGISTER BUTTON */}
                        <button className="submit-btn" type='submit'>register now</button>
                    </form>
                </div>
            </div>
        </>
    )
}