import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function Signup({ onSignup }) {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    phone_number: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_number: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const user = await response.json();

        if (user.error) {
          alert("User already exists!");
        } else {
          alert("Successfully created a new user!");
          onSignup(user);
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Signup error:", error);
    }

    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md mt-8 mb-8">
      <img
          src="https://static8.depositphotos.com/1003580/884/i/450/depositphotos_8846425-stock-photo-group-of-happy-children-playing.jpg"
          alt="Introductory Image"
          className="mb-4 mx-auto w-1/3"
        />
        <div className="text-2xl font-bold text-center mb-4">Sign Up</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                  Username:
                </label>
                <Field
                  type="text"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-600">
                  Phone Number:
                </label>
                <Field
                  type="text"
                  name="phone_number"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage
                  name="phone_number"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password:
                </label>
                <Field
                  type="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="text-sm">
                <p>
                  Already have an account?{" "}
                  <Link className="text-blue-500" to="/login">
                    Login
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;

// import React, { useState } from 'react';


// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = (e) => {
//     e.preventDefault();
//     console.log('Registering with:', email, password);
//   };
//   return (
//     <div className="flex h-screen">

//     <div className="w-1/2 hidden md:block">
//       <img src="register_image_url" alt="Register Image" className="w-full h-full object-cover" />
//     </div>

//     <div className="w-1/2 flex items-center justify-center bg-gray-200">      {/* Register Form */}
//       <form onSubmit={handleRegister} className="bg-white p-10 rounded shadow-md">
//         <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//           <input
//             type="email" id="email"
//             className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-indigo-500"
//             placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//           <input
//             type="password" id="password"
//             className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-indigo-500"
//             placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//         </div>

//         <div className="flex items-center justify-between">
//           <button type="submit"
//             className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           > Register </button>
//           <a href="/login" className="text-indigo-500">Have an account? Login</a>
//         </div>

//       </form>
//     </div>

//   </div>
//   )
// }

// export default Register