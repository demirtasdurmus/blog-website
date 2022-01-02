import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/auth/GoogleAuth";


export default function SignIn() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleLoginUser = (email, password) => {
        axios.post("/api/users/login",
            {
                email: email,
                password: password
            })
            .then((res) => {
                console.log(res.data.message)
                localStorage.setItem("token", JSON.stringify(res.data.token));
                window.location.assign('/');
            }).catch((err) => {
                console.log(err.response.data.message);
                alert(err.response.data.message);
            })
    };

    useEffect(() => {
    }, [])
    return (
        <div>
            <div className="d-flex justify-content-center mt-5 pt-5">
                <h2 className="text-center text-white mx-2">Sign In</h2>
            </div>

            <div className="container pt-3 d-flex justify-content-center">
                <div className="col-lg-5 col-md-6">
                    <div className="mb-2">
                        <label className="from-label text-white" for="email">Email</label>
                        <input
                            className="form-control"
                            onChange={handleInputChange}
                            value={inputs.email}
                            name="email"
                            id="email"
                            type="email"
                            placeholder="email"
                        />
                    </div>
                    <div className="mb-2 pb-1">
                        <label className="from-label text-white" for="password">Password</label>
                        <input
                            className="form-control"
                            onChange={handleInputChange}
                            value={inputs.password}
                            name="password"
                            id="password"
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <button
                        className="app-button w-100 mt-4"
                        type="submit"
                        onClick={() => handleLoginUser(inputs.email, inputs.password)}
                    >
                        Sign In
                    </button>
                    <GoogleAuth />
                    <div className="my-4 pt-1">
                        <h5 className="text-center"> Not signed up yet?</h5>
                        <h5 className="text-center mt-4">
                            <Link to="/sign-up"><span className="text-primary">Sign Up</span></Link>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

