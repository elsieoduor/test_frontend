import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const { token, user } = await response.json();

        localStorage.setItem("token", token);
        onLogin(user);
        navigate("/");
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      console.error("Login error:", error);
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
        <div className="text-2xl font-bold text-center mb-4">Login</div>
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
                  Don't have an account?{" "}
                  <Link className="text-blue-500" to="/login">
                    Sign Up Now!
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md"
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;


// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Link, useNavigate } from "react-router-dom";

// function Login({ onLogin }) {
//   const navigate = useNavigate();

//   const initialValues = {
//     username: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const response = await fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       if (response.ok) {
//         const { token, user } = await response.json();

//         localStorage.setItem("token", token);
//         onLogin(user);
//         navigate("/");
//       } else {
//         const error = await response.json();
//         alert(error.message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }

//     setSubmitting(false);
//   };

//   return (
//       <div className="login-card">
//       <img
//         src="https://imgs.search.brave.com/LyTxG0MbCW19btJF5WkXp4GCFXD7oKci_t1cxBV9yck/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNC8w/Ny9jaGlkcmVuLXBs/YXlpbmctYXJvdW5k/LXRoZS13b3JsZC01/NS5qcGc" // Replace with the path to your introductory image
//         alt="Introductory Image"
//         className="intro-image"
//       />
//         <div className="login-header">Login</div>
//         <div className="login-body">
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form className="login-form">
//                 <div className="login-input">
//                   <label htmlFor="username" className="login-label">
//                     Username:
//                   </label>
//                   <Field
//                     type="text"
//                     name="username"
//                     className="login-input-field"
//                     placeholder="Username"
//                   />
//                   <ErrorMessage
//                     name="username"
//                     component="div"
//                     className="login-error"
//                   />
//                 </div>

//                 <div className="login-input">
//                   <label htmlFor="password" className="login-label">
//                     Password:
//                   </label>
//                   <Field
//                     type="password"
//                     name="password"
//                     className="login-input-field"
//                     placeholder="Enter your password"
//                   />
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="login-error"
//                   />
//                 </div>

//                 <div className="login-message">
//                   <p>
//                     Don't have an account?{" "}
//                     <Link className="login-link" to="/login">
//                       Sign Up Now!
//                     </Link>
//                   </p>
//                 </div>

//                 <button type="submit" className="login-btn" disabled={isSubmitting}>
//                   Login
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//   );
// }

// export default Login;


// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Link, useNavigate } from "react-router-dom";

// function Login({ onLogin }) {
//   const navigate = useNavigate();

//   const initialValues = {
//     username: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   function handlelogin(data) {}

//   // Update your handleSubmit function
// const handleSubmit = async (values, { setSubmitting }) => {
//   try {
//     const response = await fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     });

//     if (response.ok) {
//       const { token, user } = await response.json();

//       // Store the token securely (e.g., in localStorage)
//       localStorage.setItem("token", token);

//       // Update the onLogin function to include user information
//       onLogin(user);

//       // Redirect to the desired page
//       navigate("/");
//     } else {
//       const error = await response.json();
//       alert(error.message);
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//   }

//   setSubmitting(false);
// };
//   return (
//     <div className="card">
//       <div className="card-header">Login</div>
//       <div className="card-body">
//         <Formik
//           initialValues={initialValues}
//           // validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form className="forms">
//               <div className="input_fields">
//                 <label htmlFor="username" className="form-label">
//                   Username:
//                 </label>
//                 <Field
//                   type="text"
//                   name="username"
//                   className="form-control"
//                   placeholder="Username"
//                 />
//                 <ErrorMessage
//                   name="username"
//                   component="div"
//                   className="error"
//                 />
//               </div>

//               <div className="input_fields">
//                 <label htmlFor="password" className="form-label">
//                   Password:
//                 </label>
//                 <Field
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   placeholder="Enter your password"
//                 />
//                 <ErrorMessage
//                   name="password"
//                   component="div"
//                   className="error"
//                 />
//               </div>

//               <div className="form_message">
//                 <p>
//                   Don't have an account?{" "}
//                   <Link className="login_link" to="/login">
//                     Sign Up Now!
//                   </Link>
//                 </p>
//               </div>

//               <button type="submit" className="btn" disabled={isSubmitting}>
//                 Login
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React from 'react'
// import { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Logging in with:', email, password);
//   };
//   return (
//     <div className="flex h-screen">
//     <div className="w-1/2 flex items-center justify-center bg-gray-200">
  
//       <form onSubmit={handleLogin} className="bg-white p-10 rounded shadow-md">
//         <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//           <input type="email" id="email"
//             className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-indigo-500"
//             placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
//           > Login </button>
//           <a href="/register" className="text-indigo-500">Don't have an account? Register</a>
//         </div>
//       </form>

//     </div>

//     <div className="w-1/2 hidden md:block">
//       <img src="login_image_url" alt="Login Image" className="w-full h-full object-cover" />
//     </div>

//   </div>
//   )
// }

// export default Login;