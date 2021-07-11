import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";


export default function GoogleAuth() {

    const [submitting, setSubmitting] = useState(false);

    const handleLogin = async (googleData) => {
        setSubmitting(true)
        if (googleData.error) {
            console.log(googleData.error);
            return;
        }
        const token = googleData.tokenId;
        axios.post(`/api/auth/google-auth/${token}`)
            .then((res) => {
                if (res.data.message === "success") {
                    localStorage.setItem("token", JSON.stringify(res.data.token));
                    setSubmitting(false)
                }
            })
            .then(() => {
                window.location.replace("/")
            })
            .catch((err) => {
                setSubmitting(false)
                console.log(err);
            })

    }

    return (
        <div>
            <GoogleLogin
                clientId="530009238-fkrlhatq00pca7aaqinrh2gbeq31d6t6.apps.googleusercontent.com"
                render={renderProps => (
                    <button
                        className="btn btn-outline-dark app-button d-flex justify-content-center align-items-center mt-4"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled || submitting === true}
                    >
                        <img className="icon-google" width="20px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                        Sign In With Google
                    </button>
                )}
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
