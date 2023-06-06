import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {


    return (

        <div className="row bg-info">

            <div>
                <div className="text-center">

                <h1 className="mb-2">LocalStorage Items</h1>

                    <h1 className="mb-2">{localStorage.getItem('FirstName')}</h1>
                    <h1 className="mb-2">{localStorage.getItem('lastName')}</h1>
                    <h1 className="mb-2">{localStorage.getItem('email')}</h1>
                    <h1 className="mb-2">{localStorage.getItem('password')}</h1>

                </div>
            </div>
        </div >
    )
};
export default SignUp;