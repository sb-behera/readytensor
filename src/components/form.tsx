import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";



// declaring interface with data types
interface IFormInputs {
    firstName: string
    lastName: string
    email: string
    password: string
}

// yup validation schema
const validationSchema = yup.object({
    firstName: yup.string().required('firstName is required'),
    lastName: yup.string().required('lastName is required'),
    email: yup.string().email()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(15, 'Password must not exceed 15 characters'),
}).required();


//Use form hook for error validation
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema)
    });

    let navigate=useNavigate();

    //Submission method
    const onSubmit = (data: IFormInputs) => {

        localStorage.setItem("FirstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
        localStorage.setItem("email", data.email);
        localStorage.setItem("password", data.password);
        navigate('/getForm')
        
    };

    return (

        <div className="row ">
           
            <div>
                <div className="text-center">

                   

                    <h1 className="mb-2">Sign Up</h1>

                    <form className="needs-validation" method="post" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="row p-3">
                                <div>
                                    <div>
                                        <div className="row mt-3">
                                            <div className="col-auto">
                                                <label className="form-label">FirstName: </label>
                                            </div>
                                            <div className="col p-0 m-0 ms-3 input-group has-validation">
                                                <input type="firstName" {...register('firstName')}
                                                    className={`form-control p-2 ${errors.firstName ? 'is-invalid' : ''}`} placeholder="Enter your firstName" required />
                                                <div className="invalid-feedback text-start">{errors.firstName?.message}</div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-auto">
                                                <label className="form-label">LastName: </label></div>
                                            <div className="col pe-0 input-group has-validation">
                                                <input type="lastName" {...register('lastName')}
                                                    className={`form-control ms-2 p-2 ${errors.lastName ? 'is-invalid' : ''}`} placeholder="Enter your lastName." required />
                                                <div className="invalid-feedback text-start">{errors.lastName?.message}</div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-auto">
                                                <label className="form-label">Email: </label></div>
                                            <div className="col p-0 ms-5 ms-1 input-group has-validation">
                                                <input type="email" {...register("email")} className={`form-control p-2 ${errors.email ? 'is-invalid' : ''}`} placeholder="Enter your valid Email" required />
                                                <div className="invalid-feedback text-start">
                                                    {errors.email?.message}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-auto">
                                                <label className="form-label">Password: </label>
                                            </div>
                                            <div className="col p-0 ps-1 ms-3 input-group has-validation">
                                                <input type="Password" {...register("password")} className={`form-control p-2 ${errors.password ? 'is-invalid' : ''}`} placeholder="Enter a valid Password" required />
                                                <div className="invalid-feedback text-start">
                                                    {errors.password?.message}
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-center form-check mt-4">
                                                <label className="form-check-label text-dark">
                                                    <input className="form-check-input" type="checkbox" value="" aria-describedby="invalidCheck3Feedback" required />I agree to the platform's <span className="text-primary">Terms of Service</span> and <span className="text-primary">Privacy Policy</span> </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button className="btn btn-info mb-3" type="submit">Sign Up</button>
                            </div>

                            

                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
};
export default SignUp;