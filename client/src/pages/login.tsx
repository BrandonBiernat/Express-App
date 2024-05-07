import React from "react";

const Login = () => {
    const container = {
        justifyContent: "center",
        display: "flex"
    };

    const loginArea = {
        border: 'none',
        borderRadius: '5px',
        boxShadow: '3px 3px',
        padding: '10px'
    };

    return (
        <div style={container}>
            <div style={loginArea}>
                Login
            </div>
        </div>
    );
}

export default Login;