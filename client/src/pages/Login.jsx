import { useState } from 'react'
import LoginImg from '../images/login.png'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
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

    // LOGIN USER LOGIC
    const handleSubmit = (e) => {
        e.preventDefault()

        // SEND DATA TO BACKEND SERVER
        fetch('http://localhost:8000/api/auth/login', {
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
                if(data.msg == "Login Successful") {
                    navigate('/')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <>
            <div className="container">

                {/*--------------
                 LEFT CHILD 
                ---------------*/}
                <div className="child">
                    <img src={LoginImg} alt="" className="child-img" />
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
                        Login Form
                    </h2>

                    {/*--------------
                    FORM 
                    ---------------*/}
                    <form action=""
                        onSubmit={handleSubmit}>

                            {/* EMAIL */}
                        <label
                            htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={user.email}
                            onChange={handleInput} />

                            {/* PASSWORD */}
                        <label
                            htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={user.password}
                            onChange={handleInput} />

                            {/* LOGIN BUTTON */}
                        <button className="submit-btn" type='submit'>Login Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}