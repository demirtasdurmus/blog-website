import React from 'react';


export default function SecretPage() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.assign('/sign-in');
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "75vh" }}>
            <div className="text-center text-white">
                <header className="Landing-header text-white">
                    <h2>This is my Secret Page</h2>
                </header>
                <div className="Landing-info text-white">
                    <p>You can't see this page unless you are signed in!</p>
                </div>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
        </div>

    );
};
