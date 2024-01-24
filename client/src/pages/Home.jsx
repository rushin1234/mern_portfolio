import { NavLink } from "react-router-dom"

import HomeImg from '../images/home.png'

export const Home = () => {
    return (
        <>
                {/*--------------
                HOME UPPER CONTAINER
                ----------------*/}
            <div className="container">

                {/*--------------
                 LEFT CHILD 
                ---------------*/}
                <div className="child leftalign">
                    <div className="hello-text">
                        we are the world's best it company
                    </div>
                    <h2 className="heading">
                        Welcome to Rushi Technical
                    </h2>
                    <p className="para" style={{ textAlign: "left" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident aperiam ab assumenda labore voluptas quis nam sint, placeat, ut quisquam iusto ullam voluptatum quae quam obcaecati fuga quo nulla consequuntur. Ex asperiores nostrum, maiores ipsam exercitationem amet facere molestiae!
                    </p>
                    <div className="btns">
                        <NavLink to="/register" className="submit-btn">connect now</NavLink>
                        <NavLink to="/about" className="helper-btn">learn more</NavLink>
                    </div>
                </div>

                {/*--------------
                 RIGHT CHILD 
                ---------------*/}
                <div className="child">
                    <img src={HomeImg} alt="" className="child-img" />
                </div>
            </div>

            {/*--------------
            HOME BOTTOM ANALYTICS TABLE
            ----------------*/}
            <div className="analytics">
                <div className="analytic">
                    <h2>50+</h2>
                    <p>Registered Components</p>
                </div>
                <hr />
                <div className="analytic">
                    <h2>100,00+</h2>
                    <p>Happy Clients</p>
                </div>
                <hr />
                <div className="analytic">
                    <h2>500+</h2>
                    <p>Well Known Deolopers</p>
                </div>
                <hr />
                <div className="analytic">
                    <h2>24/7</h2>
                    <p>Service</p>
                </div>
            </div>
        </>
    )
}