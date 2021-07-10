import React from "react";
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "75vh" }}>
      <div className="text-center text-white">
        <h1><strong>404</strong></h1><br />
        <h2 className="">Page NotFound</h2><br />
        <p>
          Sorry, we couldn't find this page. You can go back to home page!
        </p><br />
        <Link to="/" className="text-decoration-none">
          <span className="text-primary">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};
