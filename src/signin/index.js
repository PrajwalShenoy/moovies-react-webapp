import React from "react";
import "./index.css";
// import SignUp from "./Signup";
import SignIn from "./Signin";

const Signin = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 signin-container">
                    <SignIn />
                </div>
                {/* <div className="col-md-6 signup-container">
                    <SignUp />
                </div> */}
            </div>
        </div>
    );
};

export default Signin;